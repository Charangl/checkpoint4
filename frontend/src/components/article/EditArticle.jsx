import React, { useState } from "react";
import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import PrivateLink from "../private/PrivateLink";

export default function EditArticle() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState("");
  const [article, setArticle] = useState("");
  const [image, setImage] = useState(null);

  const handleChangeImage = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleEdit = () => {
    const articleData = {
      title,
      article,
      image: image ? image.name : null,
    };

    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/writings/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(articleData),
    })
      .then(() => {
        onClose();
        navigate(`/writings/${id}`);
      })
      .catch((err) => console.error(err));
  };

  return (
    <Box>
      <PrivateLink authorizedRoles={["admin"]}>
        <Button type="button" colorScheme="blue" onClick={onOpen} mt="1rem">
          Modifier
        </Button>
      </PrivateLink>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modifier l'article</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="Titre"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Textarea
              placeholder="Corps de l'article"
              value={article}
              onChange={(e) => setArticle(e.target.value)}
            />
            <label
              htmlFor="image"
              className="flex text-2xl m-4 w-full items-center"
            >
              Picture:
              <Input
                className="ml-4 px-4 py-1 text-black flex-1 rounded-full"
                type="file"
                id="image"
                onChange={handleChangeImage}
              />
            </label>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Annuler
            </Button>
            <Button colorScheme="blue" ml={3} onClick={handleEdit}>
              Sauvegarder
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
