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
  const array1 = ["Apple", "Banana", "Cherry"];
  return (
    <ActionProjectStyle>
      <Banner />
      <div className="cards-container">
        <ConsultancyCard
          heading="Carbon Removal"
          content="Carbon Removal projects focus on sustainable solutions for reducing atmospheric carbon."
          listing={["Afforestation", "Biochar"]}
          img="consultancy-card.svg"
        />
        <ConsultancyCard
          heading="Carbon Offset"
          content="Carbon offset projects reduce emissions, promoting sustainability and environmental balance."
          listing={[
            "Clean Cooking",
            "Solar Lighting",
            "Waste Management",
            "Renewable Energy",
          ]}
          img="consultancy-card.svg"
        />
      </div>
      <OurDesign />
      <OurProjects />
    </ActionProjectStyle>
  );
};

export default ActionProject;
