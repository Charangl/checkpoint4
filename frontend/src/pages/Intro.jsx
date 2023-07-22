import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function Intro() {
  return (
    <Box>
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
        <Box p="1rem">
          <Heading
            fontSize="1.1rem"
            mb="2rem"
            fontFamily="Playfair Display"
            textTransform="uppercase"
            letterSpacing="0.1rem"
            position="relative"
            _before={{
              content: '""',
              position: "absolute",
              top: "50%",
              width: "4rem",
              height: "0.5px",
              background: "black",
              left: "-1rem",
            }}
            _after={{
              content: '""',
              position: "absolute",
              top: "50%",
              width: "77%",
              height: "0.5px",
              background: "black",
              right: "-1rem",
            }}
          >
            <Text ml="4rem" w="30%">
              Qui suis-je ?
            </Text>
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            porro facilis ad recusandae tempora placeat quae quisquam minus
            nostrum officia. Voluptas autem fuga pariatur cumque minima sunt
            ratione quam qui?
          </Text>
        </Box>
        <Box p="1rem">
          <Heading
            fontSize="1.1rem"
            mb="2rem"
            fontFamily="Playfair Display"
            textTransform="uppercase"
            letterSpacing="0.1rem"
            position="relative"
            _before={{
              content: '""',
              position: "absolute",
              top: "50%",
              width: "82%",
              height: "1px",
              background: "black",
              left: "-1rem",
            }}
            _after={{
              content: '""',
              position: "absolute",
              top: "50%",
              width: "6%",
              height: "1px",
              background: "black",
              right: "-1rem",
            }}
          >
            <Text ml="82.3%" w="30%">
              à propos
            </Text>
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
        <Box p="1rem">
          <Heading
            fontSize="1.1rem"
            mb="2rem"
            fontFamily="Playfair Display"
            textTransform="uppercase"
            letterSpacing="0.1rem"
            position="relative"
            _before={{
              content: '""',
              position: "absolute",
              top: "50%",
              width: "4rem",
              height: "1px",
              background: "black",
              left: "-1rem", // Adjust the spacing as needed
            }}
            _after={{
              content: '""',
              position: "absolute",
              top: "50%",
              width: "69.5%",
              height: "1px",
              background: "black",
              right: "-1rem", // Adjust the spacing as needed
            }}
          >
            <Text ml="4rem" w="40%">
              Mes engagements
            </Text>
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
