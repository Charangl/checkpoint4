import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import Review from "./Comment";

export default function ReviewList() {
  const [reviews, setReviews] = useState([]);
  const [writing, setWriting] = useState();
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  const getOneWriting = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/writings/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setWriting(data);
      })
      .catch((err) => console.error(err));
  };

  const getComments = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/reviews/`)
      .then((resp) => resp.json())
      .then((data) => {
        if (writing.id) {
          const filteredComments = data.filter(
            (review) => review.writing_id === writing.id
          );
          setReviews(filteredComments);
        }
      })
      .catch((err) => console.error(err));
  };

  const getUsers = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/`)
      .then((resp) => resp.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getOneWriting();
    getUsers();
  }, []);

  useEffect(() => {
    if (writing && writing.id) {
      getComments();
    }
  }, [writing]);

  const commentsWithUsers = reviews.map((review) => {
    const commentUser = users.find(
      (userItem) => userItem.id === review.user_id
    );
    return {
      ...review,
      pseudo: commentUser ? commentUser.pseudo : "Utilisateur inconnu",
    };
  });

  return (
    <Flex flexWrap="wrap" gap="5">
      {commentsWithUsers.map((review) => (
        <Review {...review} key={`review-${review.id}`} />
      ))}
    </Flex>
  );
}
