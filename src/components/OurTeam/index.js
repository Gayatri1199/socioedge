import React from "react";
import styled from "styled-components";
const OurTeamStyle = styled.div`
  padding: 40px 68px;
  background: #f2f5f8;
  h3 {
    text-align: center;
  }

  .teams-sec {
    display: flex;
    margin-top: 32px;
    gap: 24px;
    .team-block {
      max-width: 308px;
      width: 100%;
      text-align: center;
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
        padding: 32px 24px;
        background: #ffffff;
      }
    }
  }
`;

const OurTeam = () => {
  return (
    <OurTeamStyle>
      <h3 className="d1">Our Team</h3>
      <div className="teams-sec">
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
      </div>
    </OurTeamStyle>
  );
};

export default OurTeam;
