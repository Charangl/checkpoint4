import { Stack } from "@chakra-ui/react";
import React from "react";
import Login from "../components/Login";

export default function Home() {
  return (
    <Stack
      p={{ base: "1rem, 1rem, 1rem", md: "3rem 6rem 0" }}
      bgGradient="linear-gradient(#F6FAFD 0%, #FFFFFF 19.4%)"
    >
      <Login />
    </Stack>
  );
}
