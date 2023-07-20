import { Flex } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Rabbit from "../components/Rabbit";

export default function RabbitList() {
  const [rabbits, setRabbits] = useState([]);
  // const [searchQuery, setSearchQuery] = useState("");
  // const [searchQuery2, setSearchQuery2] = useState("");

  const getAllRabbits = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/rabbits`)
      .then((resp) => resp.json())
      .then((data) => setRabbits(data));
  };

  useEffect(() => {
    getAllRabbits();
  }, []);

  // const handleSearchQueryChange = (e) => {
  //   setSearchQuery(e.target.value);
  // };

  // const handleSearchQuery2Change = (e) => {
  //   setSearchQuery2(e.target.value);
  // };

  // const filteredRabbits = rabbits.filter((rabbit) => {
  //   const matchesSearchQuery = rabbit.name
  //     .toLowerCase()
  //     .includes(searchQuery.toLowerCase());

  //   const matchesSearchQuery2 = rabbit.sexe
  //     .toLowerCase()
  //     .includes(searchQuery2.toLowerCase());

  //   return matchesSearchQuery && matchesSearchQuery2;
  // });

  return (
    <Flex
      justifyContent="space-evenly"
      flexWrap="wrap"
      ml={{ base: "0rem", md: "5rem" }}
      mr={{ md: "5rem" }}
      mt="5rem"
    >
      {rabbits.map((rabbit) => (
        <Rabbit {...rabbit} key={`rabbit-${rabbit.id}`} />
      ))}
    </Flex>
  );
}
