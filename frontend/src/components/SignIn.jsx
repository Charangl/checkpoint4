// SignIn.js
import { Box, Input, Text, Button, useToast, Center } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handleChangePseudo = (e) => {
    setPseudo(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!pseudo || !email || !password) {
      alert("Vous devez remplir tous les champs !");
    } else {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pseudo,
          email,
          password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.warn(data);
          toast({
            title: "Compte créé.",
            description: "Vous allez être redirigé vers la page de connexion.",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "bottom-right",
          });
          navigate(`/login`);
        })
        .catch(() => {
          toast({
            title: "Erreur.",
            description: "Impossible de s'inscrire, veuillez réessayer.",
            status: "error",
            duration: 3000,
            isClosable: true,
            position: "bottom-right",
          });
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Center textAlign="center">
        <Box
          margin="auto"
          maxW={{ base: "20rem", md: "35rem" }}
          zIndex={{ base: "2" }}
        >
          <Box mt={{ base: "1rem", md: "7rem" }}>
            <Text as="b" fontSize={{ base: "18px", md: "2xl" }}>
              S'enregistrer
            </Text>
          </Box>
          <Input
            required
            name="pseudo"
            placeholder="Pseudo"
            type="text"
            onChange={handleChangePseudo}
            value={pseudo}
            mt="2rem"
            mb={5}
            fontSize="10pt"
            color="black"
            _placeholder={{ color: "gray.600" }}
            _hover={{
              bg: "white",
              color: "black",
              border: "1px solid",
              borderColor: "brown.400",
            }}
            _focus={{
              outline: "none",
              bg: "white",
              border: "1px solid",
              borderColor: "brown.400",
            }}
            bg="#e3d5d1"
          />
          <Input
            required
            name="email"
            placeholder="Email"
            type="email"
            onChange={handleChangeEmail}
            value={email}
            mb={5}
            fontSize="10pt"
            color="black"
            _placeholder={{ color: "gray.600" }}
            _hover={{
              bg: "white",
              color: "black",
              border: "1px solid",
              borderColor: "brown.400",
            }}
            _focus={{
              outline: "none",
              bg: "white",
              border: "1px solid",
              borderColor: "brown.400",
            }}
            bg="#e3d5d1"
          />
          <Input
            required
            name="password"
            placeholder="Mot de passe"
            type="password"
            onChange={handleChangePassword}
            value={password}
            mb={5}
            color="black"
            fontSize="10pt"
            _placeholder={{ color: "gray.600" }}
            _hover={{
              bg: "white",
              color: "black",
              border: "1px solid",
              borderColor: "brown.400",
            }}
            _focus={{
              outline: "none",
              bg: "white",
              border: "1px solid",
              borderColor: "brown.400",
            }}
            bg="#e3d5d1"
          />

          <Button
            width="100%"
            type="submit"
            onClick={() => {
              if (!pseudo || !email || !password) {
                toast({
                  title: "Champs manquants.",
                  description: "Vous devez remplir tous les champs.",
                  status: "warning",
                  duration: 3000,
                  isClosable: true,
                  position: "bottom-right",
                });
              }
            }}
          >
            S'enregistrer
          </Button>
        </Box>
      </Center>
    </form>
  );
}
