import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import ConsultancyCard from "../components/ConsultancyCard";
import MileStone from "../components/Milestone";

const ConsultancyStyle = styled.div`
  .cards-container {
    margin: 64px 0px;
    padding: 68px 16px;
    display: flex;
    gap: 24px;
    justify-content: center;
    flex-direction: column;
    @media screen and (min-width: 1260px) {
      padding: 68px 0px;
      flex-direction: row;
    }
  }
`;

const Consultancy = () => {
  return (
    <ConsultancyStyle>
      <Banner page="consultancy" />
      <div className="cards-container">
        <ConsultancyCard
          heading="Climate Action Projects"
          content="Carbon Removal projects focus on sustainable solutions for reducing atmospheric carbon."
          listing={[
            "Risk assessment & feasibility study",
            "Build project pipeline",
            "Project registration & Validation support ",
            "Monitoring",
            "End to End consultancy",
          ]}
          img="consultancy-card.svg"
        />
        <ConsultancyCard
          heading="Impact Projects"
          content="Carbon offset projects reduce emissions, promoting sustainability and environmental balance."
          listing={[
            "Project design & initial assessment",
            "Community mobilization & operational support",
            "SDG Impact measurement",
            "End to End consultancy ",
          ]}
          img="consultancy-card.svg"
          page="consultancy"
        />
      </div>
      <MileStone page="consultancy" />
    </ConsultancyStyle>
  );
};

export default Consultancy;
