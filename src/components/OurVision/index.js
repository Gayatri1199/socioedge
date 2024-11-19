import React from "react";
import styled from "styled-components";

const OurVisionStyle = styled.div`
  padding: 56px 16px;
  display: flex;
  gap: 32px;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    padding: 104px 68px;
  }
  @media screen and (min-width: 1260px) {
    flex-direction: row;
  }
  .content {
    max-width: 540px;
    width: 100%;

    h3 {
      margin-bottom: 24px;
    }
    p {
      margin-bottom: 16px;
    }

    a {
      width: 100%;
      border-radius: 100px;
      padding: 9px;
      background: #013e93;
      border: none;
      color: #fff;
      margin-top: 24px;
      display: inline-block;
      text-align: center;
      text-decoration: none;
      @media screen and (min-width: 768px) {
        max-width: 200px;
      }
    }
  }
  .cards-sec {
    display: flex;
    gap: 32px;
    flex-direction: column;
    @media screen and (min-width: 1260px) {
      flex-direction: row;
    }

    .card {
      width: 100%;
      text-align: center;
      @media screen and (min-width: 1260px) {
        max-width: 350px;
      }
      .upper-sec {
        padding: 24px;
        background: #22580e;
        color: #fff;
        @media screen and (min-width: 768px) {
          padding: 36px;
        }
      }

      .lower-sec {
        padding: 16px 32px;
        background: #edf8fc;
        min-height: 192px;
        @media screen and (min-width: 768px) {
          min-height: 302px;
        }
      }
    }
  }
`;

const OurVision = () => {
  return (
    <OurVisionStyle>
      <div className="content" data-aos="fade-right">
        <h3 className="d1">
          Let's contribute to climate action for a sustainable future
        </h3>
        <p className="b1">
          Founded by a team passionate about social and environmental
          development, Socioedge boasts a talent pool with 106 years of combined
          professional experience in business, public policy, and social
          development sectors. We specialize in designing and developing Carbon
          (Voluntary Carbon Market) and corporate social responsibility (CSR)
          projects across various regions of India.
        </p>
        <p className="b1">
          Our corporate background enables us to create robust, audit-ready
          processes, preserving data integrity and establishing effective
          monitoring mechanisms for accurate impact measurement and reporting.
        </p>
        <a href="/aboutus" className="s2">
          About Us
        </a>
      </div>
      <div className="cards-sec" data-aos="fade-left">
        <div className="card">
          <div className="upper-sec d2">OUR VISION</div>
          <div className="lower-sec s2">
            Our vision is to accelerate climate action by simplifying greenhouse
            gas emission reduction for businesses. Through innovative processes
            and solutions, we aim to engage stakeholders in creating a
            sustainable and healthier planet for future generations.
          </div>
        </div>
        <div className="card">
          <div className="upper-sec d2">OUR MISSION</div>
          <div className="lower-sec s2">
            Our mission is to advance global efforts in greenhouse gas emission
            reduction by developing innovative carbon projects and providing
            expert consultancy. We are dedicated to helping businesses achieve
            their net zero and sustainability goals through effective, scalable
            solutions that drive meaningful environmental impact.
          </div>
        </div>
      </div>
    </OurVisionStyle>
  );
};

export default OurVision;
