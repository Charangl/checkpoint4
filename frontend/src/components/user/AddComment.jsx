// import {
//   Flex,
//   Box,
//   Heading,
//   Button,
//   Textarea,
//   useToast,
//   Text,
//   Input,
// } from "@chakra-ui/react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useUserContext } from "../../contexts/UserContext";

// export default function AddComment() {
//   const navigate = useNavigate();
//   const [comment, setComment] = useState("");
//   const [title, setTitle] = useState(""); // Ajout du champ de titre
//   const [{ user }] = useUserContext();
//   const toast = useToast();

//   const handleChangeTitle = (e) => {
//     setTitle(e.target.value);
//   };

//   const handleChangeComment = (e) => {
//     setComment(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!comment || !title) {
//       // Vérification du titre également
//       toast({
//         title: "Champs",
//         description: "Vous devez remplir tous les champs !",
//         status: "warning",
//         duration: 3000,
//         isClosable: true,
//         position: "bottom-right",
//       });
//     } else {
//       const commentData = {
//         title, // Ajout du titre dans l'objet commentData
//         comment,
//       };

//       fetch(`${import.meta.env.VITE_BACKEND_URL}/api/writings/comment`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         credentials: "include",
//         body: JSON.stringify(commentData),
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           // Ajouter le commentaire au tableau des commentaires
//           setComments([
//             ...comments,
//             {
//               text: comment,
//               user: user?.pseudo || "Utilisateur inconnu",
//               date: new Date(),
//             },
//           ]);
//           setComment("");
//           setTitle(""); // Réinitialiser le champ de titre
//           navigate(`/writings/${data.id}`);
//         })
//         .catch(() => {
//           toast({
//             title: "Erreur.",
//             description: "Erreur lors de l'envoi du message",
//             status: "error",
//             duration: 3000,
//             isClosable: true,
//             position: "bottom-right",
//           });
//         });
//     }
//   };

//   // Condition pour afficher le formulaire ou le message
//   if (user && (user.role === "user" || user.role === "admin")) {
//     return (
//       <Flex p="2rem" flexDir="column" w="90%" mt="2rem" mx="auto">
//         <Box p="1rem">
//           <Heading
//             fontSize="1.2rem"
//             fontFamily="Playfair Display"
//             textTransform="uppercase"
//             letterSpacing="0.1rem"
//           >
//             Ajouter un commentaire
//           </Heading>
//           <Text>{user.pseudo}</Text>
//           <form onSubmit={handleSubmit}>
//             <Box mt={{ base: "1rem", md: "2rem" }} zIndex={{ base: "2" }}>
//               <Input
//                 required
//                 name="title"
//                 placeholder="Titre"
//                 type="text"
//                 value={title}
//                 maxLength={100}
//                 onChange={handleChangeTitle}
//                 mb={5}
//                 color="black"
//                 fontSize="10pt"
//                 _placeholder={{ color: "gray.500" }}
//                 _hover={{
//                   bg: "white",
//                   color: "black",
//                   border: "1px solid",
//                   borderColor: "blue.500",
//                 }}
//                 _focus={{
//                   outline: "none",
//                   bg: "white",
//                   border: "1px solid",
//                   borderColor: "blue.500",
//                 }}
//                 bg="gray.50"
//               />
//               <Textarea
//                 required
//                 name="comment"
//                 placeholder="Écrire votre commentaire"
//                 type="text"
//                 value={comment}
//                 maxLength={100}
//                 onChange={handleChangeComment}
//                 mb={5}
//                 color="black"
//                 fontSize="10pt"
//                 _placeholder={{ color: "gray.500" }}
//                 _hover={{
//                   bg: "white",
//                   color: "black",
//                   border: "1px solid",
//                   borderColor: "blue.500",
//                 }}
//                 _focus={{
//                   outline: "none",
//                   bg: "white",
//                   border: "1px solid",
//                   borderColor: "blue.500",
//                 }}
//                 bg="gray.50"
//               />
//             </Box>
//             <Button type="submit">Envoyer</Button>
//           </form>
//         </Box>
//       </Flex>
//     );
//   }

//   return (
//     <Flex p="2rem" flexDir="column" w="90%" mt="2rem" mx="auto">
//       <Box p="1rem">
//         <Text>Il faut être connecté pour commenter.</Text>
//       </Box>
//     </Flex>
//   );
// }
