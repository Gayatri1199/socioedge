import React from "react";
import styled from "styled-components";
import HeroBanner from "../components/HeroBanner";
import ServicesCard from "../components/ServicesCard";
import ContactUsStrip from "../components/ContactUsStrip";
const ServicesStyle = styled.div`
  max-width: 1440px;
  margin: auto;
  width: 100%;
  .services-section {
    max-width: 382px;
    margin: auto;
    box-shadow: 0px 2px 4px 0px #0000001a;
    text-align: center;
    padding: 40px;
    margin-top: -90px;
    z-index: 1;
    position: relative;
    background: #fff;
    @media screen and (min-width: 768px) {
      margin-top: -90px;
      max-width: 988px;
    }
    h2 {
      margin-bottom: 24px;
    }
  }
  .card-wrapper {
    margin-top: 56px;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: center;
    padding: 0px 16px;
    @media screen and (min-width: 768px) {
      padding: 0px;
      margin-top: 104px;
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
          We are committed to delivering impactful climate solutions through our
          comprehensive services. From carbon offset projects to sustainable
          development programs, we work closely with communities and businesses
          to create measurable environmental and social benefits. Our innovative
          approaches ensure scalability, while our community-centered focus
          ensures that every solution drives real, lasting change. Together, we
          are not just reducing carbon footprints—we are empowering ecosystems
          and communities to thrive in a sustainable future. 
        </p>
      </div>
      <div className="card-wrapper">
        <ServicesCard
          heading="Climate Action Projects"
          content="We leverage on Carbon Project as a coherent instrument to expedite environmental and social impact. We develop an comprehensive solution that relies on internal capacity to design, implement & register a project. "
          img="services-page/climate-action-project.svg"
          animation="right"
        />
        <ServicesCard
          heading="Impact Projects"
          content="Our high-impact SDG-aligned projects focus on long-term sustainability, capacity building, and driving change in remote locations, ensuring lasting benefits for communities and the environment."
          img="services-page/impact-projects.svg"
          animation="left"
        />
        <ServicesCard
          heading="Consultancy"
          content="Our climate consultancy services provide tailored solutions to help organizations navigate climate risks, reduce carbon footprints, and meet sustainability goals. We combine expert guidance with data-driven strategies to create lasting environmental impact."
          img="services-page/consultancy.svg"
          animation="right"
        />
        <ServicesCard
          heading="Capacity Building"
          content="Our capacity building services empower individuals and organizations to develop the skills, knowledge, and systems needed to address complex sustainability challenges. Through training and hands-on support, we enhance capabilities for long-term success."
          img="services-page/capacity-building.svg"
          animation="left"
        />
      </div>
      <ContactUsStrip />
    </ServicesStyle>
  );
};

export default Services;
