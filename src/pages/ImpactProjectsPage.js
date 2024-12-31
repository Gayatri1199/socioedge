import React from "react";
import styled from "styled-components";

import HeroBanner from "../components/HeroBanner";

import ContactUsStrip from "../components/ContactUsStrip";

const ImpactProjectsPageStyle = styled.div`
  max-width: 1440px;
  margin: auto;
  .services-section {
    max-width: 382px;
    margin: auto;
    box-shadow: 0px 2px 4px 0px #0000001a;
    text-align: center;
    padding: 24px 40px;
    margin-top: -90px;
    z-index: 181;
    position: relative;
    background: #edf8fc;
    padding-bottom: 0px !important;
    @media screen and (min-width: 768px) {
      margin-top: -90px;
      padding: 40px;
      max-width: 650px;
    }
    @media screen and (min-width: 1260px) {
      max-width: 988px;
    }

    .redirection {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 40px;
    }

    a {
      font-family: Open Sans;
      font-size: 16px;
      font-weight: 700;
      line-height: 30px;
      text-align: center;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
      display: block;
      max-width: 227px;
      width: 100%;
      text-decoration: none;
      color: #161618;
      &::after {
        content: "";
        display: block;
        height: 3px;
        width: 60px;
        background: transparent;
        margin: 0 auto;
      }

      &:active,
      &:visited {
        color: #013e93;

        // border-bottom: 3px solid #013e93;
        &::after {
          opacity: 1;
        }
      }
    }
    h2 {
      margin-bottom: 24px;
    }
  }

  .blogs-section {
    padding: 0px 16px;
    padding-top: 104px;

    .main-heading {
      padding: 20px 24px;
      background: #f2f5f8;
      border-left: 8px solid #013e93;
    }

    p {
      margin-bottom: 24px;
    }

    .above-content {
      display: flex;
      gap: 24px;
      margin-top: 16px;
      flex-direction: column-reverse;
      @media screen and (min-width: 1260px) {
        flex-direction: row;
      }

      &.reverse {
        flex-direction: column-reverse;
        @media screen and (min-width: 1260px) {
          flex-direction: row-reverse;
        }
      }
      .image {
        @media screen and (min-width: 1260px) {
          max-width: 312px;
        }
        img {
          width: 100%;
          max-width: 100%;
          @media screen and (min-width: 1260px) {
            width: 312px;
            max-width: 312px;
            height: 312px;
          }
        }
      }
    }
  }

  .banner-content {
    display: none;
  }
`;

