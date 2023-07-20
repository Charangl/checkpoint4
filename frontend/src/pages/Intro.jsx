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
        w="85%"
        mt="5rem"
        mx="auto"
      >
        <Box p="1rem">
          <Heading
            fontSize="1.2rem"
            mb="2rem"
            fontFamily="Playfair Display"
            textTransform="uppercase"
            letterSpacing="0.1rem"
            position="relative"
            _before={{
              content: '""',
              position: "absolute",
              top: "50%",
              width: "7%",
              height: "0.5px",
              background: "black",
              left: "-10px",
            }}
            _after={{
              content: '""',
              position: "absolute",
              top: "50%",
              width: "79%",
              height: "0.5px",
              background: "black",
              right: "-10px",
            }}
          >
            <Text ml="7%">Qui suis-je ?</Text>
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
            fontSize="1.2rem"
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
              left: "-10px", // Adjust the spacing as needed
            }}
            _after={{
              content: '""',
              position: "absolute",
              top: "50%",
              width: "7%",
              height: "1px",
              background: "black",
              right: "-10px", // Adjust the spacing as needed
            }}
          >
            <Text ml="82.5%">à propos</Text>
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
            fontSize="1.2rem"
            mb="2rem"
            fontFamily="Playfair Display"
            textTransform="uppercase"
            letterSpacing="0.1rem"
            position="relative"
            _before={{
              content: '""',
              position: "absolute",
              top: "50%",
              width: "7%",
              height: "1px",
              background: "black",
              left: "-10px", // Adjust the spacing as needed
            }}
            _after={{
              content: '""',
              position: "absolute",
              top: "50%",
              width: "72.5%",
              height: "1px",
              background: "black",
              right: "-10px", // Adjust the spacing as needed
            }}
          >
            <Text ml="7%">Mes engagements</Text>
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
