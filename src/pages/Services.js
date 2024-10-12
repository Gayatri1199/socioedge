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
    margin-top: -30px;
    z-index: 181;
    position: relative;
    background: #fff;
    @media screen and (min-width: 768px) {
      margin-top: -90px;
    }
    h2 {
      margin-bottom: 24px;
    }
  }
  .card-wrapper {
    margin-top: 104px;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: center;
    padding: 0px 16px;
    @media screen and (min-width: 768px) {
      padding: 0px;
    }
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
        <ServicesCard
          heading="Climate Action Projects"
          content="Our Carbon Removal efforts feature afforestation and biochar, while our Carbon Offset services include clean cooking, solar lighting, waste management, and renewable energy solutions to reduce carbon footprints and promote sustainability."
          img="usp-1.svg"
        />
        <ServicesCard
          heading="Impact Projects"
          content="Our high-impact SDG-aligned projects focus on long-term sustainability, capacity building, and driving change in remote locations, ensuring lasting benefits for communities and the environment."
          img="usp-1.svg"
        />
        <ServicesCard
          heading="Consultancy"
          content="Our climate consultancy services provide tailored solutions to help organizations navigate climate risks, reduce carbon footprints, and meet sustainability goals. We combine expert guidance with data-driven strategies to create lasting environmental impact."
          img="usp-1.svg"
        />
        <ServicesCard
          heading="Capacity Building"
          content=" Our capacity building services empower individuals and organizations to develop the skills, knowledge, and systems needed to address complex sustainability challenges. Through training and hands-on support, we enhance capabilities for long-term success."
          img="usp-1.svg"
        />
      </div>
      <ContactUsStrip />
    </ServicesStyle>
  );
};

export default Services;
