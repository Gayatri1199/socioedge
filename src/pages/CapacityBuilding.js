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
      <Banner page="capacityBuilding" />
      <div className="cards-container">
        <ConsultancyCard
          heading="Net Zero Portfolio"
          content="Offering tailored strategies and solutions to help organizations achieve their carbon neutrality goals."
          listing={[
            {
              title: "Carbon projects induction program",
              image: "/capacity-building/CB_Banner_1_1.jpg",
            },
            {
              title: "ESG & Sustainability reporting",
              image: "/capacity-building/CB_Banner_1_2.jpg",
            },
            {
              title: "Carbon project registration",
              image: "/capacity-building/CB_Banner_1_3.jpg",
            },
          ]}
          img="/capacity-building/CB_Banner_1.jpg"
          animation="right"
        />
        <ConsultancyCard
          heading="Learning & Development"
          content="Designing impactful programs to advance knowledge and drive sustainable practices across industries and communities."
          listing={[
            {
              title: "Advance sales program",
              image: "/capacity-building/CB_Banner_2_1.JPG",
            },
            {
              title: "Sales and Service Network",
              image: "/capacity-building/CB_Banner_2_2.JPG",
            },
            {
              title: "First Time Managers",
              image: "/capacity-building/CB_Banner_2_3.jpeg",
            },
            {
              title: "Terra Leadership Program ",
              image: "/capacity-building/CB_Banner_2_4.jpg",
            },
          ]}
          img="/capacity-building/CB_Banner_2.JPG"
          page="consultancy"
          animation="left"
        />
      </div>
      {/* <MileStone page="consultancy" /> */}
    </CapacityBuildingStyle>
  );
};

export default CapacityBuilding;
