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
    // Mettez à jour l'état de l'image avec la nouvelle image sélectionnée.
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleEditTitle = () => {
    // Envoyez la modification du titre au backend ici.
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/writings/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ title }),
    })
      .then(() => {
        onClose();
        navigate(`/writings/${id}`);
      })
      .catch((err) => console.error(err));
  };

  const handleEditArticle = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/writings/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ article }),
    })
      .then(() => {
        onClose();
        navigate(`/writings/${id}`);
      })
      .catch((err) => console.error(err));
  };

  const handleEditImage = () => {
    // Envoyez la modification de l'image au backend avec Multer ici.
    const formData = new FormData();
    formData.append("image", image);

    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/writings/${id}/image`, {
      method: "POST",
      credentials: "include",
      body: formData,
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
        <Button
          type="button"
          bg="#50908f"
          color="white"
          onClick={onOpen}
          mt="1rem"
        >
          Modifier
        </Button>
      </PrivateLink>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modifier l'article</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box display="flex" m="2">
              <Input
                placeholder="Titre"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Button
                bg="#50908f"
                color="white"
                ml={3}
                onClick={handleEditTitle}
              >
                Modifier
              </Button>
            </Box>
            <Box display="flex" m="2">
              <Textarea
                placeholder="Corps de l'article"
                value={article}
                onChange={(e) => setArticle(e.target.value)}
              />
              <Button
                bg="#50908f"
                color="white"
                ml={3}
                onClick={handleEditArticle}
              >
                Modifier
              </Button>
            </Box>
            <Box display="flex" m="2">
              <label
                htmlFor="image"
                className="flex text-2xl m-4 w-full items-center"
              >
                <Input
                  className="ml-4 px-4 py-1 text-black flex-1 rounded-full"
                  type="file"
                  id="image"
                  onChange={handleChangeImage}
                />
              </label>
              <Button
                bg="#50908f"
                color="white"
                ml={3}
                onClick={handleEditImage}
              >
                Modifier
              </Button>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Annuler
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
