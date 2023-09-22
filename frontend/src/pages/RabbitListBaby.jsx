import { Flex, Switch, Box, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Rabbit from "../components/rabbit/Rabbit";

export default function RabbitListBaby() {
  const [rabbits, setRabbits] = useState([]);
  const [showReserved, setShowReserved] = useState(false);
  const [showAvailable, setShowAvailable] = useState(false);

  const getAllRabbits = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/rabbits`)
      .then((resp) => resp.json())
      .then((data) => setRabbits(data));
  };

  useEffect(() => {
    getAllRabbits();
  }, []);

  const babyRabbits = rabbits.filter((rabbit) => rabbit.status === "baby");

  const filteredRabbits = babyRabbits.filter((rabbit) => {
    const isReservedMatch = showReserved && rabbit.reservation === "Réservé";
    const isAvailableMatch =
      showAvailable && rabbit.reservation === "Disponible";

    return (
      (!showReserved && !showAvailable) || isReservedMatch || isAvailableMatch
    );
  });

  return (
    <Box>
      <Flex mt={{ base: "2rem", md: "5rem" }}>
        <Switch
          colorScheme="teal"
          isChecked={showReserved}
          onChange={() => setShowReserved(!showReserved)}
          mr={2}
          mb="2rem"
        />
        <Text mr="2rem">Afficher les réservés</Text>
        <Switch
          colorScheme="teal"
          isChecked={showAvailable}
          onChange={() => setShowAvailable(!showAvailable)}
          mr={2}
          mb="2rem"
        />
        Afficher les disponibles
      </Flex>
      <Flex
        justifyContent="space-evenly"
        flexWrap="wrap"
        ml={{ base: "0rem", md: "5rem" }}
        mr={{ md: "5rem" }}
        mt="2rem"
      >
        {filteredRabbits.map((rabbit) => (
          <Rabbit {...rabbit} key={`rabbit-${rabbit.id}`} />
        ))}
      </Flex>
    </Box>
  );
}
