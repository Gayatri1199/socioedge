import React from "react";
import styled from "styled-components";
const OurTeamStyle = styled.div`
  padding: 24px 16px;
  background: #f2f5f8;
  @media screen and (min-width: 768px) {
    padding: 40px 68px;
  }
  h3 {
    text-align: center;
  }

  .teams-sec {
    display: flex;
    margin-top: 32px;
    gap: 24px;
    flex-direction: column;
    overflow: auto;
    justify-content: center;
    @media screen and (min-width: 768px) {
      flex-direction: row;
    }

    @media screen and (min-width: 1260px) {
      flex-direction: row;
      justify-content: undet;
    }
    .team-block {
      width: 100%;
      text-align: center;
      margin: auto;

      @media screen and (min-width: 768px) {
        max-width: 308px;
        min-width: 308px;
      }
      .upper-block {
        padding: 16px;
        color: #fff;
        background: #4591c4;
        margin-bottom: 8px;

        h3 {
          margin-bottom: 4px;
        }
      }
      .lower-block {
        padding: 0px 24px;
        // padding-top: 32px;
        background: #ffffff;
        min-height: 216px;
        p {
          padding-top: 32px;
        }
      }
    }
  }
`;

const OurTeam = () => {
  return (
    <OurTeamStyle>
      <h3 className="d1" data-aos="fade-up">
        Our Team
      </h3>
      <div className="teams-sec" data-aos="fade-up">
        <div className="team-block">
          <div className="upper-block">
            <h4 className="h2">Gaurav Gaur</h4>
            <p className="a5">FOUNDER & CEO</p>
          </div>
          <div className="lower-block b1">
            <p>
              A business and sustainability professional with expertise in
              carbon and impact programs, he has indepth knowledge of community
              dynamics across regions. He is certified in GRI Standards and ISO
              14064 (Scopes 1, 2, and 3).
            </p>
          </div>
        </div>
        <div className="team-block">
          <div className="upper-block">
            <h4 className="h2">Dr. Jude P</h4>
            <p className="a5">CHIEF CARBON OFFICER</p>
          </div>
          <div className="lower-block b1">
            <p>
              An alumnus of the University of Oxford, Cambridge, and the London
              School of Economics, Dr. Jude has extensive experience in carbon
              markets and community projects worldwide. He plays a crucial role
              in advancing the team’s carbon portfolio.
            </p>
          </div>
        </div>
        <div className="team-block">
          <div className="upper-block">
            <h4 className="h2">Pradeep Gaur</h4>
            <p className="a5">ADVISOR - PUBIC POLICY</p>
          </div>
          <div className="lower-block b1">
            <p>
              A public policy veteran with 44 years of experience in soil and
              water conservation, rural development, Panchayat Raj, MNREGA, and
              IRGY (U). He has worked extensively on renewable energy,
              forestation and community development aspects of rural India.
            </p>
          </div>
        </div>
        <div className="team-block">
          <div className="upper-block">
            <h4 className="h2">Abhishek Sharma</h4>
            <p className="a5">PARTNER - RENEWABLES</p>
          </div>
          <div className="lower-block b1">
            <p>
              Abhishek brings a wealth of experience in diverse fields such as
              renewable energy and hydroponics technology. His collaborative
              approach has enabled the team to build strong partnerships with
              policymakers and stakeholders.
            </p>
          </div>
        </div>
      </div>
    </OurTeamStyle>
  );
};

export default OurTeam;
