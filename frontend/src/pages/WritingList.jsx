import React, { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import Writing from "../components/article/Writing";

export default function WritingList() {
  const [writings, setWritings] = useState([]);

  const getAllWritings = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/writings`)
      .then((resp) => resp.json())
      .then((data) => setWritings(data));
  };

  useEffect(() => {
    getAllWritings();
  }, []);

  return (
    <Flex flexWrap="wrap" ml={{ base: "0rem", md: "5rem" }} mr={{ md: "5rem" }}>
      {writings.map((writing) => (
        <Writing {...writing} key={`writing-${writing.id}`} />
      ))}
    </Flex>
  );
}
