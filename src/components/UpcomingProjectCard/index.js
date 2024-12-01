import React from "react";
import styled from "styled-components";

const UpcomingProjectCardStyle = styled.div`
  max-wdith: 443px;
  width: 100%;
  border: 1px solid #fff;
  text-align: center;
  h4 {
    color: #013e93;
    padding: 16px;
    background: #fff;
  }

  p {
    padding: 48px 16px;
    color: #ffffff;
  }
`;

const UpcomingProjectCard = ({ heading, content }) => {
  return (
    <UpcomingProjectCardStyle className="upcoming-project-card">
      <h4 className="h2">{heading}</h4>
      <p className="b1">{content}</p>
    </UpcomingProjectCardStyle>
  );
};

export default UpcomingProjectCard;
