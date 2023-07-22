import { Stack } from "@chakra-ui/react";
import React from "react";

import CreateRabbit from "../components/CreateRabbit";
import CreateArticle from "../components/CreateArticle";
// import DeleteRabbit from "../components/DeleteRabbit";

export default function Gestion() {
  return (
    <Stack>
      <CreateRabbit />
      <CreateArticle />
      {/* <DeleteRabbit /> */}
    </Stack>
  );
}
