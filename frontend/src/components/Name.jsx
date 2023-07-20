import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import imageHeader from "../assets/imageHeader.png";

export default function Name() {
  return (
    <Box>
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
        fontSize="5xl"
        zIndex="1"
        bg="transparent"
      >
        Des petits coeurs d'amour
      </Heading>
    </Box>
  );
}
