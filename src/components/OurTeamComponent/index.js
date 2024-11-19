import React from "react";
import styled from "styled-components";

const OurTeamComponentStyle = styled.div`
  width: 100%;
  padding: 16px;
  box-shadow: 0px 0px 6px 0px #0000001a;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    max-width: 308px;
    min-width: 308px;
    margin: 0px;
  }

  .upper-sec {
    border-left: 4px solid #4591c4;
    margin-bottom: 16px;
    margin-left: -16px;
    padding-left: 16px;
  }

  h4 {
    color: #013e93;
  }
  span {
    display: block;
  }
`;
const OurTeamComponent = ({ name, role, description }) => {
  return (
    <OurTeamComponentStyle>
      <div className="upper-sec">
        <h4>{name}</h4>
        <span className="a5">{role}</span>
      </div>
      <div className="lower-sec b1">{description}</div>
    </OurTeamComponentStyle>
  );
};

export default OurTeamComponent;
