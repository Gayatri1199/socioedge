import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import ConsultancyCard from "../components/ConsultancyCard";
import OurDesign from "../components/OurDesign";
import OurProjects from "../components/OurProjects";

const ActionProjectStyle = styled.div`
  .cards-container {
    margin: 64px 0px;
    padding: 68px 0px;
    display: flex;
    gap: 24px;
    justify-content: center;
  }
`;

const ActionProject = () => {
  return (
    <ActionProjectStyle>
      <Banner />
      <div className="cards-container">
        <ConsultancyCard />
        <ConsultancyCard />
      </div>
      <OurDesign />
      <OurProjects />
    </ActionProjectStyle>
  );
};

export default ActionProject;
