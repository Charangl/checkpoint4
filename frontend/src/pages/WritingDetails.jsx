import { Box, Image, Text, Heading } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HTMLReactParser from "html-react-parser";

import DeleteWriting from "../components/article/DeleteArticle";
import EditArticle from "../components/article/EditArticle";
import AddComment from "../components/user/AddComment";

export default function WritingDetails() {
  const [writing, setWriting] = useState(null);

  const { id } = useParams();

  const getOneWriting = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/writings/${id}`)
      .then((resp) => resp.json())
      .then((data) => setWriting(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getOneWriting();
  }, [id]);

  if (!writing) {
    return <p>Chargement du lapin...</p>;
  }

  return (
    <Box>
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
        <Heading
          fontSize="1.2rem"
          mb="2rem"
          fontFamily="Playfair Display"
          textTransform="uppercase"
          textAlign="center"
          mx="auto"
          letterSpacing="0.1rem"
          position="relative"
          className="heading-with-traits"
        >
          <Text w="40%" mx="30%">
            {writing.title}
          </Text>

          <Box
            style={{
              content: '""',
              position: "absolute",
              top: "50%",
              height: "0.5px",
              background: "black",
              width: "var(--pseudo-width)",
              left: "var(--pseudo-left)",
            }}
          />
          <Box
            style={{
              content: '""',
              position: "absolute",
              top: "50%",
              height: "0.5px",
              background: "black",
              width: "var(--pseudo-width)",
              right: "var(--pseudo-right)",
            }}
          />
        </Heading>
        <Box>
          <Image
            src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/${
              writing.image
            }`}
            alt={writing.title}
            borderRadius="lg"
            boxSize="30%"
            maxH="400px"
            objectFit="cover"
            float="left"
            mr="1.2rem"
            mb="0.3rem"
          />
        </Box>
        <Box minH="25rem">
          <Text>{HTMLReactParser(writing.article)}</Text>
          <Box display="flex" justifyContent="right" mt="2rem">
            <EditArticle />
            <DeleteWriting />
          </Box>
        </Box>
      </Box>
      <AddComment />
    </Box>
  );
}
