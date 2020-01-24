import React from "react";
import "./Card.scss";

export default function Card({ episode_id }) {

  const loadImage = () => {
    return require(`assets/images/movies/${episode_id}.jpg`)
  };

  return (
    <div className="Card">
      <img
        className="Image"
        src={loadImage()}
        alt={`Poster do episódio ${episode_id}`}
      />
    </div>
  );
}
