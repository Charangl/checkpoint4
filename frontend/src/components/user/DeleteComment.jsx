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
import { useParams } from "react-router-dom";

export default function DeleteReview() {
  const { id } = useParams();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDelete = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/reviews/${id}`, {
      method: "DELETE",
      credentials: "include",
    })
      .then(() => {
        onClose();
      })
      .catch((err) => console.error(err));
  };

  return (
    <Box>
      <Button
        type="button"
        colorScheme="transparent"
        color="black"
        onClick={onOpen}
        boxSize={5}
      >
        X
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Supprimer le commentaire</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Êtes-vous sûr de vouloir supprimer ce commentaire ?
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
