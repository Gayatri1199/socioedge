import React from "react";
import styled from "styled-components";

const BannerStyle = styled.div`
  text-align: center;
  padding: 48px 105px;
  background: #f2f5f8;

  h2 {
    margin-bottom: 24px;
  }
  p {
    max-width: 908px;
    width: 100%;
    margin: auto;
  }
`;

const Banner = () => {
  return (
    <BannerStyle>
      <h2 className="d1">Climate Action Projects</h2>
      <p className="s1">
        Our Climate Action Projects drive sustainable change, addressing key
        environmental challenges while contributing to multiple Sustainable
        Development Goals.
      </p>
      <div className="">Images</div>
    </BannerStyle>
  );
};

export default Banner;
