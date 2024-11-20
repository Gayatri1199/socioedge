import React from "react";
import styled from "styled-components";
const ImageStripStyle = styled.div`
  justify-content: center;
  margin-top: 48px;
  @media screen and (min-width: 1260px) {
    display: flex;
  }
  .above-strip {
    display: flex;
    justify-content: center;
    margin-bottom: 24px;
    gap: 68px;
  }
  .box {
    text-align: left;
    padding-left: 12px;
    border-left: 4px solid #013e93;
    margin-right: 12px;
  }
  h2 {
    color: #013e93;
    margin-bottom: 0px;
  }

  img {
    margin-right: 16px;
    margin-bottom: 16px;
    max-width: 100px;
    @media screen and (max-width: 767px) {
      margin-bottom: 16px;
      max-width: 64px;
    }
  }

  .images {
    display: flex;
    overflow: auto;
  }
`;
const ImageStrip = () => {
  return (
    <ImageStripStyle>
      <div className="above-strip">
        <div className="box">
          <h2 className="d2">6,00,000</h2>
          <p className="h2">tCO2e OFFSET</p>
        </div>
        <div className="box">
          <h2 className="d2">1,50,000</h2>
          <p className="h2">Impacted Individuals  </p>
        </div>
      </div>
      <div className="images">
        <img src="../../upper-banner/1.png" alt="Image-Strip" />
        <img src="../../upper-banner/3.png" alt="Image-Strip" />
        <img src="../../upper-banner/4.png" alt="Image-Strip" />
        <img src="../../upper-banner/5.png" alt="Image-Strip" />
        <img src="../../upper-banner/7.png" alt="Image-Strip" />
        <img src="../../upper-banner/8.png" alt="Image-Strip" />
        <img src="../../upper-banner/13.png" alt="Image-Strip" />
        <img src="../../upper-banner/15.png" alt="Image-Strip" />
      </div>
    </ImageStripStyle>
  );
};

export default ImageStrip;
