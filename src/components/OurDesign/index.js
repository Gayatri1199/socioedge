import React from "react";
import styled from "styled-components";

const OurDesignStyle = styled.div`
  text-align: center;
  h2 {
    margin-bottom: 16px;
  }
  p {
    margin-bottom: 48px;
  }
`;
const OurDesign = () => {
  return (
    <OurDesignStyle>
      <h2>How We Design</h2>
      <p>
        Showcasing innovative solutions, our projects set new benchmarks in
        sustainability, impact, and long-term value creation.
      </p>
      <img src="../../Our-Design.svg" alt="Services" />
    </OurDesignStyle>
  );
};

export default OurDesign;
