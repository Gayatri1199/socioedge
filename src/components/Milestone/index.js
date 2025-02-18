import React from "react";
import styled from "styled-components";

const MileStoneStyle = styled.div`
  padding: 104px 0px;
  .milestone-sec {
    overflow: scroll;
  }

  &.pt-0 {
    padding-top: 0px;
  }
  h3 {
    text-align: center;
    margin-bottom: 32px;
  }
  .milestone-sec {
    max-width: 1304px;
    margin: auto;
    .heading-sec {
      display: flex;
      justify-content: space-between;
      max-width: 1125px;
      margin: auto;
      margin-left: 80px;
      gap: 183px;
      white-space: nowrap;
    }
    .vector {
      display: flex;
      // justify-content: center;
      align-items: center;
      margin-top: 24px;
      margin-left: 80px;
      .circle {
        width: 64px;
        height: 64px;
        // background: #4591c4;
        border-radius: 100px;
      }
      .sep {
        min-width: 198px;
        height: 4px;
        background: red;
        &:nth-of-type(2) {
          background: #c8e8f7;
        }
        &:nth-of-type(4) {
          background: #4591c4;
        }
        &:nth-of-type(6) {
          background: #013e93;
        }
        &:nth-of-type(8) {
          background: #669537;
        }
      }
    }
  }

  .content {
    display: flex;
    justify-content: space-between;
    margin-top: 32px;
    gap: 42px;
    p {
      max-width: 224px;
      width: 100%;
      text-align: center;
      min-width: 224px;
    }
  }
  .consultancy-sec {
    .heading-sec {
      margin-top: 32px;
      max-width: 1304px;
      width: 100%;
      margin-left: 40px;
      gap: 93px;
      @media screen and (min-width: 1260px) {
        margin-left: 0px;
        gap: unset;
      }
      h4 {
        margin: auto;
      }
    }
    .vector {
      max-width: 1304px;
      width: 100%;
      .circle {
        background: #4591c4;
        min-width: 64px;
      }
      .sep {
        background: #4591c4 !important;
      }
    }
    p {
      text-align: center;
    }
  }
`;
const MileStone = ({ page }) => {
  return (
    <MileStoneStyle className={`${page === "consultancy" ? "pt-0" : ""}`}>
      {page === "consultancy" ? (
        <div className="consultancy-sec">
          <h3 className="d1">How We Do It</h3>
          <p>
            We offer expert guidance and strategies to help organizations meet
            climate goals and mitigate risks.
          </p>
          <div className="milestone-sec">
            <div className="vector">
              <div className="circle"></div>
              <div className="sep"></div>
              <div className="circle"></div>
              <div className="sep"></div>
              <div className="circle"></div>
              <div className="sep"></div>
              <div className="circle"></div>
              <div className="sep"></div>
              <div className="circle"></div>
            </div>
            <div className="heading-sec">
              <h4 className="b1">PROJECT ASSESSMENT</h4>
              <h4 className="b1">PROJECT MANAGEMENT</h4>
              <h4 className="b1">CARBON PIPELINE DEVELOPMENT</h4>
              <h4 className="b1">IMPACT PROJECT DESIGN</h4>
              <h4 className="b1">CAPACITY BUILDING</h4>
            </div>
            <div className="content">
              <p className="b1">
                Socioedge was founded by experts with experience in corporate,
                environmental, and social sectors, focusing on renewable energy
                and climate initiatives.
              </p>
              <p className="b1">
                We signed agreements at both local and global levels to
                implement Carbon projects across various regions.
              </p>
              <p className="b1">
                With the expansion of our team into Europe, we evolved into a
                truly global organisation.
              </p>
              <p className="b1">
                Two projects listed on Gold Standard Registry. In the same
                month, we completed the execution of one project for our client.
              </p>
              <p className="b1">
                MOUs signed for four more projects on Carbon offset and Carbon
                removal
              </p>
            </div>
          </div>
        </div>
      ) : (
        <>
          <h3 className="d1">Milestones</h3>
          <div className="milestone-sec">
            <div className="heading-sec">
              <h4 className="s1">SEP 2022</h4>
              <h4 className="s1">OCT 2023</h4>
              <h4 className="s1">JAN 2024</h4>
              <h4 className="s1">JUN 2024</h4>
              <h4 className="s1">AUG 2024</h4>
            </div>
            <div className="vector">
              <div className="circle">
                <img src="../../mile-1.svg" alt="Services" />
              </div>
              <div className="sep"></div>
              <div className="circle">
                <img src="../../mile-2.svg" alt="Services" />
              </div>
              <div className="sep"></div>
              <div className="circle">
                <img src="../../mile-3.svg" alt="Services" />
              </div>
              <div className="sep"></div>
              <div className="circle">
                <img src="../../mile-4.svg" alt="Services" />
              </div>
              <div className="sep"></div>
              <div className="circle">
                <img src="../../mile-5.svg" alt="Services" />
              </div>
            </div>
            <div className="content">
              <p className="b1">
                Socioedge was founded by experts with experience in corporate,
                environmental, and social sectors, focusing on renewable energy
                and climate initiatives.
              </p>
              <p className="b1">
                We signed agreements at both local and global levels to
                implement Carbon projects across various regions.
              </p>
              <p className="b1">
                With the expansion of our team into Europe, we evolved into a
                truly global organisation.
              </p>
              <p className="b1">
                Two projects listed on Gold Standard Registry. In the same
                month, we completed the execution of one project for our client.
              </p>
              <p className="b1">
                MOUs signed for four more projects on Carbon offset and Carbon
                removal
              </p>
            </div>
          </div>
        </>
      )}
    </MileStoneStyle>
  );
};

export default MileStone;
