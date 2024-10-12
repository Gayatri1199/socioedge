import React from "react";
import styled from "styled-components";
import HeroBanner from "../components/HeroBanner";
import ServicesCard from "../components/ServicesCard";
import ContactUsStrip from "../components/ContactUsStrip";
const ServicesStyle = styled.div`
  max-width: 1440px;
  margin: auto;
  .services-section {
    max-width: 988px;
    margin: auto;
    box-shadow: 0px 2px 4px 0px #0000001a;
    text-align: center;
    padding: 40px;
    margin-top: -90px;
    z-index: 181;
    position: relative;
    background: #fff;
    h2 {
      margin-bottom: 24px;
    }
  }
  .card-wrapper {
    margin-top: 104px;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
  }
`;
const Services = () => {
  return (
    <ServicesStyle>
      <HeroBanner page="services" />
      <div className="services-section">
        <h2 className="d1">Our Services</h2>
        <p className="s1">
          Driving climate impact through expert consultancy, capacity building,
          and CSR/SDG alignment services. Together, we create sustainable
          solutions that accelerate your organization's journey toward a
          greener, more responsible future.
        </p>
      </div>
      <div className="card-wrapper">
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
      </div>
      <ContactUsStrip />
    </ServicesStyle>
  );
};

export default Services;
