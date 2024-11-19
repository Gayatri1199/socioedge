import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import ConsultancyCard from "../components/ConsultancyCard";
import OurDesign from "../components/OurDesign";
import OurProjects from "../components/OurProjects";

const ActionProjectStyle = styled.div`
  .cards-container {
    margin: 64px 0px;
    padding: 68px 16px;
    display: flex;
    gap: 24px;
    justify-content: center;
    flex-direction: column;
    @media screen and (min-width: 768px) {
      padding: 68px 0px;
    }
    @media screen and (min-width: 1260px) {
      flex-direction: row;
    }
  }
`;

const ActionProject = () => {
  return (
    <ActionProjectStyle>
      <Banner />
      <div className="cards-container">
        <ConsultancyCard
          heading="Carbon Removal"
          content="Carbon Removal projects focus on sustainable solutions for reducing atmospheric carbon."
          listing={[
            {
              title: "Afforestation",
              image: "/action-project-page/afforestation.svg",
            },
            {
              title: "Biochar",
              image: "/action-project-page/biochar.svg",
            },
          ]}
          img="/action-project-page/action-project-card-one.svg"
          animation="right"
        />
        <ConsultancyCard
          heading="Carbon Offset"
          content="Carbon offset projects reduce emissions, promoting sustainability and environmental balance."
          listing={[
            {
              title: "Clean Cooking",
              image: "/action-project-page/clean-cooking-small.svg",
            },
            {
              title: "Solar Lighting",
              image: "/action-project-page/solar-lightning.svg",
            },
            {
              title: "Waste Management",
              image: "/action-project-page/waste-management.svg",
            },
            {
              title: "Renewable Energy",
              image: "/action-project-page/biochar.svg",
            },
          ]}
          img="/action-project-page/clean-cooking.svg"
          animation="left"
        />
      </div>
      <OurDesign />
      <OurProjects />
    </ActionProjectStyle>
  );
};

export default ActionProject;
