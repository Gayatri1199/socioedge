import React from "react";
import styled from "styled-components";

const OurUspsStyle = styled.div`
  // max-width: 1088px;
  background: #f2f5f8;
  padding: 40px 0px;
  margin: auto;
  h3 {
    text-align: center;
    margin-bottom: 14px;
  }
  .content-msg {
    text-align: center;
    margin: auto;
    margin-bottom: 40px;
    max-width: 1088px;
  }

  .usp-sections {
    display: flex;
    gap: 28px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const OurUsps = () => {
  return (
    <OurUspsStyle>
      <h3 className="d1">Our USPs</h3>
      <p className="s1 content-msg">
        Imposing a solution without fully understanding the community's needs
        and challenges may yield immediate, short-term benefits, but it is a
        recipe for long-term failure.
      </p>
      <div className="usp-sections">
        <div className="usp-block">
          <div className="image">
            <img src="../../services-1.svg" alt="Services" />
          </div>
          <div className="content">
            <h4 className="h2">Quality Assurance</h4>
            <p className="a5">RELIABILITY</p>
          </div>
        </div>
        <div className="usp-block">
          <div className="image">
            <img src="../../services-1.svg" alt="Services" />
          </div>
          <div className="content">
            <h4 className="h2">Quality Assurance</h4>
            <p className="a5">RELIABILITY</p>
          </div>
        </div>
        <div className="usp-block">
          <div className="image">
            <img src="../../services-1.svg" alt="Services" />
          </div>
          <div className="content">
            <h4 className="h2">Quality Assurance</h4>
            <p className="a5">RELIABILITY</p>
          </div>
        </div>
        <div className="usp-block">
          <div className="image">
            <img src="../../services-1.svg" alt="Services" />
          </div>
          <div className="content">
            <h4 className="h2">Quality Assurance</h4>
            <p className="a5">RELIABILITY</p>
          </div>
        </div>
        <div className="usp-block">
          <div className="image">
            <img src="../../services-1.svg" alt="Services" />
          </div>
          <div className="content">
            <h4 className="h2">Quality Assurance</h4>
            <p className="a5">RELIABILITY</p>
          </div>
        </div>
        <div className="usp-block">
          <div className="image">
            <img src="../../services-1.svg" alt="Services" />
          </div>
          <div className="content">
            <h4 className="h2">Quality Assurance</h4>
            <p className="a5">RELIABILITY</p>
          </div>
        </div>
      </div>
    </OurUspsStyle>
  );
};

export default OurUsps;
