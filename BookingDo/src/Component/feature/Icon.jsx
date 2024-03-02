import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee, faCode, faHeart } from "@fortawesome/free-solid-svg-icons";

library.add(faCoffee, faCode, faHeart); // Add the necessary icons to the library

const Icon = ({ name }) => {
  return <FontAwesomeIcon icon={name} />;
};

export default Icon;
