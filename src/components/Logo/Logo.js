import React from "react";
import './Logo.scss';

import { images } from "utils/variables";

const Logo = () => <img className="Logo" src={images.logo} alt="Logo"></img>;

export default Logo;