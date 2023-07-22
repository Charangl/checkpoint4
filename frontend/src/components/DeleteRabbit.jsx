// import {
//   Box,
//   Flex,
//   Heading,
//   Button,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   useDisclosure,
// } from "@chakra-ui/react";
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import RabbitList from "../pages/RabbitListRepro";

// import PrivateLink from "./PrivateLink";

// export default function DeleteRabbit() {
//   const navigate = useNavigate();

//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const handleDelete = () => {
//     fetch(`${import.meta.env.VITE_BACKEND_URL}/api/rabbits/${id}`, {
//       method: "DELETE",
//     })
//       .then(() => {
//         onClose(); // Fermer le modal après la suppression réussie
//         navigate("/rabbitList");
//       })
//       .catch((err) => console.error(err));
//   };
//   return (
//     <Box>
//       <Flex
//         bg="#f0e6e6"
//         borderRadius="1rem"
//         boxShadow="md"
//         p="2rem"
//         flexDir="column"
//         w="90%"
//         mt="2rem"
//         mx="auto"
//       >
//         <Heading
//           fontSize="1.2rem"
//           fontFamily="Playfair Display"
//           textTransform="uppercase"
//           letterSpacing="0.1rem"
//         >
//           Supprimer un lapin
//         </Heading>
//         <RabbitList />
//         <PrivateLink authorizedRoles={["admin"]}>
//           <Button type="button" colorScheme="red" onClick={onOpen} mt="1rem">
//             Supprimer
//           </Button>
//           <Modal isOpen={isOpen} onClose={onClose}>
//             <ModalOverlay />
//             <ModalContent>
//               <ModalHeader>Supprimer le lapin</ModalHeader>
//               <ModalCloseButton />
//               <ModalBody>
//                 Êtes-vous sûr de vouloir supprimer ce lapin ?
//               </ModalBody>
//               <ModalFooter>
//                 <Button variant="ghost" onClick={onClose}>
//                   Annuler
//                 </Button>
//                 <Button colorScheme="red" ml={3} onClick={handleDelete}>
//                   Supprimer
//                 </Button>
//               </ModalFooter>
//             </ModalContent>
//           </Modal>
//         </PrivateLink>
//       </Flex>
//     </Box>
//   );
// }
