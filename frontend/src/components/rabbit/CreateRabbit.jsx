import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Heading,
  Input,
  Button,
  SimpleGrid,
  Textarea,
  useToast,
  Select,
  Text,
} from "@chakra-ui/react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const imageTypes = ["image/jpeg", "image/jpg", "image/png"];

export default function CreateRabbit() {
  const navigate = useNavigate();
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
  const toast = useToast();

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeAffixe = (e) => {
    setAffixe(e.target.value);
  };

  const handleChangeSexe = (e) => {
    setSexe(e.target.value);
  };

  const handleChangeBirthday = (e) => {
    setBirthday(e.target.value);
  };

  const handleChangeColor = (e) => {
    setColor(e.target.value);
  };

  const handleChangeEyes = (e) => {
    setEyes(e.target.value);
  };

  const handleChangePedigree = (e) => {
    setPedigree(e.target.value);
  };

  const handleChangeWeight = (e) => {
    setWeight(e.target.value);
  };

  const handleChangeStatus = (e) => {
    setStatus(e.target.value);
  };

  const handleChangeReservation = (e) => {
    setReservation(e.target.value);
  };

  const handleChangeIntroduction = (e) => {
    setIntroduction(e.target.value);
  };

  const handleChangeArrivalDate = (e) => {
    setArrivalDate(e.target.value);
  };

  const handleChangeTattoo = (e) => {
    setTattoo(e.target.value);
  };

  const handleChangePhoto = (e) => {
    // console.log(e);
    const fileSelected = e.target.files[0];

    if (imageTypes.includes(fileSelected.type)) {
      setPhoto(e.target.files[0]);
    } else {
      toast({
        title: "Erreur format",
        description: "Seulement jpeg, jpg ou png",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "bottom-right",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !sexe || !photo) {
      toast({
        title: "Champs",
        description: "Vous devez remplir tous les champs !",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "bottom-right",
      });
    } else {
      const rabbitData = new FormData();
      rabbitData.append("photo", photo);
      rabbitData.append("name", name);
      rabbitData.append("affixe", affixe);
      rabbitData.append("sexe", sexe);
      rabbitData.append("birthday", birthday);
      rabbitData.append("color", color);
      rabbitData.append("eyes", eyes);
      rabbitData.append("pedigree", pedigree);
      rabbitData.append("weight", weight);
      rabbitData.append("status", status);
      rabbitData.append("reservation", reservation);
      rabbitData.append("introduction", introduction);
      rabbitData.append("arrival_date", arrivalDate);
      rabbitData.append("tattoo", tattoo);

      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/rabbits`, {
        method: "POST",
        credentials: "include",
        body: rabbitData,
      })
        .then((res) => res.json())
        .then((data) => {
          navigate(`/rabbits/${data.id}`);
        })
        .catch(() => {
          toast({
            title: "Erreur.",
            description: "Erreur lors de la création de la fiche lapin.",
            status: "error",
            duration: 3000,
            isClosable: true,
            position: "bottom-right",
          });
        });
    }
  };
  return (
    <Accordion
      allowMultiple
      bg="#f0e6e6"
      borderRadius="1rem"
      boxShadow="md"
      p="1rem"
      flexDir="column"
      w="90%"
      mt="2rem"
      mx="auto"
    >
      <AccordionItem>
        <Heading>
          <AccordionButton>
            <Text
              fontSize="1.2rem"
              fontFamily="Playfair Display"
              textTransform="uppercase"
              letterSpacing="0.1rem"
              fontWeight="bold"
            >
              Ajouter un Lapin
            </Text>
          </AccordionButton>
        </Heading>
        <AccordionPanel>
          <Box p="1rem">
            <form onSubmit={handleSubmit}>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Box mt={{ base: "1rem", md: "2rem" }} zIndex={{ base: "2" }}>
                  <Input
                    required
                    name="name"
                    placeholder="Nom"
                    type="text"
                    value={name}
                    onChange={handleChangeName}
                    mb={5}
                    color="black"
                    fontSize="10pt"
                    _placeholder={{ color: "gray.500" }}
                    _hover={{
                      bg: "white",
                      color: "black",
                      border: "1px solid",
                      borderColor: "blue.500",
                    }}
                    _focus={{
                      outline: "none",
                      bg: "white",
                      border: "1px solid",
                      borderColor: "blue.500",
                    }}
                    bg="gray.50"
                  />
                  <Input
                    required
                    name="affixe"
                    placeholder="Affixe de l'élevage"
                    type="text"
                    value={affixe}
                    onChange={handleChangeAffixe}
                    mb={5}
                    color="black"
                    fontSize="10pt"
                    _placeholder={{ color: "gray.500" }}
                    _hover={{
                      bg: "white",
                      color: "black",
                      border: "1px solid",
                      borderColor: "blue.500",
                    }}
                    _focus={{
                      outline: "none",
                      bg: "white",
                      border: "1px solid",
                      borderColor: "blue.500",
                    }}
                    bg="gray.50"
                  />
                  <Select
                    placeholder="Choisir le sexe"
                    value={sexe}
                    onChange={handleChangeSexe}
                    backgroundColor="gray.50"
                    mb={4}
                  >
                    <option value="Mâle">Mâle</option>
                    <option value="Femelle">Femelle</option>
                    <option value="Indéfini">Indéfini</option>
                  </Select>
                  Birthday
                  <Input
                    required
                    name="birthday"
                    placeholder="Date de naissance"
                    type="date"
                    value={birthday}
                    onChange={handleChangeBirthday}
                    mb={5}
                    color="black"
                    fontSize="10pt"
                    _placeholder={{ color: "gray.500" }}
                    _hover={{
                      bg: "white",
                      color: "black",
                      border: "1px solid",
                      borderColor: "blue.500",
                    }}
                    _focus={{
                      outline: "none",
                      bg: "white",
                      border: "1px solid",
                      borderColor: "blue.500",
                    }}
                    bg="gray.50"
                  />
                  <Input
                    required
                    name="color"
                    placeholder="Couleur"
                    type="text"
                    value={color}
                    onChange={handleChangeColor}
                    mb={5}
                    color="black"
                    fontSize="10pt"
                    _placeholder={{ color: "gray.500" }}
                    _hover={{
                      bg: "white",
                      color: "black",
                      border: "1px solid",
                      borderColor: "blue.500",
                    }}
                    _focus={{
                      outline: "none",
                      bg: "white",
                      border: "1px solid",
                      borderColor: "blue.500",
                    }}
                    bg="gray.50"
                  />
                  <Input
                    required
                    name="eyes"
                    placeholder="Couleur des yeux"
                    type="text"
                    value={eyes}
                    onChange={handleChangeEyes}
                    mb={5}
                    color="black"
                    fontSize="10pt"
                    _placeholder={{ color: "gray.500" }}
                    _hover={{
                      bg: "white",
                      color: "black",
                      border: "1px solid",
                      borderColor: "blue.500",
                    }}
                    _focus={{
                      outline: "none",
                      bg: "white",
                      border: "1px solid",
                      borderColor: "blue.500",
                    }}
                    bg="gray.50"
                  />
                  <Textarea
                    required
                    name="pedigree"
                    placeholder="Pedigree"
                    type="text"
                    value={pedigree}
                    onChange={handleChangePedigree}
                    mb={5}
                    color="black"
                    fontSize="10pt"
                    _placeholder={{ color: "gray.500" }}
                    _hover={{
                      bg: "white",
                      border: "1px solid",
                      borderColor: "blue.500",
                    }}
                    _focus={{
                      outline: "none",
                      bg: "white",
                      color: "black",
                      border: "1px solid",
                      borderColor: "blue.500",
                    }}
                    bg="gray.50"
                  />
                </Box>
                <Box mt={{ base: "1rem", md: "2rem" }} zIndex={{ base: "2" }}>
                  <Input
                    required
                    name="weight"
                    placeholder="Poids"
                    type="text"
                    value={weight}
                    maxLength={15}
                    onChange={handleChangeWeight}
                    mb={4}
                    color="black"
                    fontSize="10pt"
                    _placeholder={{ color: "gray.500" }}
                    _hover={{
                      bg: "white",
                      border: "1px solid",
                      borderColor: "blue.500",
                    }}
                    _focus={{
                      outline: "none",
                      bg: "white",
                      color: "black",
                      border: "1px solid",
                      borderColor: "blue.500",
                    }}
                    bg="gray.50"
                  />
                  <Select
                    placeholder="Choisir le status"
                    value={status}
                    onChange={handleChangeStatus}
                    backgroundColor="gray.50"
                    mb={5}
                  >
                    <option value="reproducteur">Reproducteur</option>
                    <option value="baby">Bébé</option>
                  </Select>
                  <Select
                    placeholder="Dispo ou réservé ?"
                    value={reservation}
                    onChange={handleChangeReservation}
                    backgroundColor="gray.50"
                    mb={4}
                  >
                    <option value="Disponible">Disponible</option>
                    <option value="Réservé">Réservé</option>
                  </Select>
                  Date d'arrivée
                  <Input
                    required
                    name="arrivalDate"
                    placeholder="Confirmer le mot de passe"
                    type="date"
                    value={arrivalDate}
                    onChange={handleChangeArrivalDate}
                    mb={5}
                    color="black"
                    fontSize="10pt"
                    _placeholder={{ color: "gray.500" }}
                    _hover={{
                      bg: "white",
                      color: "black",
                      border: "1px solid",
                      borderColor: "blue.500",
                    }}
                    _focus={{
                      outline: "none",
                      bg: "white",
                      border: "1px solid",
                      borderColor: "blue.500",
                    }}
                    bg="gray.50"
                  />
                  <Input
                    required
                    name="tattoo"
                    placeholder="Tatouage"
                    type="text"
                    value={tattoo}
                    onChange={handleChangeTattoo}
                    mb={5}
                    color="black"
                    fontSize="10pt"
                    _placeholder={{ color: "gray.500" }}
                    _hover={{
                      bg: "white",
                      color: "black",
                      border: "1px solid",
                      borderColor: "blue.500",
                    }}
                    _focus={{
                      outline: "none",
                      bg: "white",
                      border: "1px solid",
                      borderColor: "blue.500",
                    }}
                    bg="gray.50"
                  />
                  <Textarea
                    required
                    name="introduction"
                    placeholder="Présentation"
                    type="password"
                    value={introduction}
                    onChange={handleChangeIntroduction}
                    mb={5}
                    color="black"
                    fontSize="10pt"
                    _placeholder={{ color: "gray.500" }}
                    _hover={{
                      bg: "white",
                      color: "black",
                      border: "1px solid",
                      borderColor: "blue.500",
                    }}
                    _focus={{
                      outline: "none",
                      bg: "white",
                      border: "1px solid",
                      borderColor: "blue.500",
                    }}
                    bg="gray.50"
                  />
                  <label htmlFor="photo">
                    <Input
                      type="file"
                      id="photo"
                      onChange={handleChangePhoto}
                    />
                  </label>
                </Box>
              </SimpleGrid>
              <Button type="submit" bg="#50908f" color="white">
                Créer le lapin
              </Button>
            </form>
          </Box>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
