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
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import PrivateLink from "../private/PrivateLink";

export default function EditIntro() {
  const navigate = useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const [name, setName] = useState("");
  const [breeder, setBreeder] = useState("");
  const [street, setStreet] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [engagement, setEngagement] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");

  const handleEditName = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/breedings/1`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ name }),
    })
      .then(() => {
        onClose();
        navigate(`/`);
        toast({
          title: "Modification réussie",
          description: "La modification a été prise en compte avec succès.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.error(err);
        toast({
          title: "Erreur de modification",
          description: "Une erreur s'est produite lors de la modification.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  const handleEditBreeder = () => {
    // Envoyez la modification du titre au backend ici.
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/breedings/1`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ breeder }),
    })
      .then(() => {
        onClose();
        navigate(`/`);
        toast({
          title: "Modification réussie",
          description: "La modification a été prise en compte avec succès.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.error(err);
        toast({
          title: "Erreur de modification",
          description: "Une erreur s'est produite lors de la modification.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  const handleEditStreet = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/breedings/1`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ street }),
    })
      .then(() => {
        onClose();
        navigate(`/`);
        toast({
          title: "Modification réussie",
          description: "La modification a été prise en compte avec succès.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.error(err);
        toast({
          title: "Erreur de modification",
          description: "Une erreur s'est produite lors de la modification.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  const handleEditZipCode = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/breedings/1`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ zip_code: zipCode }), // Utilisez le nom correspondant dans la base de données
    })
      .then(() => {
        onClose();
        navigate(`/`);
        toast({
          title: "Modification réussie",
          description: "La modification a été prise en compte avec succès.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.error(err);
        toast({
          title: "Erreur de modification",
          description: "Une erreur s'est produite lors de la modification.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  const handleEditCity = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/breedings/1`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ city }),
    })
      .then(() => {
        onClose();
        navigate(`/`);
        toast({
          title: "Modification réussie",
          description: "La modification a été prise en compte avec succès.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.error(err);
        toast({
          title: "Erreur de modification",
          description: "Une erreur s'est produite lors de la modification.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  const handleEditPhone = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/breedings/1`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ phone }),
    })
      .then(() => {
        onClose();
        navigate(`/`);
        toast({
          title: "Modification réussie",
          description: "La modification a été prise en compte avec succès.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.error(err);
        toast({
          title: "Erreur de modification",
          description: "Une erreur s'est produite lors de la modification.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  const handleEditIntroduction = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/breedings/1`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ introduction }),
    })
      .then(() => {
        onClose();
        navigate(`/`);
        toast({
          title: "Modification réussie",
          description: "La modification a été prise en compte avec succès.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.error(err);
        toast({
          title: "Erreur de modification",
          description: "Une erreur s'est produite lors de la modification.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  const handleEditEngagement = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/breedings/1`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ engagement }),
    })
      .then(() => {
        onClose();
        navigate(`/`);
        toast({
          title: "Modification réussie",
          description: "La modification a été prise en compte avec succès.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.error(err);
        toast({
          title: "Erreur de modification",
          description: "Une erreur s'est produite lors de la modification.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  const handleEditEmail = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/breedings/1`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email }),
    })
      .then(() => {
        onClose();
        navigate(`/`);
        toast({
          title: "Modification réussie",
          description: "La modification a été prise en compte avec succès.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.error(err);
        toast({
          title: "Erreur de modification",
          description: "Une erreur s'est produite lors de la modification.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  const handleEditImage = () => {
    // Envoyez la modification de l'image au backend avec Multer ici.
    const formData = new FormData();
    formData.append("image", photo);

    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/breedings/1/image`, {
      method: "POST",
      credentials: "include",
      body: formData,
    })
      .then(() => {
        onClose();
        navigate(`/`);
        toast({
          title: "Modification réussie",
          description: "La modification a été prise en compte avec succès.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.error(err);
        toast({
          title: "Erreur de modification",
          description: "Une erreur s'est produite lors de la modification.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
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
          zIndex="20"
        >
          Modifier
        </Button>
      </PrivateLink>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modifier l'introduction</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box display="flex" m="2">
              <Input
                placeholder="Nom de l'élevage"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Button
                bg="#50908f"
                color="white"
                ml={3}
                onClick={handleEditName}
              >
                Modifier
              </Button>
            </Box>
            <Box display="flex" m="2">
              <Textarea
                placeholder="Présentation de l'éleveuse"
                value={breeder}
                onChange={(e) => setBreeder(e.target.value)}
              />
              <Button
                bg="#50908f"
                color="white"
                ml={3}
                onClick={handleEditBreeder}
              >
                Modifier
              </Button>
            </Box>
            <Box display="flex" m="2">
              <Input
                placeholder="Rue"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
              <Button
                bg="#50908f"
                color="white"
                ml={3}
                onClick={handleEditStreet}
              >
                Modifier
              </Button>
            </Box>

            <Box display="flex" m="2">
              <Input
                placeholder="Code postal"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
              <Button
                bg="#50908f"
                color="white"
                ml={3}
                onClick={handleEditZipCode}
              >
                Modifier
              </Button>
            </Box>

            <Box display="flex" m="2">
              <Input
                placeholder="Ville"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <Button
                bg="#50908f"
                color="white"
                ml={3}
                onClick={handleEditCity}
              >
                Modifier
              </Button>
            </Box>
            <Box display="flex" m="2">
              <Input
                placeholder="Téléphone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <Button
                bg="#50908f"
                color="white"
                ml={3}
                onClick={handleEditPhone}
              >
                Modifier
              </Button>
            </Box>

            <Box display="flex" m="2">
              <Textarea
                placeholder="Introduction"
                value={introduction}
                onChange={(e) => setIntroduction(e.target.value)}
              />
              <Button
                bg="#50908f"
                color="white"
                ml={3}
                onClick={handleEditIntroduction}
              >
                Modifier
              </Button>
            </Box>

            <Box display="flex" m="2">
              <Textarea
                placeholder="Engagement"
                value={engagement}
                onChange={(e) => setEngagement(e.target.value)}
              />
              <Button
                bg="#50908f"
                color="white"
                ml={3}
                onClick={handleEditEngagement}
              >
                Modifier
              </Button>
            </Box>

            <Box display="flex" m="2">
              <Input
                placeholder="Adresse e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                bg="#50908f"
                color="white"
                ml={3}
                onClick={handleEditEmail}
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
                  onChange={(e) => setPhoto(e.target.files[0])} // Utilisation de l'événement pour définir la photo
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
