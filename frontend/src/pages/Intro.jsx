import {
  Flex,
  Box,
  Heading,
  Text,
  Divider,
  AbsoluteCenter,
} from "@chakra-ui/react";
import React from "react";

export default function Intro() {
  return (
    <Box zIndex={-2}>
      <Flex
        bg="#f0e6e6"
        borderRadius="1rem"
        boxShadow="md"
        p="2rem"
        flexDir="column"
        w="78.5%"
        mt={{ base: "2rem", md: "5rem" }}
        mx="auto"
      >
        <Box>
          <Heading
            fontSize="1.1rem"
            my="2rem"
            fontFamily="Playfair Display"
            textTransform="uppercase"
            letterSpacing="0.1rem"
            position="relative"
            padding="1"
          >
            <Divider bg="black" h="0.5px" />
            <AbsoluteCenter bg="#f0e6e6" px="4">
              Qui suis-je ?
            </AbsoluteCenter>
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            porro facilis ad recusandae tempora placeat quae quisquam minus
            nostrum officia. Voluptas autem fuga pariatur cumque minima sunt
            ratione quam qui?
          </Text>
        </Box>
        <Box>
          <Heading
            fontSize="1.1rem"
            my="2rem"
            fontFamily="Playfair Display"
            textTransform="uppercase"
            letterSpacing="0.1rem"
            position="relative"
            padding="1"
          >
            <Divider bg="black" h="1px" />
            <AbsoluteCenter bg="#f0e6e6" px="4">
              À propos
            </AbsoluteCenter>
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            porro facilis ad recusandae tempora placeat quae quisquam minus
            nostrum officia. Voluptas autem fuga pariatur cumque minima sunt
            ratione quam qui? Donec blandit eleifend dui. Aenean varius, tellus
            non condimentum gravida, turpis tortor hendrerit mauris, a gravida
            dolor quam fermentum augue. Vivamus vehicula faucibus sollicitudin.
            Vivamus ut dapibus metus. Nunc posuere augue at rutrum fringilla.
            Sed nec venenatis augue. Phasellus mollis lacus vel nibh semper
            vestibulum. Donec urna nisl, gravida in mauris id, ultrices molestie
            massa. Suspendisse dictum, augue at laoreet bibendum, nisl elit
            dictum mauris, vel malesuada orci dui vitae magna. Curabitur et
            imperdiet nisl, ac vestibulum ligula. Suspendisse vel ligula augue.
            Pellentesque suscipit eros nec pulvinar porta.
          </Text>
        </Box>
        <Box>
          <Heading
            fontSize="1.1rem"
            my="2rem"
            fontFamily="Playfair Display"
            textTransform="uppercase"
            letterSpacing="0.1rem"
            position="relative"
            padding="1"
          >
            <Divider bg="black" h="1px" />
            <AbsoluteCenter bg="#f0e6e6" px="4">
              Mes engagements
            </AbsoluteCenter>
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            porro facilis ad recusandae tempora placeat quae quisquam minus
            nostrum officia. Voluptas autem fuga pariatur cumque minima sunt
            ratione quam qui?
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
