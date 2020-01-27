import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import './Loading.scss'

import Title from "components/Typography/Title";

const SSkeletonPulse = styled.div`
  display: inline-block;
  height: 100%;
  width: 100%;
  background: linear-gradient(-90deg, #c7c7c7 0%, #9a9a9a 50%, #717171 100%);
  background-size: 400% 400%;
  border-radius: 10px;
  animation: pulse 1.2s ease-in-out infinite;
  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;

const SSkeletonLine = styled(SSkeletonPulse)`
  width: 5.5em;
  border-radius: 5px;

  &::before {
    content: "\00a0";
  }
`;

function Loading({ label = "Carregando..." }) {
  return (
    <div className="Loading">
      <Title title={label} color={"#000"} />
      <SSkeletonLine />
    </div>
  );
}

Loading.propTypes = {
  label: PropTypes.string
};

export default Loading;
