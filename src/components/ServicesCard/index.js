import React from "react";
import styled from "styled-components";

const ServicesCardStyle = styled.div`
  max-width: 632px;
  width: 100%;
  h3 {
    padding: 20px 24px;
    border-left: 8px solid #013e93;
    background: #f2f5f8;
    margin-bottom: 16px;
  }
  .service-block {
    gap: 24px;
    align-items: center;
    @media screen and (min-width: 768px) {
      display: flex;
    }
    .image-section {
      width: 100%;

      @media screen and (min-width: 768px) {
        max-width: 312px;
        width: 100%;
        min-width: 312px;
      }
      img {
        width: 100%;
      }
    }

    p {
      margin-bottom: 16px;
      margin-top: 24px;
      @media screen and (min-width: 768px) {
        margin-top: 0px;
      }
    }
    button {
      background: transparent;
      border: none;
      color: #013e93;
      img {
        margin-left: 16px;
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
`;

const ServicesCard = ({ heading, content, img, animation }) => {
  return (
    <ServicesCardStyle data-aos={`fade-${animation}`}>
      <h3 className="h1">{heading}</h3>
      <div className="service-block">
        <div className="image-section">
          {" "}
          <img src={`../../${img}`} alt="Services" />
        </div>
        <div className="content-section">
          <p className="b1">{content}</p>
          <button className="a1">
            Find Out More <img src="../../arrow-right.png" alt="Services" />
          </button>
        </div>
      </div>
    </ServicesCardStyle>
  );
};

export default ServicesCard;