const ImpactProjectsPage = () => {
  return (
    <ImpactProjectsPageStyle>
      <HeroBanner page="impactProjectPage" />
      <div className="services-section">
        <h2 className="d1">Impact Projects</h2>
        <p className="s1">
          We create impactful projects that improve lives, address community
          challenges, and contribute to sustainable development.
        </p>
        <div className="redirection">
          <a href="#Biochar">Renewable Energy</a>
          <a href="#Afforestation">Healthcare</a>
        </div>
      </div>
      <div className="blogs-section" id="Biochar">
        <div className="blog-card">
          <h2 className="h1 main-heading">Renewable Energy</h2>
          <div className="above-content">
            <div className="content">
              <p className="h2">
                Renewable energy is essential for a sustainable future and
                combating climate change. Our renewable energy projects focus on
                solar, wind, and biomass energy to power homes and communities.
                These projects reduce greenhouse gas emissions and promote
                energy independence, especially in remote regions.
              </p>
              <p className="h2">
                By providing renewable energy solutions, we empower communities
                with reliable and affordable energy access. This leads to
                economic development, improved quality of life, and job
                creation. Our initiatives prioritize clean and sustainable
                energy sources to ensure a positive environmental impact. We
                partner with local organizations and governments to implement
                scalable energy solutions that foster resilience,
                sustainability, and long-term community benefits
              </p>
            </div>
            <div className="image">
              <img
                src="../..//action-project-page/solar-lightning.svg"
                alt="Services"
              />
            </div>
          </div>
          <div className="lower-sec">
            <h2>Powering Communities Sustainably</h2>
            <p className="h2">
              Renewable energy offers a sustainable alternative to traditional
              fossil fuels, addressing both environmental and economic
              challenges. At SocioEdge, we implement renewable energy projects
              to power communities with solar panels, wind turbines, and biomass
              energy solutions. These initiatives provide clean and reliable
              electricity, transforming the lives of those in remote and
              underserved areas.
            </p>
            <h2>Reducing Carbon Footprint</h2>
            <p className="h2">
              One of the most significant benefits of renewable energy is the
              reduction of greenhouse gas emissions. Our projects are designed
              to cut carbon emissions, contributing to climate change
              mitigation. By using natural and replenishable resources, we help
              reduce dependence on non-renewable energy sources, paving the way
              for a healthier planet.
            </p>
            <h2>Economic and Social Benefits</h2>
            <p className="h2">
              Renewable energy projects stimulate local economies by creating
              job opportunities in installation, maintenance, and operations.
              Additionally, access to affordable energy enables local businesses
              to thrive and supports community development. The improved access
              to energy contributes to better educational and healthcare
              outcomes by providing power for schools, hospitals, and essential
              services.
            </p>
            <h2>Innovative and Scalable Solutions</h2>
            <p className="h2">
              We focus on implementing scalable solutions that can be adapted to
              different regions and community needs. Through partnerships with
              local governments and stakeholders, our projects integrate
              innovative technologies tailored to local conditions. This ensures
              resilience and long-term success for our energy programs, enabling
              continuous impact in the communities we serve.
            </p>
            <h2>Collaborative Efforts</h2>
            <p className="h2">
              Our renewable energy initiatives are built on collaboration. We
              partner with local organizations, governments, and experts to
              implement energy systems that meet global standards while catering
              to community-specific needs. This approach ensures that the
              renewable energy projects we establish are sustainable, accepted
              by the community, and foster long-term engagement.
            </p>
          </div>
        </div>
      </div>

      <div className="blogs-section" id="Afforestation">
        <div className="blog-card">
          <h2 className="h1 main-heading">Healthcare</h2>
          <div className="above-content reverse">
            <div className="content">
              <p className="h2">
                Access to quality healthcare is vital for community well-being.
                Our healthcare initiatives aim to improve medical access in
                underserved regions through mobile health clinics and
                telemedicine.
              </p>
              <p className="h2">
                We prioritize preventive care and health education, empowering
                communities with the knowledge to lead healthier lives. By
                addressing early detection and prevention, we mitigate severe
                health outcomes and reduce overall healthcare costs.
              </p>
              <p className="h2">
                Our projects bridge the gap between healthcare providers and
                communities, ensuring that essential health services are
                available and accessible. These efforts create healthier, more
                resilient communities with reduced disease burdens and enhanced
                quality of life.
              </p>
            </div>
            <div className="image">
              <img
                src="../..//impact-projects/I_Banner_2_1.jpg"
                alt="Services"
              />
            </div>
          </div>
          <div className="lower-sec">
            <h2>Improving Rural Healthcare Access</h2>
            <p className="h2">
              In many rural and remote areas, healthcare access is limited or
              nonexistent. We address this gap by establishing mobile clinics,
              deploying telemedicine services, and training community health
              workers. This approach ensures that even the most isolated
              populations can receive essential medical care, reducing mortality
              rates and improving overall well-being. By integrating technology
              and local expertise, we create healthcare solutions that are both
              scalable and adaptable.
            </p>
            <h2>Focus on Preventive and Primary Care</h2>
            <p className="h2">
              Prevention is better than cure, and our healthcare projects
              emphasize preventive care to combat health disparities at their
              root. We conduct regular health screenings, immunization drives,
              and community health education programs. These initiatives focus
              on raising awareness about hygiene, nutrition, and disease
              prevention, aiming to foster long-term community resilience. By
              addressing healthcare needs proactively, we reduce the burden on
              emergency services and improve overall population health.
            </p>
            <h2>Collaborative and Community-Centric Approach</h2>
            <p className="h2">
              Our healthcare programs are built on collaboration with local
              communities, government agencies, and non-profit organizations. We
              believe in co-designing solutions that reflect the unique needs
              and cultural context of each community. Local engagement is
              critical for understanding health challenges, building trust, and
              ensuring sustainable impact. By training local health workers and
              investing in community infrastructure, we empower communities to
              take ownership of their healthcare systems, promoting
              self-reliance and better health outcomes.
            </p>
            <h2>Technology and Innovation in Healthcare Delivery</h2>
            <p className="h2">
              We leverage technology to bridge healthcare gaps, particularly in
              underserved regions. Telemedicine services connect patients with
              specialists, overcoming geographical barriers and reducing the
              need for long-distance travel. Digital health records and mobile
              health apps streamline patient management, ensuring efficient and
              timely care delivery. By adopting tech-driven solutions, we
              enhance both access and quality of care, ensuring that healthcare
              is modern, responsive, and inclusive.
            </p>
            <h2>Holistic Healthcare for Lasting Impact</h2>
            <p className="h2">
              A holistic approach is crucial for creating lasting change in
              healthcare. In addition to medical interventions, we focus on
              nutrition, mental health, and social support systems. Our programs
              aim to tackle the broader determinants of health, from clean water
              access to economic stability. By integrating these elements, we
              ensure comprehensive care that not only treats illness but
              promotes overall community well-being. Our goal is to build
              resilient, self-sustaining healthcare systems that improve lives
              and foster long-term social progress.
            </p>
          </div>
        </div>
      </div>

      <ContactUsStrip />
    </ImpactProjectsPageStyle>
  );
};

export default ImpactProjectsPage;
