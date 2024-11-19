import React from "react";
import styled from "styled-components";
import ImageStrip from "../ImageStrip";

const BannerStyle = styled.div`
  text-align: center;
  padding: 24px;
  background: #f2f5f8;
  border-bottom: 10px solid #013e93;
  @media screen and (min-width: 768px) {
    padding: 48px 105px;
  }

  h2 {
    margin-bottom: 24px;
  }
  p {
    max-width: 908px;
    width: 100%;
    margin: auto;
  }
`;

const Banner = ({ page }) => {
  return (
    <BannerStyle>
      {page === "consultancy" ? (
        <div className="banner">
          <h2 className="d1">Consultancy Services</h2>
          <p className="s1">
            We share our experience of registration and operations of carbon and
            impact programs in a collaborative manner. We offer consultancy
            across different phases of the project lifecycle, tailored to meet
            the specific needs of our partners.
          </p>
        </div>
      ) : (
        <>
          <h2 className="d1">Climate Action Projects</h2>
          <p className="s1">
            Our Climate Action Projects drive sustainable change, addressing key
            environmental challenges while contributing to multiple Sustainable
            Development Goals.
          </p>
          <div className="">
            <ImageStrip />
          </div>
        </>
      )}
    </BannerStyle>
  );
};

export default Banner;
