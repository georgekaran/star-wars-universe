import React from "react";
import './Home.scss';

import { images } from 'utils/variables';

const Home = () => {
  return (
      <div className="Home__Base">
        <section className="Home__Section">
          <h1>Home</h1>
          <h4>Laboris anim dolor elit sit occaecat veniam cupidatat. Est laboris qui quis do aute exercitation proident occaecat. Ad deserunt exercitation tempor dolore laborum nisi ipsum qui occaecat laboris velit cupidatat laborum. Do et nulla mollit qui nulla commodo excepteur. Voluptate ullamco dolore adipisicing minim amet laboris deserunt laborum veniam. Dolor laborum excepteur esse nulla aliquip. Id mollit ullamco sint exercitation ipsum veniam ex officia reprehenderit officia.</h4>
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