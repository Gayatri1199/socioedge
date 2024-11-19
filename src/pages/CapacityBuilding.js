import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import ConsultancyCard from "../components/ConsultancyCard";
import MileStone from "../components/Milestone";

const CapacityBuildingStyle = styled.div`
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

const CapacityBuilding = () => {
  return (
    <CapacityBuildingStyle>
      <Banner page="consultancy" />
      <div className="cards-container">
        <ConsultancyCard
          heading="Climate Action Projects"
          content="Carbon Removal projects focus on sustainable solutions for reducing atmospheric carbon."
          listing={[
            {
              title: "Risk assessment & feasibility study",
              image: "/action-project-page/clean-cooking-small.svg",
            },
            {
              title: "Build project pipeline",
              image: "/action-project-page/solar-lightning.svg",
            },
            {
              title: "End to End consultancy",
              image: "/action-project-page/waste-management.svg",
            },
            {
              title: "Project registration & Validation support",
              image: "/action-project-page/biochar.svg",
            },
          ]}
          img="consultancy-card.svg"
          animation="right"
        />
        <ConsultancyCard
          heading="Impact Projects"
          content="Carbon offset projects reduce emissions, promoting sustainability and environmental balance."
          listing={[
            {
              title: "Project design & initial assessment",
              image: "/action-project-page/clean-cooking-small.svg",
            },
            {
              title: "SDG Impact measurement",
              image: "/action-project-page/solar-lightning.svg",
            },
            {
              title: "Community mobilization & operational support",
              image: "/action-project-page/waste-management.svg",
            },
            {
              title: "End to End consultancy ",
              image: "/action-project-page/biochar.svg",
            },
          ]}
          img="/action-project-page/import-projects.svg"
          page="consultancy"
          animation="left"
        />
      </div>
      {/* <MileStone page="consultancy" /> */}
    </CapacityBuildingStyle>
  );
};

export default CapacityBuilding;
