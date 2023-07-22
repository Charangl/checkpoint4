import { Flex } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Rabbit from "../components/Rabbit";

export default function RabbitListRepro() {
  const [rabbits, setRabbits] = useState([]);

  const getAllRabbits = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/rabbits`)
      .then((resp) => resp.json())
      .then((data) => setRabbits(data));
  };

  useEffect(() => {
    getAllRabbits();
  }, []);

  // Filtrer les lapins ayant le statut "reproducteur"
  const reproducteurRabbits = rabbits.filter(
    (rabbit) => rabbit.status === "reproducteur"
  );

  return (
    <Flex
      justifyContent="space-evenly"
      flexWrap="wrap"
      ml={{ base: "0rem", md: "5rem" }}
      mr={{ md: "5rem" }}
      mt={{ base: "2rem", md: "5rem" }}
    >
      {reproducteurRabbits.map((rabbit) => (
        <Rabbit {...rabbit} key={`rabbit-${rabbit.id}`} />
      ))}
    </Flex>
  );
}
