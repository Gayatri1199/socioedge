import React from "react";
import styled from "styled-components";

const SimplifyingClimateStyle = styled.div`
  max-width: 1088px;
  margin: 104px auto;

  h2 {
    text-align: center;
    margin-bottom: 32px;
  }

  p {
    margin-bottom: 34px;
    text-align: center;
  }

  .actions {
    
    gap: 24px;
    margin-top: 34px;
    justify-content: center;
    text-align:center;
    span{
      display:none;
    }
    h3{
      margin-bottom:24px;
    }
    @media screen and (min-width:1260px;){
      display: flex;
      text-align:unset;
      span{
        display:inline-block;
      }
     h3{
      margin-bottom:0px;
    }
    }
  }

  .banner {
    padding: 56px 60px;
    background: #edf8fc;
    text-align:center;
    margin-top:72px;
    h3{
    font-weight:400;
    font-size:40px;
    line-heightL54.47px;
    color:#013E93;
    margin-bottom:64px;
}
.banner-sections{
    
    gap:32px;
    justify-content:center;
    @media screen and (min-width:1260px){
    display:flex;
    }
    h4{
        color:#013E93;
        margin-bottom:24px;
    }
}
  }
`;
const SimplifyingClimate = () => {
  return (
    <SimplifyingClimateStyle>
      <h2 className="d1">SIMPLIFYING CLIMATE ACTION</h2>
      <p className="s1">
        We provide comprehensive solutions for carbon and impact programs,
        ensuring scalability and long-term impact through a robust,
        community-driven approach.
      </p>
      <div className="actions h1">
        <h3>End-to-end solutions</h3>
        <span>|</span>
        <h3>Quality and transparency</h3>
        <span>|</span>
        <h3>Community engagement</h3>
      </div>
      <div className="banner">
        <h3>Together, we’re building a thriving planet. For all.</h3>
        <div className="banner-sections">
          <div className="banner-block">
            <h4 className="d1">6,00,000</h4>
            <p className="h2">TCO2E OFFSET</p>
          </div>
          <div className="banner-block">
            <h4 className="d1">14+</h4>
            <p className="h2">PROGRAM CATEGORIES</p>
          </div>
          <div className="banner-block">
            <h4 className="d1">106+</h4>
            <p className="h2">YEARS’ EXPERIENCE</p>
          </div>
          <div className="banner-block">
            <h4 className="d1">1,50,000</h4>
            <p className="h2">IMPACT POPULATION</p>
          </div>
        </div>
      </div>
    </SimplifyingClimateStyle>
  );
};

export default SimplifyingClimate;
