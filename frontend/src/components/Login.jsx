import PropTypes from "prop-types";
import { Box, Input, Text, Button, useToast, Center } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";

export default function Login({ setIsRegistered }) {
  const { dispatch } = useUserContext();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handleRegister = () => {
    setIsRegistered(false);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      // ... gestion du toast ...
    } else {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/login`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("La connexion a échoué.");
          }
          return res.json();
        })
        .then((data) => {
          console.warn(data);
          dispatch({ type: "SET_USER", payload: data });
          toast({
            title: "Authentification réussie.",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "bottom-right",
          });
          navigate(`/`);
        })
        .catch((err) => {
          console.error(err);
          toast({
            title: "Erreur.",
            description:
              err.message || "Impossible de se connecter, veuillez réessayer.",
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
          <Center mb="1rem">
            <Text fontSize="xs" mt="0.5rem">
              Vous n'avez pas encore de compte ?&nbsp;
            </Text>
            <Text
              fontSize="xs"
              color="brown.200"
              as="b"
              mt="0.5rem"
              _hover={{ textDecoration: "underline" }}
              cursor="pointer"
              onClick={handleRegister}
            >
              S'inscrire
            </Text>
          </Center>
          <Box mt={{ base: "1rem", md: "7rem" }}>
            <Text as="b" fontSize={{ base: "18px", md: "2xl" }}>
              Bienvenue !
            </Text>
          </Box>
          <Input
            required
            name="email"
            placeholder="Email"
            type="email"
            onChange={handleChangeEmail}
            value={email}
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
              if (!email || !password) {
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
            Me connecter
          </Button>
        </Box>
      </Center>
    </form>
  );
}

Login.propTypes = {
  setIsRegistered: PropTypes.func.isRequired,
};
