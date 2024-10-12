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
    display: flex;
    gap: 24px;
    align-items: center;
    p {
      margin-bottom: 16px;
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

const ServicesCard = () => {
  return (
    <ServicesCardStyle>
      <h3 className="h1">Climate Action Projects</h3>
      <div className="service-block">
        <div className="image-section">
          {" "}
          <img src="../../services-1.svg" alt="Services" />
        </div>
        <div className="content-section">
          <p className="b1">
            Our Carbon Removal efforts feature afforestation and biochar, while
            our Carbon Offset services include clean cooking, solar lighting,
            waste management, and renewable energy solutions to reduce carbon
            footprints and promote sustainability.
          </p>
          <button className="a1">
            Find Out More <img src="../../arrow-right.png" alt="Services" />
          </button>
        </div>
      </div>
    </ServicesCardStyle>
  );
};

export default ServicesCard;
