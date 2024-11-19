import React from "react";
import styled from "styled-components";

const SimplifyingClimateStyle = styled.div`
  max-width: 1088px;
  margin: 56px auto;
  @media screen and (min-width:768px){
    margin: 104px auto;
  }

  h2 {
    text-align: center;
    margin-bottom: 32px;
  }

  p {
    margin-bottom: 34px;
    text-align: center;
    padding:0px 16px;
    @media screen and (min-width:768px){
      padding:0px;
    }
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
    @media screen and (min-width:1260px){
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
    padding: 56px;
    background: #edf8fc;
    text-align:center;
    margin:40px 16px;
    border-radius:20px;
     @media screen and (min-width:768px){
        margin-top:72px;
        padding: 56px 60px;
    }
    h3{
    font-weight:700;
    font-size:32px;
    line-heightL54.47px;
    color:#013E93;
    margin-bottom:64px;
    @media screen and (min-width:768px){
     font-weight:400;
    font-size:40px;
    }
   
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

  .banner-block{
    min-width:221px;
  }
`;
const SimplifyingClimate = () => {
  return (
    <SimplifyingClimateStyle>
      <h2 className="d1" data-aos="fade-up">
        SIMPLIFYING CLIMATE ACTION
      </h2>
      <p className="s1" data-aos="fade-up">
        We offer integrated solutions for climate and impact programs, ensuring
        scalability and lasting change through innovative processes and a
        community-centered approach. 
      </p>
      <div className="actions h1" data-aos="fade-up">
        <h3>End-to-end solutions</h3>
        <span>|</span>
        <h3>Quality and transparency</h3>
        <span>|</span>
        <h3>Impact driven</h3>
      </div>
      <div className="banner" data-aos="fade-up">
        <h3>Together, we’re building a thriving planet for all.</h3>
        <div className="banner-sections">
          <div className="banner-block">
            <h4 className="d1">6,00,000</h4>
            <p className="h2">tCO2e OFFSET</p>
          </div>
          <div className="banner-block">
            <h4 className="d1">14+</h4>
            <p className="h2">PROGRAM CATEGORIES</p>
          </div>
          <div className="banner-block">
            <h4 className="d1">106+</h4>
            <p className="h2">CUMULATIVE TEAM EXPERIENCE</p>
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
