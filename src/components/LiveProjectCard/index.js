import React from "react";
import styled from "styled-components";

const LiveProjectCardStyle = styled.div`
  max-width: 447px;
  width: 100%;
  img {
    margin-bottom: 16px;
    width: 100%;
    border-radius: 8px;
    max-height: 295px;
  }
`;

const LiveProjectCard = ({ heading, content, img }) => {
  return (
    <LiveProjectCardStyle className="live-project-card">
      <img src={`../../live-project/${img}`} alt="Live Project Card" />
      <h4 className="h2">{heading}</h4>
      <p className="a2">{content}</p>
    </LiveProjectCardStyle>
  );
};

export default LiveProjectCard;
