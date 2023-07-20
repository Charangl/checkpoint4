import { useRef, useEffect } from "react";
import {
  Box,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../App.css";

export default function Rabbit({ id, name, sexe, birthday, color, photo }) {
  const headingRef = useRef(null);

  useEffect(() => {
    const adjustPseudoElements = () => {
      const headingElement = headingRef.current;
      if (headingElement) {
        const textElement = headingElement.querySelector("Text");
        if (textElement) {
          const textWidth = textElement.offsetWidth;
          headingElement.style.setProperty(
            "--pseudo-width",
            `${textWidth * 0.35}px`
          );
          headingElement.style.setProperty(
            "--pseudo-left",
            `calc(50% - ${textWidth * 0.175}px)`
          );
          headingElement.style.setProperty(
            "--pseudo-right",
            `calc(50% - ${textWidth * 0.175}px)`
          );
        }
      }
    };

    adjustPseudoElements();
    window.addEventListener("resize", adjustPseudoElements);

    return () => {
      window.removeEventListener("resize", adjustPseudoElements);
    };
  }, [name]);

  return (
    <Box>
      <Card
        bg="#f0e6e6"
        maxW={{ base: "xs", md: "sm" }}
        boxShadow="md"
        mb="4rem"
        w={{ base: "xs", md: "sm" }}
      >
        <CardBody>
          <Link to={`/rabbits/${id}`}>
            <Heading
              ref={headingRef}
              fontSize="1.2rem"
              mb="2rem"
              fontFamily="Playfair Display"
              textTransform="uppercase"
              textAlign="center"
              letterSpacing="0.1rem"
              position="relative"
              className="heading-with-traits"
              style={{
                "--pseudo-width": "35%",
                "--pseudo-left": "-5px",
                "--pseudo-right": "-5px",
              }}
            >
              <Text> {name} </Text>

              <Box
                style={{
                  content: '""',
                  position: "absolute",
                  top: "50%",
                  height: "0.5px",
                  background: "black",
                  width: "var(--pseudo-width)",
                  left: "var(--pseudo-left)",
                }}
              />
              <Box
                style={{
                  content: '""',
                  position: "absolute",
                  top: "50%",
                  height: "0.5px",
                  background: "black",
                  width: "var(--pseudo-width)",
                  right: "var(--pseudo-right)",
                }}
              />
            </Heading>
          </Link>
          <Image
            src={`${
              import.meta.env.VITE_BACKEND_URL
            }/assets/images/rabbit/${photo}`}
            alt={name}
            borderRadius="lg"
            h="14rem"
            w="100%"
            objectFit="cover"
          />
          <Stack mt="6" spacing="3">
            <Heading size="sm">{sexe}</Heading>
            <Text>
              {birthday} {color}
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
}

Rabbit.propTypes = {
  id: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  sexe: PropTypes.string.isRequired,
  photo: PropTypes.string,
};

Rabbit.defaultProps = {
  photo:
    "https://www.cgspectrum.com/hs-fs/hubfs/CGSpectrum_November2019%20Theme/images/Grand-Theft-Auto-V-600x338.jpg?width=600&height=338&name=Grand-Theft-Auto-V-600x338.jpg",
};
