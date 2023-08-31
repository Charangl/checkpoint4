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

import PrivateLink from "../private/PrivateLink";

export default function DeleteRabbit() {
  const navigate = useNavigate();

  const { id } = useParams();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleDelete = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/rabbits/${id}`, {
      method: "DELETE",
      credentials: "include",
    })
      .then(() => {
        onClose();
        navigate("/gestion");
      })
      .catch((err) => console.error(err));
  };

  return (
    <Box>
      {/* <Rabbit {...rabbit} key={`rabbit-${rabbit.id}`} /> */}
      <PrivateLink authorizedRoles={["admin"]}>
        <Button type="button" colorScheme="red" onClick={onOpen} mt="1rem">
          Supprimer
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Supprimer le lapin</ModalHeader>
            <ModalCloseButton />
            <ModalBody>Êtes-vous sûr de vouloir supprimer ce lapin ?</ModalBody>
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
      </PrivateLink>
    </Box>
  );
}
