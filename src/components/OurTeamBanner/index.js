import React from "react";
import styled from "styled-components";

const OurTeamBannerStyle = styled.div`
  .banner {
    display: flex;
    align-items: center;
    flex-direction: column;
    @media screen and (min-width: 1260px) {
      flex-direction: row;
    }
    .content {
      max-width: 350px;
      width: 100%;
      text-align: center;
      border-bottom: 12px solid #013e93;
      padding: 40px;
      box-shadow: 0px 0px 8px 0px #0000001a;
      background: #fff;
      margin-top: -100px;
      @media screen and (min-width: 768px) {
        max-width: 632px;
      }
      @media screen and (min-width: 1260px) {
        margin: auto;
        margin-left: -100px;
      }
      h2 {
        margin-bottom: 24px;
      }
    }
    .image {
      max-width: 840px;
      width: 100%;

      img {
        width: 100%;
        height: 414px;
        object-fit: cover;
        @media screen and (min-width: 768px) {
          height: unset;
          object-fit: unset;
        }
      }
    }
  }

  .matter {
    max-width: 1032px;
    margin: auto;
    margin-top: 52px;
    text-align: center;
    padding: 0px 16px;
  }
`;
const OurTeamBanner = () => {
  return (
    <OurTeamBannerStyle>
      <div className="banner">
        <div className="image">
          <img src="../../our-team-banner.svg" alt="" />
        </div>
        <div className="content">
          <h2 className="d1">Our Team</h2>
          <p className="s1">
            Our leadership team is made up of recognised leaders with decades of
            robust experience.
          </p>
        </div>
      </div>
      <p className="matter s2">
        As experts in climate science, public policy, economic and social
        analysis, and strategic philanthropy, our staff understands the
        multi-faceted challenges and opportunities of climate change. We are
        researchers, strategists, collaborators, and grantmakers who care
        passionately about our mission.
      </p>
    </OurTeamBannerStyle>
  );
};

export default OurTeamBanner;
