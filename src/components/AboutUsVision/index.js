import React from "react";
import styled from "styled-components";

const AboutUsVisionStyle = styled.div`
  max-width: 1304px;
  margin: auto;
  margin-top: 56px;
  padding: 24px;
  background: #f2f5f8;
  @media screen and (min-width: 768px) {
    margin-top: 104px;
  }
  .vision-block {
    display: flex;
    flex-direction: column;
    &:nth-child(2) {
      flex-direction: column-reverse;
      @media screen and (min-width: 1260px) {
        flex-direction: row;
      }
    }
    @media screen and (min-width: 1260px) {
      flex-direction: row;
    }

    .content-block {
      padding: 24px 0px;

      width: 100%;
      text-align: center;
      @media screen and (min-width: 768px) {
        padding: 68px 0px;
      }
      @media screen and (min-width: 1260px) {
        max-width: calc(100% - 620px);
      }
      p {
        padding: 0px 40px;
        width: 100%;
        margin: auto;
      }
      h2 {
        margin-bottom: 16px;
      }
    }
  }
  .img-block {
    max-width: 620px;
    width: 100%;
    img {
      display: block;
      width: 100%;
      height: 366px;
      object-fit: cover;
      @media screen and (min-width: 768px) {
        height: unset;
        object-fit: unset;
      }
    }
  }
`;
const AboutUsVision = () => {
  return (
    <AboutUsVisionStyle>
      <div className="vision-block">
        <div className="img-block" data-aos="fade-right">
          {" "}
          <img
            src="../../../aboutus-page/about-us-our-vision.svg"
            alt="About"
          />
        </div>
        <div className="content-block" data-aos="fade-left">
          <h2 className="d2">OUR VISION</h2>
          <p className="s2">
            Our vision is to accelerate climate action by simplifying greenhouse
            gas emission reduction for businesses. Through innovative processes
            and solutions, we aim to engage stakeholders in creating a
            sustainable and healthier planet for future generations.
          </p>
        </div>
      </div>
      <div className="vision-block">
        <div className="content-block" data-aos="fade-right">
          <h2 className="d2">OUR MISSION</h2>
          <p className="s2">
            Our mission is to advance global efforts in greenhouse gas emission
            reduction by developing innovative carbon projects and providing
            expert consultancy. We are dedicated to helping businesses achieve
            their net zero and sustainability goals through effective, scalable
            solutions that drive meaningful environmental impact.
          </p>
        </div>
        <div className="img-block" data-aos="fade-left">
          <img
            src="../../../aboutus-page/about-us-our-mission.svg"
            alt="About"
          />
        </div>
      </div>
    </AboutUsVisionStyle>
  );
};

export default AboutUsVision;
