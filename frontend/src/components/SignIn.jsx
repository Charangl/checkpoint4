// import PropTypes from "prop-types";
// import {
//   Input,
//   Box,
//   SimpleGrid,
//   Checkbox,
//   Flex,
//   Button,
//   Text,
//   useToast,
//   Center,
// } from "@chakra-ui/react";
// import React, { useState } from "react";

// import { useUserContext } from "../contexts/UserContext";

// export default function SignIn({ setIsRegistered }) {
//   const [firstname, setFirstname] = useState("");
//   const [lastname, setLastname] = useState("");
//   const [street, setStreet] = useState("");
//   const [zipCode, setZipCode] = useState("");
//   const [city, setCity] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [passwordOne, setPasswordOne] = useState("");
//   const [passwordTwo, setPasswordTwo] = useState("");
//   const { setUser } = useUserContext();
//   const [loading, setLoading] = useState(false);
//   const toast = useToast();

//   const handleRegister = () => {
//     setIsRegistered(true);
//   };

//   const handleChangeFirstname = (e) => {
//     setFirstname(e.target.value);
//   };

//   const handleChangeLastname = (e) => {
//     setLastname(e.target.value);
//   };

//   const handleChangeStreet = (e) => {
//     setStreet(e.target.value);
//   };

//   const handleChangeZip = (e) => {
//     setZipCode(e.target.value);
//   };

//   const handleChangeCity = (e) => {
//     setCity(e.target.value);
//   };

//   const handleChangePhone = (e) => {
//     setPhone(e.target.value);
//   };

//   const handleChangeEmail = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleChangePasswordOne = (e) => {
//     setPasswordOne(e.target.value);
//   };

//   const handleChangePasswordTwo = (e) => {
//     setPasswordTwo(e.target.value);
//   };

//   const handleSubmit = (event) => {
//     setLoading(true);
//     event.preventDefault();

