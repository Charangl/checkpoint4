import { useRef, useEffect } from "react";

import { Box, Image, Heading, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../App.css";

export default function Writing({ id, title, article, image }) {
  const headingRef = useRef(null);

  useEffect(() => {
    const adjustPseudoElements = () => {
      const headingElement = headingRef.current;
      if (headingElement) {
        const textElement = headingElement.querySelector("Text");
        if (textElement) {
          const textWidth = textElement.offsetWidth;
          headingElement.style.setProperty("--pseudo-width", `${textWidth}px`);
          headingElement.style.setProperty(
            "--pseudo-left",
            `calc(50% - ${textWidth * 0.5}px)`
          );
          headingElement.style.setProperty(
            "--pseudo-right",
            `calc(50% - ${textWidth * 0.5}px)`
          );
        }
      }
    };

    adjustPseudoElements();
    window.addEventListener("resize", adjustPseudoElements);

    return () => {
      window.removeEventListener("resize", adjustPseudoElements);
    };
  }, [title]);
  return (
    <Box
      bg="#f0e6e6"
      borderRadius="1rem"
      boxShadow="md"
      p="2rem"
      flexDir="column"
      w="90%"
      mt="5rem"
      mx="auto"
    >
      <Box p="1rem">
        <Link to={`/writings/${id}`}>
          <Heading
            ref={headingRef}
            fontSize="1.2rem"
            mb="2rem"
            fontFamily="Playfair Display"
            textTransform="uppercase"
            textAlign="center"
            mx="auto"
            letterSpacing="0.1rem"
            position="relative"
            className="heading-with-traits"
          >
            <Text w="40%" mx="30%">
              {title}
            </Text>

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
        <Box>
          <Image
            src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/${image}`}
            alt={title}
            borderRadius="lg"
            boxSize="25%"
            objectFit="cover"
            float="left"
            mr="1.2rem"
            mb="0.3rem"
          />
          <Text>{article ? article.slice(-400) : ""}</Text>
          <Link to={`/writings/${id}`}>
            <Text color="#50908f" fontSize="xs" textAlign="right">
              ... lire la suite
            </Text>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

Writing.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  article: PropTypes.string.isRequired,
  image: PropTypes.string,
};

Writing.defaultProps = {
  image:
    "https://www.cgspectrum.com/hs-fs/hubfs/CGSpectrum_November2019%20Theme/images/Grand-Theft-Auto-V-600x338.jpg?width=600&height=338&name=Grand-Theft-Auto-V-600x338.jpg",
};
