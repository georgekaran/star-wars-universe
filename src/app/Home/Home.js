import React from "react";
import './Home.scss';

import { images } from 'utils/variables';

const Home = () => {
  return (
      <div className="Home__Base">
        <section className="Home__Section">
          <span className="Text Title">star wars universe</span>
          <span className="Text">Seja bem vindo ao universo Star Wars, aqui você encontra tudo sobre a saga mais íncrivel do universo.</span>
        </section>
        <section className="Home__Section">
          <img className="Home__Image" 
               src={images.homeImage}
               alt="Imagem página principal"></img>
        </section>
      </div>
  )
};

export default Home;