//     if (
//       !firstname ||
//       !lastname ||
//       !street ||
//       !zipCode ||
//       !city ||
//       !phone ||
//       !email ||
//       !passwordOne ||
//       !passwordTwo
//     ) {
//       setLoading(false);
//       console.info("Vous devez remplir tous les champs !");
//     } else if (passwordOne !== passwordTwo) {
//       setLoading(false);
//       toast({
//         title: "Mot de passe.",
//         description: "Veuillez vérifier votre mot de passe.",
//         status: "warning",
//         duration: 3000,
//         isClosable: true,
//         position: "bottom-right",
//       });
//       console.info("Les mots de passe ne sont pas identiques !");
//     } else {
//       fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           firstname,
//           lastname,
//           street,
//           zip_code: zipCode,
//           city,
//           role: "pro",
//           phone,
//           email,
//           password: passwordOne,
//         }),
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           setUser(data);
//           setTimeout(() => {
//             setLoading(false);
//           }, 1000);
//           toast({
//             title: "Compte créé.",
//             description: "Vous allez être redirigé vers la page de connexion.",
//             status: "success",
//             duration: 3000,
//             isClosable: true,
//             position: "bottom-right",
//           });
//           setTimeout(() => {
//             window.location.reload();
//           }, 3000);
//         })
//         .catch((err) => {
//           setLoading(false);
//           toast({
//             title: "Erreur.",
//             description: "Erreur.",
//             status: "error",
//             duration: 3000,
//             isClosable: true,
//             position: "bottom-right",
//           });
//           console.info(err);
//           console.info("L'inscription a échoué");
//         });
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <Box m="0 2rem" textAlign="center">
//         <Center fontSize="xs" mt="0.5rem">
//           <Text>Vous avez déjà un compte ?&nbsp;</Text>
//           <Text
//             color="purple.400"
//             as="b"
//             _hover={{ textDecoration: "underline" }}
//             cursor="pointer"
//             onClick={handleRegister}
//           >
//             Se connecter
//           </Text>
//         </Center>
//         <Box mt={{ base: "1rem", md: "7rem" }} mb={{ base: "-2rem" }}>
//           <Text as="b" fontSize={{ base: "18px", md: "2xl" }}>
//             Je m'inscris sur Babyplace
//           </Text>
//         </Box>
//         <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
//           <Box mt={{ base: "3rem", md: "4rem" }} zIndex={{ base: "2" }}>
//             <Input
//               required
//               name="firstname"
//               placeholder="Prénom"
//               type="text"
//               value={firstname}
//               maxLength={100}
//               onChange={handleChangeFirstname}
//               mb={5}
//               color="black"
//               fontSize="10pt"
//               _placeholder={{ color: "gray.500" }}
//               _hover={{
//                 bg: "white",
//                 color: "black",
//                 border: "1px solid",
//                 borderColor: "blue.500",
//               }}
//               _focus={{
//                 outline: "none",
//                 bg: "white",
//                 border: "1px solid",
//                 borderColor: "blue.500",
//               }}
//               bg="gray.50"
//             />
//             <Input
//               required
//               name="lastname"
//               placeholder="Nom"
//               type="text"
//               value={lastname}
//               maxLength={100}
//               onChange={handleChangeLastname}
//               mb={5}
//               color="black"
//               fontSize="10pt"
//               _placeholder={{ color: "gray.500" }}
//               _hover={{
//                 bg: "white",
//                 color: "black",
//                 border: "1px solid",
//                 borderColor: "blue.500",
//               }}
//               _focus={{
//                 outline: "none",
//                 bg: "white",
//                 border: "1px solid",
//                 borderColor: "blue.500",
//               }}
//               bg="gray.50"
//             />
//             <Input
//               required
//               name="street"
//               placeholder="N° voie et rue"
//               type="text"
//               value={street}
//               maxLength={255}
//               onChange={handleChangeStreet}
//               mb={5}
//               color="black"
//               fontSize="10pt"
//               _placeholder={{ color: "gray.500" }}
//               _hover={{
//                 bg: "white",
//                 color: "black",
//                 border: "1px solid",
//                 borderColor: "blue.500",
//               }}
//               _focus={{
//                 outline: "none",
//                 bg: "white",
//                 border: "1px solid",
//                 borderColor: "blue.500",
//               }}
//               bg="gray.50"
//             />
//             <Input
//               required
//               name="zip_code"
//               placeholder="Code postal"
//               type="text"
//               value={zipCode}
//               maxLength={5}
//               onChange={handleChangeZip}
//               mb={5}
//               color="black"
//               fontSize="10pt"
//               _placeholder={{ color: "gray.500" }}
//               _hover={{
//                 bg: "white",
//                 color: "black",
//                 border: "1px solid",
//                 borderColor: "blue.500",
//               }}
//               _focus={{
//                 outline: "none",
//                 bg: "white",
//                 border: "1px solid",
//                 borderColor: "blue.500",
//               }}
//               bg="gray.50"
//             />
//             <Input
//               required
//               name="city"
//               placeholder="Ville"
//               type="text"
//               value={city}
//               onChange={handleChangeCity}
//               mb={5}
//               color="black"
//               fontSize="10pt"
//               _placeholder={{ color: "gray.500" }}
//               _hover={{
//                 bg: "white",
//                 border: "1px solid",
//                 borderColor: "blue.500",
//               }}
//               _focus={{
//                 outline: "none",
//                 bg: "white",
//                 color: "black",
//                 border: "1px solid",
//                 borderColor: "blue.500",
//               }}
//               bg="gray.50"
//             />
//           </Box>
//           <Box mt={{ base: "-2.4rem", md: "4rem" }} zIndex={{ base: "2" }}>
//             <Input
//               required
//               name="phone"
//               placeholder="Téléphone"
//               type="number"
//               value={phone}
//               maxLength={15}
//               onChange={handleChangePhone}
//               mb={4}
//               color="black"
//               fontSize="10pt"
//               _placeholder={{ color: "gray.500" }}
//               _hover={{
//                 bg: "white",
//                 border: "1px solid",
//                 borderColor: "blue.500",
//               }}
//               _focus={{
//                 outline: "none",
//                 bg: "white",
//                 color: "black",
//                 border: "1px solid",
//                 borderColor: "blue.500",
//               }}
//               bg="gray.50"
//             />
//             <Input
//               required
//               name="email"
//               placeholder="Email"
//               type="email"
//               value={email}
//               maxLength={100}
//               onChange={handleChangeEmail}
//               mb={5}
//               color="black"
//               fontSize="10pt"
//               _placeholder={{ color: "gray.500" }}
//               _hover={{
//                 bg: "white",
//                 border: "1px solid",
//                 borderColor: "blue.500",
//               }}
//               _focus={{
//                 outline: "none",
//                 bg: "white",
//                 color: "black",
//                 border: "1px solid",
//                 borderColor: "blue.500",
//               }}
//               bg="gray.50"
//             />
//             <Input
//               required
//               name="passwordOne"
//               placeholder="Mot de passe"
//               type="password"
//               value={passwordOne}
//               maxLength={255}
//               onChange={handleChangePasswordOne}
//               mb={5}
//               color="black"
//               fontSize="10pt"
//               _placeholder={{ color: "gray.500" }}
//               _hover={{
//                 bg: "white",
//                 color: "black",
//                 border: "1px solid",
//                 borderColor: "blue.500",
//               }}
//               _focus={{
//                 outline: "none",
//                 bg: "white",
//                 border: "1px solid",
//                 borderColor: "blue.500",
//               }}
//               bg="gray.50"
//             />
//             <Input
//               required
//               name="passwordTwo"
//               placeholder="Confirmer le mot de passe"
//               type="password"
//               value={passwordTwo}
//               maxLength={255}
//               onChange={handleChangePasswordTwo}
//               mb={5}
//               color="black"
//               fontSize="10pt"
//               _placeholder={{ color: "gray.500" }}
//               _hover={{
//                 bg: "white",
//                 color: "black",
//                 border: "1px solid",
//                 borderColor: "blue.500",
//               }}
//               _focus={{
//                 outline: "none",
//                 bg: "white",
//                 border: "1px solid",
//                 borderColor: "blue.500",
//               }}
//               bg="gray.50"
//             />
//           </Box>
//         </SimpleGrid>
//         <Flex
//           flexDirection={{ base: "row", md: "row" }}
//           mt={2}
//           zIndex={{ base: "2" }}
//         >
//           <Box>
//             <Checkbox isRequired name="checkConditions" zIndex={{ base: "2" }}>
//               <Text fontSize="xs" zIndex={{ base: "2" }}>
//                 J'accepte&nbsp;
//               </Text>
//             </Checkbox>
//           </Box>
//         </Flex>

//         <Button
//           isLoading={loading}
//           loadingText="Inscription..."
//           width="50%"
//           height="36px"
//           mt={5}
//           mb={2}
//           type="submit"
//           zIndex={{ base: "2" }}
//           onClick={() => {
//             if (
//               !firstname ||
//               !lastname ||
//               !street ||
//               !zipCode ||
//               !city ||
//               !phone ||
//               !email ||
//               !passwordOne ||
//               !passwordTwo
//             ) {
//               toast({
//                 title: "Champs manquants.",
//                 description: "Vous devez remplir tous les champs.",
//                 status: "info",
//                 duration: 3000,
//                 isClosable: true,
//                 position: "bottom-right",
//               });
//             }
//           }}
//         >
//           M'inscrire
//         </Button>
//       </Box>
//     </form>
//   );
// }

// SignIn.propTypes = {
//   setIsRegistered: PropTypes.func.isRequired,
// };
