import { Flex, Box, Heading, Input, Button, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const imageTypes = ["image/jpeg", "image/jpg", "image/png"];

export default function CreateArticle() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [article, setArticle] = useState("");
  const [image, setImage] = useState("");

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeArticle = (e) => {
    setArticle(e.target.value);
  };

  const handleChangeImage = (e) => {
    // console.log(e);
    const fileSelected = e.target.files[0];

    if (imageTypes.includes(fileSelected.type)) {
      setImage(e.target.files[0]);
    } else {
      alert("Only jpeg, jpg and png are allowed");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !article || !image) {
      alert("You must provide a title, a article and a photo!!!!");
    } else {
      const writingData = new FormData();
      writingData.append("image", image);
      writingData.append("title", title);
      writingData.append("article", article);

      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/writings`, {
        method: "POST",
        credentials: "include",
        body: writingData,
      })
        .then((res) => res.json())
        .then((data) => {
          navigate(`/writings/${data.id}`);
        })
        .catch(() => {
          alert("Error to create the article, please try again!!!");
        });
    }
  };

  return (
    <Box>
      <Flex
        bg="#f0e6e6"
        borderRadius="1rem"
        boxShadow="md"
        p="2rem"
        flexDir="column"
        w="90%"
        mt="2rem"
        mx="auto"
      >
        <Box p="1rem">
          <Heading
            fontSize="1.2rem"
            fontFamily="Playfair Display"
            textTransform="uppercase"
            letterSpacing="0.1rem"
          >
            Ajouter un article
          </Heading>
          <form onSubmit={handleSubmit}>
            <Box mt={{ base: "1rem", md: "2rem" }} zIndex={{ base: "2" }}>
              <Input
                required
                name="title"
                placeholder="Titre"
                type="text"
                value={title}
                maxLength={100}
                onChange={handleChangeTitle}
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
                name="article"
                placeholder="Ecrire l'article"
                type="text"
                value={article}
                onChange={handleChangeArticle}
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
            </Box>

            <Button type="submit">Créer l'article</Button>
          </form>
        </Box>
      </Flex>
    </Box>
  );
}
