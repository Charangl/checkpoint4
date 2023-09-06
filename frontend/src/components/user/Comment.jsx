import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";
import DeleteReview from "./DeleteComment";

export default function Review(props) {
  const [{ user }] = useUserContext();
  const { id } = useParams();
  const { comment, writing_id: writingId } = props; // Utiliser writing_id dans les props

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
        <Heading fontSize="md">{user.pseudo}</Heading> <DeleteReview id={id} />
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
        {writingId} {/* Utiliser writingId ici */}
      </Text>
    </Box>
  );
}

Review.propTypes = {
  comment: PropTypes.string.isRequired,
  writing_id: PropTypes.string.isRequired, // Utiliser writing_id dans les propTypes
};
