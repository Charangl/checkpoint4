import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { useUserContext } from "../contexts/UserContext";

export default function PrivateLink({ authorizedRoles, to, text }) {
  const [{ user }] = useUserContext();

  if (user && authorizedRoles.find((role) => role === user.role)) {
    return (
      <li className="mx-4 p-1">
        <NavLink to={to}>{text}</NavLink>
      </li>
    );
  }

  return null;
}

PrivateLink.propTypes = {
  authorizedRoles: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
