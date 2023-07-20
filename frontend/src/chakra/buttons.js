import { defineStyleConfig } from "@chakra-ui/react";

const Button = defineStyleConfig({
  baseStyle: {
    borderRadius: "100px",
  },

  variants: {
    solid: {
      bg: "brand.200",
      height: "30px",
      borderRadius: "100px",
      color: "brand.100",
      _hover: {
        color: "black",
      },
      _active: {
        transform: "scale(0.98)",
      },
    },
    oauth: {
      boxShadow: "0px 5px 5px rgba(75, 93, 104, 0.1)",
      fontFamily: "Adamina, serif",
      fontWeight: "400",
      bg: "brand.200",
      borderRadius: "100px",
      color: "brand.100",
      height: "45px",
      _hover: {
        transform: "scale(0.95)",
      },
    },
    sidebar: {
      width: "90%",
      color: "brand.100",
      fontWeight: "500",
      display: "flex",
      justifyContent: "start",
      alignItems: "center",
      _hover: {
        border: "1px",
        borderColor: "brand.100",
      },
    },

    mailbox: {
      padding: "1.5rem 1rem",
      bg: "brand.500",
      color: "brand.100",
      borderRadius: "5px",
      _hover: {
        opacity: ".9",
      },
    },
  },
  defaultProps: {
    size: "md",
    variant: "solid",
  },
});

export default Button;
