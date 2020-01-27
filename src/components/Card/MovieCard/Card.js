import React from "react";
import { useHistory } from "react-router-dom";
import "./Card.scss";

import Title from "components/Typography/Title";
import { brazilFormat } from "utils/date/dateFormats";
import CardButton from "components/Button/CardButton";

export default function Card({
  episode_id,
  title,
  release_date,
  director,
  ...props
}) {
  let history = useHistory();

  const loadImage = () => {
    return require(`assets/images/movies/${episode_id}.jpg`);
  };

  const handleOnClick = e => {
    history.push(`/movies/${episode_id}`, {
      movie: { episode_id, title, release_date, director, ...props }
    });
  };

  return (
    <div className="Card">
      <div className="Card__Image">
        <img
          className="Image"
          src={loadImage()}
          alt={`Poster do episódio ${episode_id}`}
        />
      </div>
      <div className="Card__Info">
        <Title title={title} />
        <section style={{ display: "flex", flexWrap: "wrap" }}>
          <div>
            <Title
              title={`Release:`}
              fontSize={12}
              fontWeight={600}
              margin="5px 10px"
            />
            <Title
              title={`${brazilFormat(release_date)}`}
              fontSize={11}
              fontWeight={500}
              margin="5px 10px"
            />
          </div>
          <div>
            <Title
              title={`Director:`}
              fontSize={12}
              fontWeight={600}
              margin="5px 10px"
            />
            <Title
              title={`${director}`}
              fontSize={11}
              fontWeight={500}
              margin="5px 10px"
            />
          </div>
        </section>
        <div className="Card__Footer">
          <CardButton
            key={`button-${episode_id}`}
            label="Ver mais"
            onClick={handleOnClick}
          />
        </div>
      </div>
    </div>
  );
}
