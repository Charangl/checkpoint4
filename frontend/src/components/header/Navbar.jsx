import { NavLink, useNavigate } from "react-router-dom";
import {
  Box,
  Image,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useUserContext } from "../../contexts/UserContext";
import PrivateLink from "../private/PrivateLink";

import logo2 from "../../assets/logo2.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [{ user }, dispatch] = useUserContext();

  const handleLogout = () => {
    dispatch({ type: "RESET_USER" });
    navigate("/");
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
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon boxSize={8} />}
          variant="transparent"
          display={{ base: "flex", md: "none" }}
        />

        {/* Menu items for mobile */}

        <MenuList
          bgGradient="linear(to-t, #c1cbc0, #D4CDCD 50%)"
          position="relative"
          zIndex={2}
        >
          <NavLink to="/writingList">
            <MenuItem bg="transparent">
              <Text
                fontFamily="Playfair Display"
                textTransform="uppercase"
                letterSpacing="0.1rem"
              >
                Articles
              </Text>
            </MenuItem>
          </NavLink>

          <NavLink to="/repro">
            <MenuItem bg="transparent">
              <Text
                fontFamily="Playfair Display"
                textTransform="uppercase"
                letterSpacing="0.1rem"
              >
                Nos reproducteurs
              </Text>
            </MenuItem>
          </NavLink>

          <NavLink to="/baby">
            <MenuItem bg="transparent">
              <Text
                fontFamily="Playfair Display"
                textTransform="uppercase"
                letterSpacing="0.1rem"
              >
                Lapereaux
              </Text>
            </MenuItem>
          </NavLink>

          <NavLink to="/contact">
            <MenuItem bg="transparent">
              <Text
                fontFamily="Playfair Display"
                textTransform="uppercase"
                letterSpacing="0.1rem"
              >
                Me contacter
              </Text>
            </MenuItem>
          </NavLink>

          <PrivateLink
            title="gestion"
            to="/gestion"
            authorizedRoles={["admin"]}
          >
            <MenuItem position="relative" left="-1rem" bg="transparent">
              <Text
                fontFamily="Playfair Display"
                textTransform="uppercase"
                letterSpacing="0.1rem"
              >
                Gestion
              </Text>
            </MenuItem>
          </PrivateLink>

          {user ? (
            <MenuItem type="button" onClick={handleLogout} bg="transparent">
              <Text
                fontFamily="Playfair Display"
                textTransform="uppercase"
                letterSpacing="0.1rem"
              >
                Déconnexion
              </Text>
            </MenuItem>
          ) : (
            <NavLink to="/login">
              <MenuItem bg="transparent">
                <Text
                  fontFamily="Playfair Display"
                  textTransform="uppercase"
                  letterSpacing="0.1rem"
                >
                  Login
                </Text>
              </MenuItem>
            </NavLink>
          )}
        </MenuList>
      </Menu>

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

      <Text color="white" fontSize="xs" position="absolute" bottom="1">
        © WCS - La Loupe 2023
      </Text>
    </Box>
  );
};

export default Navbar;
