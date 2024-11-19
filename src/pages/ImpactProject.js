import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import ConsultancyCard from "../components/ConsultancyCard";
import OurDesign from "../components/OurDesign";
import OurProjects from "../components/OurProjects";

const ImpactProjectStyle = styled.div`
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
  .below-card-container {
    margin-bottom: 104px;
    .consultancy-card {
      max-width: 1440px;
      margin: auto;
      .content {
        max-width: 1180px;
        text-align: center;
        ul {
          justify-content: center;
          li {
            min-width: 240px;
            max-width: 240px;
            img {
              min-height: 240px;
            }
          }
        }
      }
    }
  }

  .project-card {
    max-width: 600px;
    width: 100%;
  }
`;

const ImpactProject = () => {
  return (
    <ImpactProjectStyle>
      <Banner page="impactproject" />
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
      <div className="below-card-container">
        {" "}
        <ConsultancyCard
          heading="Carbon Removal"
          content="Carbon Removal projects focus on sustainable solutions for reducing atmospheric carbon."
          listing={[
            {
              title:
                "Service network expansion through community entrepreneurship development",
              image: "/action-project-page/afforestation.svg",
            },
            {
              title: "Women Health",
              image: "/action-project-page/biochar.svg",
            },
            {
              title: "Digital Empowerment",
              image: "/action-project-page/biochar.svg",
            },
          ]}
          img="/action-project-page/action-project-card-one.svg"
          animation="right"
        />
      </div>
      <OurDesign />
      <OurProjects page="impactproject" />
    </ImpactProjectStyle>
  );
};

export default ImpactProject;
