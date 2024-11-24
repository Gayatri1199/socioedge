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
          heading="Renewable Energy Access"
          content="Delivering sustainable and affordable energy solutions to empower underserved communities globally."
          listing={[
            {
              title: "Solar Powered Villages",
              image: "/impact-projects/I_Banner_1_1.jpg",
            },
            {
              title: "Application Based Interventions",
              image: "/impact-projects/I_Banner_1_2.jpg",
            },
            {
              title: "Agriculture",
              image: "/impact-projects/I_Banner_1_3.jpg",
            },
            {
              title: "Community Infrastructure",
              image: "/impact-projects/I_Banner_1_4.jpg",
            },
          ]}
          img="/impact-projects/I_Banner_1.jpg"
          animation="right"
        />
        <ConsultancyCard
          heading="Public Infrastructure"
          content="Developing resilient and inclusive infrastructure projects that promote equitable access and sustainable growth."
          listing={[
            {
              title: "Solar powered public healthcare system",
              image: "/impact-projects/I_Banner_2_1.jpg",
            },
            {
              title: "Street Lights",
              image: "/impact-projects/I_Banner_2_2.jpg",
            },
            {
              title: "Education Sector",
              image: "/impact-projects/I_Banner_2_3.jpg",
            },
          ]}
          img="/impact-projects/I_Banner_2.jpg"
          animation="left"
        />
      </div>
      <div className="below-card-container">
        {" "}
        <ConsultancyCard
          heading="Capacity Building"
          content="Enhancing skills and resources to empower communities and organizations for lasting, sustainable development."
          listing={[
            {
              title:
                "Service network expansion through community entrepreneurship development",
              image: "/impact-projects/I_Banner_3_1.png",
            },
            {
              title: "Women Health",
              image: "/impact-projects/I_Banner_3_2.jpg",
            },
            {
              title: "Digital Empowerment",
              image: "/impact-projects/I_Banner_3_3.jpg",
            },
          ]}
          img="/impact-projects/I_Banner_3.JPG"
          animation="right"
        />
      </div>
      <OurDesign />
      <OurProjects page="impactproject" />
    </ImpactProjectStyle>
  );
};

export default ImpactProject;
