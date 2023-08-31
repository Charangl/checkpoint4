import { Box, Image, Text, Heading } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DeleteRabbit from "../components/rabbit/DeleteRabbit";
import EditRabbit from "../components/rabbit/EditRabbit";

export default function RabbitDetails() {
  const [rabbit, setRabbit] = useState(null);

  const { id } = useParams();

  const getOneRabbit = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/rabbits/${id}`)
      .then((resp) => resp.json())
      .then((data) => setRabbit(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getOneRabbit();
  }, [id]);

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
      w="78.5%"
      mt={{ base: "2rem", md: "5rem" }}
      mx="auto"
    >
      <Heading
        fontSize="1.2rem"
        fontFamily="Playfair Display"
        textTransform="uppercase"
        letterSpacing="0.1rem"
        textAlign="center"
      >
        {rabbit.name}
      </Heading>
      <Image
        borderRadius="lg"
        h="auto"
        w="35%"
        objectFit="cover"
        float="left"
        mr="2rem"
        src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/rabbit/${
          rabbit.photo
        }`}
        alt={rabbit.name}
      />
      <Box mb="2rem">
        <Text>
          Sexe : <span>{rabbit.sexe}</span>
        </Text>
        <Text>
          Couleur : <span>{rabbit.color}</span>
        </Text>
        <Text>
          Né.e le : <span>{rabbit.birthday}</span>
        </Text>
        <Text>
          Présentation : <span>{rabbit.introduction}</span>
        </Text>
        <Text>
          Tatouage : <span>{rabbit.tattoo}</span>
        </Text>
        <Text>
          Status : <span>{rabbit.status}</span>
        </Text>
        <Text>
          <span>{rabbit.reservation}</span>
        </Text>
        <Text>
          Pédigree : <span>{rabbit.pedigree}</span>
        </Text>
        <DeleteRabbit />
        <EditRabbit />
      </Box>
    </Box>
  );
}
