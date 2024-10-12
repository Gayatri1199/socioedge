import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import ConsultancyCard from "../components/ConsultancyCard";
import MileStone from "../components/Milestone";

const ConsultancyStyle = styled.div`
  .cards-container {
    margin: 64px 0px;
    padding: 68px 0px;
    display: flex;
    gap: 24px;
    justify-content: center;
  }
`;

const Consultancy = () => {
  return (
    <ConsultancyStyle>
      <Banner />
      <div className="cards-container">
        <ConsultancyCard />
        <ConsultancyCard />
      </div>
      <MileStone page="consultancy" />
    </ConsultancyStyle>
  );
};

export default Consultancy;
