import React, { useState } from "react";
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
  Input,
  Select,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import PrivateLink from "../private/PrivateLink"; // Assurez-vous d'importer PrivateLink depuis le bon chemin

export default function EditRabbit() {
  // const navigate = useNavigate();
  const { id } = useParams();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState("");
  const [affixe, setAffixe] = useState("");
  const [sexe, setSexe] = useState("");

  const handleEdit = () => {
    const rabbitData = {
      name,
      affixe,
      sexe,
      // ... (autres données de modification)
    };

    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/rabbits/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(rabbitData),
    })
      .then(() => {
        onClose();
        // Mettez à jour vos données ou faites ce que vous devez faire
      })
      .catch((err) => console.error(err));
  };

  return (
    <Box>
      <PrivateLink authorizedRoles={["admin"]}>
        <Button type="button" colorScheme="blue" onClick={onOpen} mt="1rem">
          Modifier
        </Button>
      </PrivateLink>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modifier le lapin</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="Nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="Affixe de l'élevage"
              value={affixe}
              onChange={(e) => setAffixe(e.target.value)}
            />
            <Select
              placeholder="Choisir le sexe"
              value={sexe}
              onChange={(e) => setSexe(e.target.value)}
            >
              <option value="Mâle">Mâle</option>
              <option value="Femelle">Femelle</option>
              <option value="Indéfini">Indéfini</option>
            </Select>
            {/* ... Ajoutez les autres champs de modification ici */}
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Annuler
            </Button>
            <Button colorScheme="blue" ml={3} onClick={handleEdit}>
              Sauvegarder
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
