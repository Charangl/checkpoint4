import React, { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import Review from "./Comment";

export default function ReviewList() {
  const [reviews, setReviews] = useState([]);

  const getAllReviews = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/reviews`)
      .then((resp) => resp.json())
      .then((data) => setReviews(data));
  };

  useEffect(() => {
    getAllReviews();
  }, []);

  return (
    <Flex flexWrap="wrap" h="35rem" overflow="auto">
      {reviews.map((review) => (
        <Review {...review} key={`review-${review.id}`} />
      ))}
    </Flex>
  );
}
