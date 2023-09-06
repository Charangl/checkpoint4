import React, { useState } from "react";
import {
  Flex,
  Box,
  Heading,
  Button,
  Textarea,
  useToast,
  Text,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";
import ReviewList from "./CommentListWriting";

export default function AddComment() {
  const navigate = useNavigate();
  const [comment, setComment] = useState("");
  const [{ user }] = useUserContext();
  const toast = useToast();
  const { id } = useParams();

  const handleChangeComment = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!comment) {
      toast({
        title: "Champs",
        description: "Vous ne pouvez pas poster un message vide",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "bottom-right",
      });
    } else {
      const commentData = {
        comment,
        writing_id: id, // Utilisation de l'ID de l'article extrait de l'URL
      };

      // Envoyer le commentaire vers l'URL appropriée
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(commentData),
      })
        .then((res) => res.json())
        .then((data) => {
          setComment("");
          navigate(`/writings/${data.id}`);
        })
        .catch(() => {
          toast({
            title: "Erreur.",
            description: "Erreur lors de l'envoi du message",
            status: "error",
            duration: 3000,
            isClosable: true,
            position: "bottom-right",
          });
        });
    }
  };

  if (user && (user.role === "user" || user.role === "admin")) {
    return (
      <Flex p="2rem" flexDir="column" w="90%" mt="2rem" mx="auto">
        <Heading
          fontSize="1.2rem"
          fontFamily="Playfair Display"
          textTransform="uppercase"
          letterSpacing="0.1rem"
          mt="1rem"
        >
          Ajouter un commentaire
        </Heading>
        <Text>{user.pseudo}</Text>
        <form onSubmit={handleSubmit}>
          <Box mt={{ base: "1rem", md: "2rem" }} zIndex={{ base: "2" }}>
            <Textarea
              required
              name="comment"
              placeholder="Écrire votre commentaire"
              type="text"
              value={comment}
              maxLength={100}
              onChange={handleChangeComment}
              mb={5}
              color="black"
              fontSize="10pt"
              _placeholder={{ color: "gray.500" }}
              _hover={{
                bg: "white",
                color: "black",
                border: "1px solid",
                borderColor: "blue.500",
              }}
              _focus={{
                outline: "none",
                bg: "white",
                border: "1px solid",
                borderColor: "blue.500",
              }}
              bg="gray.50"
            />
          </Box>
          <Button type="submit" bg="#50908f" color="white">
            Envoyer
          </Button>
        </form>
        <Box mt="2rem">
          <ReviewList articleId={id} /> {/* Passer l'ID ici */}
        </Box>
      </Flex>
    );
  }

  return (
    <Flex p="2rem" flexDir="column" w="90%" mt="2rem" mx="auto">
      <Box p="1rem">
        <Text>Il faut être connecté pour commenter.</Text>
      </Box>
    </Flex>
  );
}
