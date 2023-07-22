import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import imageHeader from "../assets/imageHeader.png";
import UserContext from "../contexts/UserContext";

export default function Name() {
  const [{ user }] = useContext(UserContext);
  return (
    <Box>
      <Box position="relative" mt="-1rem">
        {user && (
          <Text textAlign={{ base: "right", md: "left" }}>
            Bienvenue{" "}
            <Text fontWeight="bold" display="inline">
              {user.pseudo}
            </Text>
          </Text>
        )}
      </Box>
      <Image
        src={imageHeader}
        alt="Logo"
        position="absolute"
        w="60%"
        top="0"
        right="0"
        zIndex="-10"
      />
      <Heading
        fontFamily="Dancing script"
        textAlign="center"
        fontSize={{ base: "2rem", md: "3rem" }}
        zIndex="1"
        bg="transparent"
        mt={{ base: "2rem", md: "0" }}
      >
        Des petits coeurs d'amour
      </Heading>
    </Box>
  );
}
