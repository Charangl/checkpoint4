import { Button } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { useUserContext } from "../../contexts/UserContext";

export default function PrivateLink({ authorizedRoles, to, children }) {
  const [{ user }] = useUserContext();

  if (user && authorizedRoles.includes(user.role)) {
    return (
      <Button variant="sidebar">
        <NavLink to={to}>{children}</NavLink>
      </Button>
    );
  }

  return null;
}

PrivateLink.propTypes = {
  authorizedRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
