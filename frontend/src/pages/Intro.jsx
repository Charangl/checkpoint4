import {
  Flex,
  Box,
  Heading,
  Text,
  Divider,
  AbsoluteCenter,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EditIntro from "../components/intro/EditIntro";

export default function Intro() {
  const [breeding, setBreeding] = useState(null);

  const { id } = useParams();

  const getOneBreeding = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/breedings/${1}`)
      .then((resp) => resp.json())
      .then((data) => setBreeding(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getOneBreeding();
  }, [id]);

  if (!breeding) {
    return <p>Chargement de la page</p>;
  }
  return (
    <Box>
      <Flex
        bg="#f0e6e6"
        borderRadius="1rem"
        boxShadow="md"
        p="2rem"
        flexDir="column"
        w="78.5%"
        mt={{ base: "2rem", md: "5rem" }}
        mx="auto"
      >
        <Box>
          <Heading
            fontSize="1.1rem"
            my="2rem"
            fontFamily="Playfair Display"
            textTransform="uppercase"
            letterSpacing="0.1rem"
            position="relative"
            padding="1"
          >
            <Divider bg="black" h="0.5px" />
            <AbsoluteCenter bg="#f0e6e6" px="4">
              Qui suis-je ?
            </AbsoluteCenter>
          </Heading>
          <Text>{breeding.breeder}</Text>
        </Box>
        <Box>
          <Heading
            fontSize="1.1rem"
            my="2rem"
            fontFamily="Playfair Display"
            textTransform="uppercase"
            letterSpacing="0.1rem"
            position="relative"
            padding="1"
          >
            <Divider bg="black" h="1px" />
            <AbsoluteCenter bg="#f0e6e6" px="4">
              À propos
            </AbsoluteCenter>
          </Heading>
          <Text>{breeding.introduction}</Text>
        </Box>
        <Box>
          <Heading
            fontSize="1.1rem"
            my="2rem"
            fontFamily="Playfair Display"
            textTransform="uppercase"
            letterSpacing="0.1rem"
            position="relative"
            padding="1"
          >
            <Divider bg="black" h="1px" />
            <AbsoluteCenter bg="#f0e6e6" px="4">
              Mes engagements
            </AbsoluteCenter>
          </Heading>
          <Text>{breeding.engagement}</Text>
        </Box>
        <Box>
          <Heading
            fontSize="1.1rem"
            my="2rem"
            fontFamily="Playfair Display"
            textTransform="uppercase"
            letterSpacing="0.1rem"
            position="relative"
            padding="1"
          >
            <Divider bg="black" h="1px" />
            <AbsoluteCenter bg="#f0e6e6" px="4">
              Coordonnées
            </AbsoluteCenter>
          </Heading>
          <Text>
            {breeding.name}
            <br />
            {breeding.street}
            <br />
            {breeding.zip_code} {breeding.city}
          </Text>
        </Box>
        <Box display="flex" justifyContent="right" mt="2rem">
          <EditIntro />
        </Box>
      </Flex>
    </Box>
  );
}
