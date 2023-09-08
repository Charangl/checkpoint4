import PropTypes from "prop-types";
import React from "react";
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

export default function DeleteReview({ userRole, commentUserId, commentId }) {
  const { id } = useParams();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDelete = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/reviews/${commentId}`, {
      method: "DELETE",
      credentials: "include",
    })
      .then(() => {
        onClose();
      })
      .catch((err) => console.error(err));
  };

  // Ajoutez un console.log ici pour afficher l'ID lorsque le modal s'ouvre
  const openModal = () => {
    onOpen();
  };

  // Vérifiez si l'utilisateur a le droit de supprimer le commentaire
  const canDelete =
    userRole === "admin" || (userRole === "user" && commentUserId === id);

  return (
    <Box>
      {canDelete && (
        <Button
          type="button"
          colorScheme="transparent"
          color="black"
          onClick={openModal} // Utilisez openModal au lieu de onOpen
          boxSize={5}
        >
          X
        </Button>
      )}

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
            {canDelete && (
              <Button colorScheme="red" ml={3} onClick={handleDelete}>
                Supprimer
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

DeleteReview.propTypes = {
  userRole: PropTypes.string.isRequired,
  commentUserId: PropTypes.string.isRequired,
  commentId: PropTypes.string.isRequired, // Ajoutez la validation pour commentId
};
