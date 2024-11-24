import React from "react";
import styled from "styled-components";

const ServicesStyle = styled.div`
  padding: 24px 16px;
  background: #f2f5f8;
  @media screen and (min-width: 768px) {
    padding: 40px 68px;
  }

  h2 {
    text-align: center;
    margin-bottom: 32px;
  }
  .services {
    display: flex;
    gap: 24px;
    overflow: auto;
    margin-right: -15px;
    @media screen and (min-width: 768px) {
      margin-right: 0px;
    }
    img {
      width: 100%;
    }
  }

  .service-block {
    max-width: 308px;
    min-width: 308px;
    width: 100%;
    @media screen and (min-width: 768px) {
      margin-bottom: 20px;
    }
  }

  button {
    max-width: 320px;
    width: 100%;
    border-radius: 100px;
    background: #013e93;
    border: none;
    color: #fff;
    margin: auto;
    margin-top: 32px;
    display: block;
    padding: 12px;
    @media screen and (min-width: 768px) {
      padding: 4px;
    }
  }
`;

const Services = () => {
  return (
    <ServicesStyle>
      <h2 className="d1" data-aos="fade-up">
        {" "}
        Our Services
      </h2>
      <div className="services" data-aos="fade-up">
        <div className="service-block">
          <div className="image">
            <img src="../../services/services-1.svg" alt="Services" />
          </div>
          <div className="content">
            <h3 className="h2">Climate Projects</h3>
            <p className="a2">
              We design a variety of carbon offset and removal programs for our
              partners.
            </p>
          </div>
        </div>
        <div className="service-block">
          <div className="image">
            <img src="../../services/services-2.svg" alt="Services" />
          </div>
          <div className="content">
            <h3 className="h2">Impact Programs</h3>
            <p className="a2">
              Renewable energy access, healthcare, skill development and diverse
              subjects.
            </p>
          </div>
        </div>
        <div className="service-block">
          <div className="image">
            <img src="../../services/services-3.svg" alt="Services" />
          </div>
          <div className="content">
            <h3 className="h2">Capacity Building</h3>
            <p className="a2">
              A diverse range of programs uniquely designed for corporate
              partners to build both behavioral and technical skills.
            </p>
          </div>
        </div>
        <div className="service-block">
          <div className="image">
            <img src="../../Home_Page_Consultancy.png" alt="Services" />
          </div>
          <div className="content">
            <h3 className="h2">Consultancy Services</h3>
            <p className="a2">
              Carbon project registration, validation support, independent
              consultant to complete project life, capacity building.
            </p>
          </div>
        </div>
      </div>
      <button className="s2">Learn More</button>
    </ServicesStyle>
  );
};

export default Services;
