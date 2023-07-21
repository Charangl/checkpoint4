import {
  Box,
  Image,
  Text,
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
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";

export default function RabbitDetails() {
  const navigate = useNavigate();
  const [rabbit, setRabbit] = useState(null);

  const { id } = useParams();
  const user = useUserContext();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const getOneRabbit = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/rabbits/${id}`)
      .then((resp) => resp.json())
      .then((data) => setRabbit(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getOneRabbit();
  }, [id]);

  const handleDelete = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/rabbits/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        onClose(); // Fermer le modal après la suppression réussie
        navigate("/rabbitList");
      })
      .catch((err) => console.error(err));
  };

  if (!rabbit) {
    return <p>Chargement du lapin...</p>;
  }

  return (
    <Box
      bg="#f0e6e6"
      borderRadius="1rem"
      boxShadow="md"
      p="2rem"
      flexDir="column"
      w="90%"
      mt="5rem"
      mx="auto"
    >
      <Image
        src={`${import.meta.env.VITE_ASSETS_URL}/assets/images/rabbit/${
          rabbit.photo
        }`}
        alt={rabbit.name}
        borderRadius="lg"
        h="auto"
        w="35%"
        objectFit="cover"
        float="left"
        mr="2rem"
      />

      <Text>{rabbit.name}</Text>

      <Text>
        Sexe : <span>{rabbit.sexe}</span>
      </Text>
      <Text>
        Présentation : <span>{rabbit.introduction}</span>
      </Text>

      {(user && user.role === "admin") || (
        <Button type="button" colorScheme="red" onClick={onOpen} mt="1rem">
          Supprimer
        </Button>
      )}

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
    </Box>
  );
}
