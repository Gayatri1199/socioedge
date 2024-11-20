import React from "react";
import styled from "styled-components";

const OurDesignStyle = styled.div`
  text-align: center;
  padding: 0px 16px;
  @media screen and (min-width: 1260px) {
    padding: 0px;
  }
  img {
    width: 100%;
  }
  h2 {
    margin-bottom: 16px;
  }
  p {
    margin-bottom: 48px;
  }
`;
const OurDesign = () => {
  return (
    <OurDesignStyle data-aos="fade-up">
      <h2>How We Design</h2>
      <p>
        Showcasing innovative solutions, our projects set new benchmarks in
        sustainability, impact, and long-term value creation.
      </p>
      <img src="../../climate-action.png" alt="Services" />
    </OurDesignStyle>
  );
};

export default OurDesign;
