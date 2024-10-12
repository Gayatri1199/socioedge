import React from "react";

import HeroBanner from "../components/HeroBanner";
import Services from "../components/Services";
import SimplifyingClimate from "../components/SimplifyingClimate";
import OurUsps from "../components/OurUsps";
import OurVision from "../components/OurVision";
import OurTeam from "../components/OurTeam";
import MileStone from "../components/Milestone";
import ExpThoughts from "../components/ExpThoughts";
import styled from "styled-components";

const HomeStyle = styled.div`
  max-width: 1440px;
  margin: auto;
`;

const Home = () => {
  return (
    <HomeStyle>
      {" "}
      {/* <Header /> */}
      <HeroBanner />
      <Services />
      <SimplifyingClimate />
      <OurUsps />
      <OurVision />
      <OurTeam />
      <MileStone />
      <ExpThoughts />
    </HomeStyle>
  );
};

export default Home;
