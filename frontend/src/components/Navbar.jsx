/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";
import { useUserContext } from "../contexts/UserContext";
import PrivateLink from "./PrivateLink";

import logo2 from "../assets/logo2.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [{ user }, dispatch] = useUserContext();
  const handleLogout = () => {
    dispatch({ type: "RESET_USER" });
    navigate("/");
  };

  return (
    <Flex
      boxShadow="md"
      bgGradient="linear(to-t, #c1cbc0 , #D4CDCD 50%)"
      h="100vh"
      w="56"
      fixed
      left={0}
      top={0}
      flexDir="column"
      align="center"
      p={4}
    >
      <Box>
        <NavLink to="/">
          <Image
            src={logo2}
            alt="Logo"
            boxSize="11rem"
            objectFit="contain"
            mt="-1rem"
          />
        </NavLink>
      </Box>
      <Box textAlign="left">
        <NavLink title="articles" to="/writingList">
          <Button variant="sidebar">
            <Text
              fontFamily="Playfair Display"
              textTransform="uppercase"
              letterSpacing="0.1rem"
            >
              Articles
            </Text>
          </Button>
        </NavLink>
        <NavLink title="reproducteurs" to="/rabbitList">
          <Button variant="sidebar">
            <Text
              fontFamily="Playfair Display"
              textTransform="uppercase"
              letterSpacing="0.1rem"
            >
              Nos reproducteurs
            </Text>
          </Button>
        </NavLink>
        <NavLink title="lapereaux" to="/lapereaux">
          <Button variant="sidebar">
            <Text
              fontFamily="Playfair Display"
              textTransform="uppercase"
              letterSpacing="0.1rem"
            >
              Lapereaux
            </Text>
          </Button>
        </NavLink>
        <NavLink title="contact" to="/contact">
          <Button variant="sidebar">
            <Text
              fontFamily="Playfair Display"
              textTransform="uppercase"
              letterSpacing="0.1rem"
            >
              Me contacter
            </Text>
          </Button>
        </NavLink>
        <PrivateLink title="gestion" to="/gestion" authorizedRoles={["admin"]}>
          <Button variant="sidebar" position="relative" left="-1rem">
            <Text
              fontFamily="Playfair Display"
              textTransform="uppercase"
              letterSpacing="0.1rem"
            >
              Gestion
            </Text>
          </Button>
        </PrivateLink>
        {user ? (
          <Button variant="sidebar" type="button" onClick={handleLogout}>
            <Text
              fontFamily="Playfair Display"
              textTransform="uppercase"
              letterSpacing="0.1rem"
            >
              Déconnexion
            </Text>
          </Button>
        ) : (
          <NavLink title="login" to="/login">
            <Button variant="sidebar">
              <Text
                fontFamily="Playfair Display"
                textTransform="uppercase"
                letterSpacing="0.1rem"
              >
                Login
              </Text>
            </Button>
          </NavLink>
        )}
      </Box>
      <Text color="white" fontSize="xs" position="fixed" bottom="1">
        © WCS - La Loupe 2023
      </Text>
    </Flex>
  );
};

export default Navbar;
