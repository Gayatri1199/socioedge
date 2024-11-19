import React from "react";
import styled from "styled-components";

const MileStoneStyle = styled.div`
  padding: 104px 0px;
  .milestone-sec {
    overflow: auto;
    /* width */
    &::-webkit-scrollbar {
      width: 20px;
      display: none;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey;
      border-radius: 10px;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: #4591c4;
      border-radius: 10px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: #b30000;
    }
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
        background: #4591c4;
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

  .mobile-view {
    margin-top: 48px;
    padding-left: 78px;
    padding-right: 30px;
    position: relative;
    display: none;
    @media screen and (max-width: 767px) {
      display: block;
    }
    &::before {
      content: "";
      width: 4px;
      height: 100%;
      background: #4591c4;
      position: absolute;
      left: 40px;
      top: 5px;
      max-height: 564px;
    }
    .box {
      margin-bottom: 44px;
    }
    h2 {
      margin-bottom: 24px;
      position: relative;
      &::before {
        content: "";
        width: 24px;
        height: 24px;
        display: block;
        background: #4591c4;
        border-radius: 100px;
        position: absolute;
        left: -48px;
      }
    }
    p {
      text-align: left;
    }
  }

  .desktop-view {
    display: block;
    @media screen and (max-width: 767px) {
      display: none;
    }
  }
`;
const MileStone = ({ page }) => {
  return (
    <MileStoneStyle className={`${page === "consultancy" ? "pt-0" : ""}`}>
      {page === "consultancy" ? (
        <div className="consultancy-sec" data-aos="fade-up">
          <h3 className="d1">How We Do It</h3>
          <p>
            We offer expert guidance and strategies to help organizations meet
            climate goals and mitigate risks.
          </p>
          <div className="mobile-view">
            <div className="box">
              <h2 className="b1">PROJECT ASSESSMENT</h2>
              <p>
                Assessment of risk and potentials, ER estimation, Due diligence
                on a project.
              </p>
            </div>
            <div className="box">
              <h2 className="b1">PROJECT MANAGEMENT</h2>
              <p>
                Baseline surveys, ER estimates, Validation support, PDD review.
              </p>
            </div>
            <div className="box">
              <h2 className="b1">CARBON PIPELINE DEVELOPMENT </h2>
              <p>
                Pipeline development for start- ups to attract investors,
                Monetising Emission Reductions
              </p>
            </div>
            <div className="box">
              <h2 className="b1">IMPACT PROJECT DESIGN</h2>
              <p>Specific programs as per CSR/ Impact vision of the partner</p>
            </div>
            <div className="box">
              <h2 className="b1">CAPACITY BUILDING</h2>
              <p>
                Capacity building on Carbon projects, ESG, Project Management &
                People skills
              </p>
            </div>
          </div>
          <div className="desktop-view">
            {" "}
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
                  environmental, and social sectors, focusing on renewable
                  energy and climate initiatives.
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
                  month, we completed the execution of one project for our
                  client.
                </p>
                <p className="b1">
                  MOUs signed for four more projects on Carbon offset and Carbon
                  removal
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <h3 className="d1" data-aos="fade-up">
            Milestones
          </h3>
          <div className="milestone-sec" data-aos="fade-up">
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
                Grown into a truly global initiative, with a team spanning two
                continents. 
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
