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
  Select,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import PrivateLink from "../private/PrivateLink";

export default function EditRabbit() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState("");
  const [affixe, setAffixe] = useState("");
  const [sexe, setSexe] = useState("");
  const [birthday, setBirthday] = useState("");
  const [color, setColor] = useState("");
  const [eyes, setEyes] = useState("");
  const [pedigree, setPedigree] = useState("");
  const [weight, setWeight] = useState("");
  const [status, setStatus] = useState("");
  const [reservation, setReservation] = useState("");
  const [photo, setPhoto] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [tattoo, setTattoo] = useState("");

  const handleChangePhoto = (e) => {
    // Mettez à jour l'état de l'image avec la nouvelle image sélectionnée.
    const selectedPhoto = e.target.files[0];
    setPhoto(selectedPhoto);
  };

  const handleEditName = () => {
    // Envoyez la modification du titre au backend ici.
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/rabbits/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ name }),
    })
      .then(() => {
        onClose();
        navigate(`/rabbits/${id}`);
      })
      .catch((err) => console.error(err));
  };

  const handleEditAffixe = () => {
    // Envoyez la modification du titre au backend ici.
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/rabbits/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ affixe }),
    })
      .then(() => {
        onClose();
        navigate(`/rabbits/${id}`);
      })
      .catch((err) => console.error(err));
  };

  const handleEditSexe = () => {
    // Envoyez la modification du titre au backend ici.
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/rabbits/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ sexe }),
    })
      .then(() => {
        onClose();
        navigate(`/rabbits/${id}`);
      })
      .catch((err) => console.error(err));
  };

  const handleEditBirthday = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/rabbits/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ birthday }),
    })
      .then(() => {
        onClose();
        navigate(`/rabbits/${id}`);
      })
      .catch((err) => console.error(err));
  };

  // Fonction de gestion de la modification pour le champ "color"
  const handleEditColor = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/rabbits/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ color }),
    })
      .then(() => {
        onClose();
        navigate(`/rabbits/${id}`);
      })
      .catch((err) => console.error(err));
  };

  // Fonction de gestion de la modification pour le champ "eyes"
  const handleEditEyes = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/rabbits/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ eyes }),
    })
      .then(() => {
        onClose();
        navigate(`/rabbits/${id}`);
      })
      .catch((err) => console.error(err));
  };

  const handleEditPedigree = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/rabbits/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ pedigree }),
    })
      .then(() => {
        onClose();
        navigate(`/rabbits/${id}`);
      })
      .catch((err) => console.error(err));
  };

  // Fonction de gestion de la modification pour le champ "weight"
  const handleEditWeight = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/rabbits/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ weight }),
    })
      .then(() => {
        onClose();
        navigate(`/rabbits/${id}`);
      })
      .catch((err) => console.error(err));
  };

  // Fonction de gestion de la modification pour le champ "status"
  const handleEditStatus = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/rabbits/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ status }),
    })
      .then(() => {
        onClose();
        navigate(`/rabbits/${id}`);
      })
      .catch((err) => console.error(err));
  };

  const handleEditReservation = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/rabbits/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ reservation }),
    })
      .then(() => {
        onClose();
        navigate(`/rabbits/${id}`);
      })
      .catch((err) => console.error(err));
  };

  // Fonction de gestion de la modification pour le champ "photo"
  const handleEditPhoto = () => {
    // Assurez-vous d'avoir la logique appropriée pour gérer le téléchargement d'images avec Multer.
    const formData = new FormData();
    formData.append("photo", photo);

    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/rabbits/${id}/photo`, {
      method: "POST",
      credentials: "include",
      body: formData,
    })
      .then(() => {
        onClose();
        navigate(`/rabbits/${id}`);
      })
      .catch((err) => console.error(err));
  };

  // Fonction de gestion de la modification pour le champ "introduction"
  const handleEditIntroduction = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/rabbits/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ introduction }),
    })
      .then(() => {
        onClose();
        navigate(`/rabbits/${id}`);
      })
      .catch((err) => console.error(err));
  };

  const handleEditArrivalDate = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/rabbits/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ arrivalDate }),
    })
      .then(() => {
        onClose();
        navigate(`/rabbits/${id}`);
      })
      .catch((err) => console.error(err));
  };

  // Fonction de gestion de la modification pour le champ "tattoo"
  const handleEditTattoo = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/rabbits/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ tattoo }),
    })
      .then(() => {
        onClose();
        navigate(`/rabbits/${id}`);
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
          <ModalHeader>Modifier le lapin</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box display="flex" m="2">
              <Input
                placeholder="Nom"
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
              <Input
                placeholder="Affixe"
                value={affixe}
                onChange={(e) => setAffixe(e.target.value)}
              />
              <Button
                bg="#50908f"
                color="white"
                ml={3}
                onClick={handleEditAffixe}
              >
                Modifier
              </Button>
            </Box>
            <Box display="flex" m="2">
              <Select
                placeholder="Choisir le sexe"
                value={sexe}
                onChange={(e) => setSexe(e.target.value)}
              >
                <option value="Mâle">Mâle</option>
                <option value="Femelle">Femelle</option>
                <option value="Indéfini">Indéfini</option>
              </Select>
              <Button
                bg="#50908f"
                color="white"
                ml={3}
                onClick={handleEditSexe}
              >
                Modifier
              </Button>
            </Box>
            <Box display="flex" m="2">
              <Input
                placeholder="Date de naissance"
                type="date"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
              />
              <Button
                bg="#50908f"
                color="white"
                ml={3}
                onClick={handleEditBirthday}
              >
                Modifier
              </Button>
            </Box>
            <Box display="flex" m="2">
              <Input
                placeholder="Couleur"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
              <Button
                bg="#50908f"
                color="white"
                ml={3}
                onClick={handleEditColor}
              >
                Modifier
              </Button>
            </Box>
            <Box display="flex" m="2">
              <Input
                placeholder="Yeux"
                value={eyes}
                onChange={(e) => setEyes(e.target.value)}
              />
              <Button
                bg="#50908f"
                color="white"
                ml={3}
                onClick={handleEditEyes}
              >
                Modifier
              </Button>
            </Box>
            <Box display="flex" m="2">
              <Textarea
                placeholder="Pedigree"
                value={pedigree}
                onChange={(e) => setPedigree(e.target.value)}
              />
              <Button
                bg="#50908f"
                color="white"
                ml={3}
                onClick={handleEditPedigree}
              >
                Modifier
              </Button>
            </Box>
            <Box display="flex" m="2">
              <Input
                placeholder="Poids"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
              <Button
                bg="#50908f"
                color="white"
                ml={3}
                onClick={handleEditWeight}
              >
                Modifier
              </Button>
            </Box>
            <Box display="flex" m="2">
              <Select
                placeholder="Choisir le statut"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="reproducteur">Reproducteur</option>
                <option value="baby">Bébé</option>
              </Select>
              <Button
                bg="#50908f"
                color="white"
                ml={3}
                onClick={handleEditStatus}
              >
                Modifier
              </Button>
            </Box>
            <Box display="flex" m="2">
              <Select
                placeholder="Dispo ou réservé ?"
                value={reservation}
                onChange={(e) => setReservation(e.target.value)}
              >
                <option value="Disponible">Disponible</option>
                <option value="Réservé">Réservé</option>
              </Select>
              <Button
                bg="#50908f"
                color="white"
                ml={3}
                onClick={handleEditReservation}
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
                  onChange={handleChangePhoto}
                />
              </label>
              <Button
                bg="#50908f"
                color="white"
                ml={3}
                onClick={handleEditPhoto}
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
              <Input
                type="date"
                placeholder="Date d'arrivée"
                value={arrivalDate}
                onChange={(e) => setArrivalDate(e.target.value)}
              />
              <Button
                bg="#50908f"
                color="white"
                ml={3}
                onClick={handleEditArrivalDate}
              >
                Modifier
              </Button>
            </Box>
            <Box display="flex" m="2">
              <Input
                placeholder="Tatouage"
                value={tattoo}
                onChange={(e) => setTattoo(e.target.value)}
              />
              <Button
                bg="#50908f"
                color="white"
                ml={3}
                onClick={handleEditTattoo}
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
