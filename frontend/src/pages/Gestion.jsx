import { Stack } from "@chakra-ui/react";
import React from "react";

import CreateRabbit from "../components/CreateRabbit";
import CreateArticle from "../components/CreateArticle";

export default function Gestion() {
  return (
    <Stack>
      <CreateRabbit />
      <CreateArticle />
    </Stack>
  );
}
