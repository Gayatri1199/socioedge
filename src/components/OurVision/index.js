import React from "react";
import styled from "styled-components";

const OurVisionStyle = styled.div`
  padding: 104px 68px;
  display: flex;
  gap: 32px;
  flex-direction: column;
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

    button {
      max-width: 200px;
      width: 100%;
      border-radius: 100px;
      padding: 9px;
      background: #013e93;
      border: none;
      color: #fff;
      margin-top: 24px;
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
        padding: 36px;
        background: #22580e;
        color: #fff;
      }

      .lower-sec {
        padding: 54px 42px;
        background: #edf8fc;
      }
    }
  }
`;

const OurVision = () => {
  return (
    <OurVisionStyle>
      <div className="content">
        <h3 className="d1">Let’s end the climate crisis</h3>
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
        <button className="s2">About Us</button>
      </div>
      <div className="cards-sec">
        <div className="card">
          <div className="upper-sec d2">OUR VISION</div>
          <div className="lower-sec s2">
            To simplify the social development and climate sector to make it a
            mass movement.
          </div>
        </div>
        <div className="card">
          <div className="upper-sec d2">OUR MISSION</div>
          <div className="lower-sec s2">
            To provide implementable, robust, and relevant project solutions for
            our clients.
          </div>
        </div>
      </div>
    </OurVisionStyle>
  );
};

export default OurVision;
