import React from "react";
import styled from "styled-components";
import ContactUsStrip from "../components/ContactUsStrip";
const MilestonePageStyle = styled.div`
  max-width: 1440px;
  margin: auto;
  img {
    width: 100%;
  }

  .content {
    padding: 24px;
    text-align: center;
    max-width: 1102px;
    margin: auto;
    margin-bottom: 56px;
  }

  .below-img {
    max-width: 1102px;
    margin: auto;
    display: block;
  }
`;
const MilestonePage = () => {
  return (
    <MilestonePageStyle>
      <img src="../../milestone.jpeg" alt="Banner" className="banner" />
      <div className="content">
        <h1 className="d1">Milestones</h1>
        <p className="s1">
          Driving impactful waste solutions that reduce emissions, promote
          sustainability, and transform waste into valuable resources. Creating
          a future where humanity and nature thrive in harmony.
        </p>
      </div>
      <img
        src="../../milestone-bottom-img.png"
        alt="Banner"
        className="below-img"
      />
      <ContactUsStrip />
    </MilestonePageStyle>
  );
};

export default MilestonePage;
