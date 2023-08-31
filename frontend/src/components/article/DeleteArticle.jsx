import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import PrivateLink from "../private/PrivateLink"; // Assurez-vous d'importer PrivateLink depuis le bon chemin

export default function DeleteArticle() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDelete = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/writings/${id}`, {
      method: "DELETE",
      credentials: "include",
    })
      .then(() => {
        onClose();
        navigate("/writingList"); // Redirige vers la liste des articles après la suppression
      })
      .catch((err) => console.error(err));
  };

  return (
    <Box>
      <PrivateLink authorizedRoles={["admin"]}>
        <Button type="button" colorScheme="red" onClick={onOpen} mt="1rem">
          Supprimer
        </Button>
      </PrivateLink>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Supprimer l'article</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Êtes-vous sûr de vouloir supprimer cet article ?
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Annuler
            </Button>
            <Button colorScheme="red" ml={3} onClick={handleDelete}>
              Supprimer
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
