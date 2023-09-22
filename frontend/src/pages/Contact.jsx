import React, { useState } from "react";
import {
  Box,
  Text,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
  Center,
} from "@chakra-ui/react";
// import { useParams } from "react-router-dom";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // const { id } = useParams();
  const toast = useToast();

  const postMailToBreeding = () => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/nodemailer/send-mail-with-text`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          message,
          // BreedingEmail: breeding.email, // Breeding email is undefined, you might need to define "breeding" here
        }),
      }
    )
      .then(() => {
        setEmail("");
        setMessage("");
      })
      .catch((err) => console.error(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postMailToBreeding();
  };

  return (
    <Center>
      <Box mt="3rem" textAlign="center">
        <Text mb="2rem" fontSize="sm">
          Une question ? Une demande d'informations ou l'envie de réserver un
          petit lapereau ?<br />
          N'hésitez pas à me contacter, je vous répondrai dans les plus brefs
          délais.
        </Text>
        <form onSubmit={handleSubmit}>
          <FormLabel textAlign="center">Votre email</FormLabel>
          <Input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            width={{ base: "20rem", md: "30rem" }}
            border="1px solid grey"
            type="email"
          />
          <FormLabel mt="1rem" textAlign="center">
            Votre message
          </FormLabel>
          <Textarea
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            width={{ base: "22rem", md: "40rem" }}
            border="1px solid grey"
            type="text"
          />
          <br />
          <Button
            mt="1rem"
            width="10rem"
            height="3rem"
            bg="#50908f"
            color="white"
            type="submit"
            onClick={() => {
              if (email && message) {
                toast({
                  title: "Votre message a bien été envoyé.",
                  status: "success",
                  duration: 9000,
                  isClosable: true,
                });
              }
            }}
          >
            Envoyer
          </Button>
        </form>
      </Box>
    </Center>
  );
}
