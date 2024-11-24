import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import ConsultancyCard from "../components/ConsultancyCard";
import MileStone from "../components/Milestone";

const ConsultancyStyle = styled.div`
  .cards-container {
    margin: 56px 0px;
    padding: 0px 16px;
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
          content="Building pipelines for startups to attract investors and monetize emission reductions effectively."
          listing={[
            {
              title: "Risk assessment & feasibility study",
              image: "/consultancy-images/C_Banner1_1.jpg",
            },
            {
              title: "Build project pipeline",
              image: "/consultancy-images/C_Banner1_2.jpg",
            },
            {
              title: "End to End consultancy",
              image: "/consultancy-images/C_Banner1_3.jpg",
            },
            {
              title: "Project registration & Validation support",
              image: "/consultancy-images/C_Banner1_4.jpg",
            },
          ]}
          img="consultancy-images/C_Banner_main1.png"
          animation="right"
        />
        <ConsultancyCard
          heading="Impact Projects"
          content="Customized programs aligned with the CSR or impact goals of the partner organization."
          listing={[
            {
              title: "Project design & initial assessment",
              image: "/consultancy-images/C_Banner2_1.jpg",
            },
            {
              title: "SDG Impact measurement",
              image: "/consultancy-images/C_Banner2_2.jpg",
            },
            {
              title: "Community mobilization & operational support",
              image: "/consultancy-images/C_Banner2_3.jpg",
            },
            {
              title: "End to End consultancy ",
              image: "/consultancy-images/C_Banner2_4.jpg",
            },
          ]}
          img="consultancy-images/C_Banner1-main.png"
          page="consultancy"
          animation="left"
        />
      </div>
      <MileStone page="consultancy" />
    </ConsultancyStyle>
  );
};

export default Consultancy;
