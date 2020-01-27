import React from "react";
import './Home.scss';
import HomeTitle from "components/Typography/HomeTitle/HomeTitle";

const Home = () => {
  return (
      <div className="Home__Base">
        <section className="Home__Section">
          <HomeTitle />
          <span className="Text Subtitle">Seja bem vindo ao universo Star Wars, aqui você encontra tudo sobre a saga mais íncrivel do universo.</span>
        </section>
      </div>
  )
};

export default Home;