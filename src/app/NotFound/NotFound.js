import React from "react";
import { useHistory } from "react-router-dom";
import "./NotFound.scss";

import NotFoundImage from 'assets/images/not-found.jpg'
import GradientButton from "components/Button/GradientButton";

const NotFound = () => {
  let history = useHistory();
  
  function handleRedirectClick() {
    history.push("/");
  }
  
  return (
    <div className="NotFound">
      <img src={NotFoundImage} 
           alt="Imagem página não encontrada"></img>
      <label>404 - Página não encontrada.</label>
      <GradientButton label={"Voltar a força!"}
                      onClick={handleRedirectClick} />
    </div>
  );
};

export default NotFound;
