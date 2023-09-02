import { Box, Image, Text, Heading } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DeleteRabbit from "../components/rabbit/DeleteRabbit";
import EditRabbit from "../components/rabbit/EditRabbit";
import { convertDateFormat } from "../services/convertTime";

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
      p="2rem 2rem 0.1rem 2rem"
      flexDir="column"
      w="78.5%"
      mt={{ base: "2rem", md: "5rem" }}
      mx="auto"
    >
      <Heading
        fontSize={{ base: "1.5rem", md: "2.5rem" }}
        fontFamily="Dancing script"
        textAlign="center"
        mt="-1rem"
      >
        {rabbit.name}
      </Heading>
      <Text
        fontFamily="Playfair Display"
        textTransform="uppercase"
        letterSpacing="0.1rem"
        textAlign="center"
        mb="1rem"
      >
        {rabbit.affixe}
      </Text>
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
          {" "}
          Né.e le {convertDateFormat(rabbit.birthday)} et arrivé.e le{" "}
          <span>{convertDateFormat(rabbit.arrival_date)} à l'élevage.</span>
        </Text>
        <Text>
          <span>
            {rabbit.sexe} de couleur {rabbit.color} et aux yeux {rabbit.eyes}
          </span>
        </Text>

        <Text>
          Poids : <span>{rabbit.weight}</span>
        </Text>

        <Text>
          Tatouage : <span>{rabbit.tattoo}</span>
        </Text>

        <Text>
          Pédigree : <span>{rabbit.pedigree}</span>
        </Text>
        <Text>
          Présentation : <span>{rabbit.introduction}</span>
        </Text>
        <Box display="flex" justifyContent="right" mt="2rem">
          <EditRabbit />
          <DeleteRabbit />
        </Box>
      </Box>
    </Box>
  );
}
