import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

import { useUserContext } from "../../contexts/UserContext";

import DeleteReview from "./DeleteComment";

export default function Review({ comment, pseudo, commentId }) {
  const [{ user }] = useUserContext();

  return (
    <Box
      bg="#f0e6e6"
      borderRadius="1rem"
      boxShadow="md"
      p="1.5rem"
      flexDir="column"
      w="32rem"
      h="8rem"
      mx="auto"
    >
      <Box display="flex" justifyContent="space-between">
        <Heading fontSize="md">{pseudo}</Heading>
        <DeleteReview
          userRole={user?.role}
          commentUserId={user?.id}
          commentId={commentId}
        />
      </Box>
      <Text
        overflow="scroll"
        sx={{
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {comment}
      </Text>
    </Box>
  );
}

Review.propTypes = {
  comment: PropTypes.string.isRequired,
  pseudo: PropTypes.string.isRequired,
  commentId: PropTypes.string.isRequired,
};
