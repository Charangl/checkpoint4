// import { Flex, Image, Text, Box, Highlight, Center } from "@chakra-ui/react";
// import { Link } from "react-router-dom";
// import React, { useState } from "react";
// // @ts-ignore

// import SignIn from "../components/SignIn";
// import Login from "../components/Login";

// export default function Connexion() {
//   const [isRegistered, setIsRegistered] = useState(true);

//   return (
//     <Flex flexDirection={{ base: "column", md: "row" }}>
//       <Box
//         color="brand.100"
//         bgGradient="linear(to-tl, pink.300 5%, purple.500 50%)"
//         minW={{ base: "100%", md: "40%" }}
//         minH="100vh"
//         textAlign={{ base: "center", md: "left" }}
//       >
//         <Text
//           mt={{ base: "1.2rem", md: "3rem" }}
//           ml={{ base: "5.2rem", md: "4rem" }}
//           mb="2rem"
//           fontSize="3xl"
//           display="flex"
//         >
//           Babyplace <Image src={logopro} ml="1rem" h="1.4rem" mt="0.8rem" />
//         </Text>

//         <Box flexDirection="column" ml={{ base: "0", md: "4rem" }}>
//           <Highlight
//             query="Gérez votre agenda professionnel"
//             styles={{ p: "1", bg: "white", color: "purple.500" }}
//           >
//             Gérez votre agenda professionnel
//           </Highlight>
//           <Text textAlign={{ base: "center", md: "left" }}>24h/24 et 7j/7</Text>
//         </Box>
//         <Box
//           display={{ base: "flex", md: "none" }}
//           flexDirection={{ base: "column" }}
//           mt={{ base: "2rem", md: "0" }}
//           pl={{ base: "0", md: "2rem" }}
//         >
//           {isRegistered ? (
//             <Login setIsRegistered={setIsRegistered} />
//           ) : (
//             <SignInPro setIsRegistered={setIsRegistered} />
//           )}
//           <Link to="/">
//             <Center mt="1rem">Retour</Center>
//           </Link>
//         </Box>
//         <Image
//           src={image2}
//           w={{ base: "20rem", md: "auto" }}
//           ml={{ base: "0", md: "3rem" }}
//           mt={{ base: "-24rem", md: "3rem" }}
//           position={{ base: "absolute", md: "relative" }}
//           opacity={{ base: "50%", md: "100%" }}
//           zIndex={{ base: "1" }}
//         />
//       </Box>
//       <Box
//         display={{ base: "none", md: "flex" }}
//         flexDirection={{ md: "column" }}
//         w="100%"
//         mt={{ base: "2rem", md: "0" }}
//         pl={{ base: "0", md: "2rem" }}
//       >
//         {isRegistered ? (
//           <LoginPro setIsRegistered={setIsRegistered} />
//         ) : (
//           <SignInPro setIsRegistered={setIsRegistered} />
//         )}
//         <Link to="/">
//           <Center mt="2rem">Retour</Center>
//         </Link>
//       </Box>
//     </Flex>
//   );
// }
