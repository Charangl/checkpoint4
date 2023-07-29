import { Stack } from "@chakra-ui/react";
import React from "react";

import CreateRabbit from "../components/rabbit/CreateRabbit";
import CreateArticle from "../components/article/CreateArticle";

export default function Gestion() {
  return (
    <Stack>
      <CreateRabbit />
      <CreateArticle />
    </Stack>
  );
}
