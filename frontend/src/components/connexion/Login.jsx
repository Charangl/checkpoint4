import { Box, Input, Text, Button, useToast, Center } from "@chakra-ui/react";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";

export default function Login() {
  const dispatch = useUserContext()[1];
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      console.info("Vous devez remplir tous les champs !");
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
        .then((res) => res.json())
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
        .catch(() => {
          toast({
            title: "Erreur.",
            description: "Impossible de se connecter, veuillez réessayer.",
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
              Bienvenue !
            </Text>
          </Box>
          <Box mt={3}>
            <Text>
              Vous n'avez pas de compte ?{" "}
              <NavLink to="/signIn">S'enregistrer</NavLink>
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
            bg="#50908f"
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
