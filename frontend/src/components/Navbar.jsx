import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons"; // Import the menu icon
import { useUserContext } from "../contexts/UserContext";
import PrivateLink from "./PrivateLink";

import logo2 from "../assets/logo2.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [{ user }, dispatch] = useUserContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch({ type: "RESET_USER" });
    navigate("/");
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Box
      boxShadow={{ md: "md" }}
      borderRight={{ md: "3px double #9a7531" }}
      bgGradient={{ md: "linear(to-t, #c1cbc0, #D4CDCD 50%)" }}
      height={{ md: "100vh" }}
      width={{ md: "15rem" }}
      flexDirection={{ md: "column" }}
      alignItems={{ md: "center" }}
      padding={{ md: 4 }}
      position={{ md: "fixed" }}
      left={{ md: 0 }}
      top={{ md: 0 }}
    >
      {/* Hamburger menu for mobile */}
      <Flex
        display={{ base: "flex", md: "none" }}
        justifyContent="flex-end"
        mb={4}
        mr={4} // Move the hamburger icon to the top right corner
      >
        <IconButton
          icon={<HamburgerIcon boxSize={7} />}
          variant="ghost"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        />
      </Flex>

      {/* Menu items for mobile */}
      <Modal isOpen={isMenuOpen} onClose={closeMenu} size="md">
        <ModalOverlay />
        <ModalContent bgGradient="linear(to-t, #c1cbc0, #D4CDCD 50%)" w="80%">
          <ModalBody>
            <Box>
              <NavLink to="/writingList" onClick={closeMenu}>
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
            </Box>
            <Box>
              <NavLink to="/repro" onClick={closeMenu}>
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
            </Box>
            <Box>
              <NavLink to="/baby" onClick={closeMenu}>
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
            </Box>
            <Box>
              <NavLink to="/contact" onClick={closeMenu}>
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
            </Box>
            <Box>
              <PrivateLink
                title="gestion"
                to="/gestion"
                authorizedRoles={["admin"]}
                onClick={closeMenu}
              >
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
            </Box>
            {user ? (
              <Box>
                <Button variant="sidebar" type="button" onClick={handleLogout}>
                  <Text
                    fontFamily="Playfair Display"
                    textTransform="uppercase"
                    letterSpacing="0.1rem"
                  >
                    Déconnexion
                  </Text>
                </Button>
              </Box>
            ) : (
              <Box>
                <NavLink to="/login" onClick={closeMenu}>
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
              </Box>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Menu items for md */}
      <Box
        textAlign="left"
        w="14rem"
        rounded="md"
        display={{ base: "none", md: "block" }}
      >
        <Box>
          <NavLink to="/">
            <Image
              src={logo2}
              alt="Logo"
              objectFit="contain"
              mt="-1rem"
              display="flex"
            />
          </NavLink>
        </Box>
        <Box>
          <NavLink to="/writingList">
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
        </Box>
        <Box>
          <NavLink to="/repro">
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
        </Box>
        <Box>
          <NavLink to="/baby">
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
        </Box>
        <Box>
          <NavLink to="/contact">
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
        </Box>
        <Box>
          <PrivateLink
            title="gestion"
            to="/gestion"
            authorizedRoles={["admin"]}
          >
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
        </Box>
        {user ? (
          <Box>
            <Button variant="sidebar" type="button" onClick={handleLogout}>
              <Text
                fontFamily="Playfair Display"
                textTransform="uppercase"
                letterSpacing="0.1rem"
              >
                Déconnexion
              </Text>
            </Button>
          </Box>
        ) : (
          <Box>
            <NavLink to="/login">
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
          </Box>
        )}
      </Box>

      <Text color="white" fontSize="xs" position="fixed" bottom="1">
        © WCS - La Loupe 2023
      </Text>
    </Box>
  );
};

export default Navbar;
