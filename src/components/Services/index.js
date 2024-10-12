import React from "react";
import styled from "styled-components";

const ServicesStyle = styled.div`
  padding: 40px 68px;
  background: #f2f5f8;

  h2 {
    text-align: center;
    margin-bottom: 32px;
  }
  .services {
    display: flex;
    gap: 24px;
    overflow: auto;
    img {
      width: 100%;
    }
  }

  .service-block {
    margin-bottom: 20px;
    max-width: 308px;
    min-width: 308px;
    width: 100%;
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
    padding: 4px;
  }
`;

const Services = () => {
  return (
    <ServicesStyle>
      <h2 className="d1"> Our Services</h2>
      <div className="services">
        <div className="service-block">
          <div className="image">
            <img src="../../services-1.svg" alt="Services" />
          </div>
          <div className="content">
            <h3 className="h2">Carbon Projects</h3>
            <p className="a2">
              We design a variety of carbon offset and removal programs for our
              partners.
            </p>
          </div>
        </div>
        <div className="service-block">
          <div className="image">
            <img src="../../service-2.svg" alt="Services" />
          </div>
          <div className="content">
            <h3 className="h2">CSR / SDG Programs</h3>
            <p className="a2">
              Renewable energy access, healthcare, skill development and diverse
              subjects.
            </p>
          </div>
        </div>
        <div className="service-block">
          <div className="image">
            <img src="../../service-3.svg" alt="Services" />
          </div>
          <div className="content">
            <h3 className="h2">Learning & Development</h3>
            <p className="a2">
              We design a variety of carbon offset and removal programs for our
              partners.
            </p>
          </div>
        </div>
        <div className="service-block">
          <div className="image">
            <img src="../../service-4.svg" alt="Services" />
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
