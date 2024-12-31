import React from "react";
import styled from "styled-components";

import HeroBanner from "../components/HeroBanner";

import ContactUsStrip from "../components/ContactUsStrip";

const CarbonOffsetProjectsStyle = styled.div`
  max-width: 1440px;
  margin: auto;
  .about-us-banner {
    max-height: 300px;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
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
        background: #013e93;
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
          }
        }
      }
    }
  }

  .banner-content {
    display: none;
  }
`;

const CarbonOffsetProjects = () => {
  return (
    <CarbonOffsetProjectsStyle>
      <HeroBanner page="carbonOffsetProjects" />
      <div className="services-section">
        <h2 className="d1">Carbon Offset Projects</h2>
        <p className="s1">
          We implement projects that reduce emissions, helping organizations
          achieve carbon neutrality and climate goals.
        </p>
        <div className="redirection">
          <a href="#Biochar">Safe Water</a>
          <a href="#Afforestation">Clean Cooking</a>
        </div>
      </div>
      <div className="blogs-section" id="Biochar">
        <div className="blog-card">
          <h2 className="h1 main-heading">Safe Water</h2>
          <div className="above-content">
            <div className="content">
              <p className="h2">
                Access to clean water is a fundamental right, yet millions
                worldwide lack safe drinking water. Our Safe Water initiatives
                focus on providing sustainable solutions to address water
                quality and scarcity issues, particularly in underserved and
                remote communities.
              </p>
              <p className="h2">
                Contaminated water causes life-threatening diseases, impacting
                vulnerable populations the most. By implementing advanced
                filtration systems, rainwater harvesting, and water treatment
                plants, we ensure access to clean drinking water.
              </p>
              <p className="h2">
                We work closely with local communities, empowering them with the
                knowledge and tools to manage water resources sustainably.
              </p>
            </div>
            <div className="image">
              <img
                src="../..//action-project-page/waste-management.svg"
                alt="Services"
              />
            </div>
          </div>
          <div className="lower-sec">
            <h2>The Global Water Crisis</h2>
            <p className="h2">
              The lack of access to clean and safe water affects millions of
              lives worldwide, particularly in rural and underserved areas.
              Contaminated water causes diseases such as cholera, dysentery, and
              diarrhea, resulting in thousands of preventable deaths annually.
              Our Safe Water initiatives are designed to combat this crisis by
              implementing sustainable and scalable water solutions.
            </p>
            <h2>Technology-Driven Solutions</h2>
            <p className="h2">
              At SocioEdge, we leverage technology and innovation to provide
              clean water solutions. These include water filtration systems, UV
              purification units, and rainwater harvesting mechanisms tailored
              to local needs. Our projects are designed to ensure long-term
              water security while addressing quality and accessibility
              challenges.
            </p>
            <h2>Health and Social Impact</h2>
            <p className="h2">
              Access to safe water significantly reduces the prevalence of
              waterborne illnesses, improving overall community health and
              reducing healthcare costs. For children, it ensures better school
              attendance, while women are relieved of the burden of fetching
              water from distant sources. This creates opportunities for
              education, employment, and improved quality of life.
            </p>
            <h2>Community Engagement and Education</h2>
            <p className="h2">
              We prioritize community involvement to ensure the success of our
              Safe Water projects. Through awareness campaigns and training
              programs, we equip communities with the skills to maintain water
              infrastructure and practice water conservation. This approach
              ensures lasting impact and community ownership of water resources.
            </p>
          </div>
        </div>
      </div>

      <div className="blogs-section" id="Afforestation">
        <div className="blog-card">
          <h2 className="h1 main-heading">Clean Cooking</h2>
          <div className="above-content reverse">
            <div className="content">
              <p className="h2">
                Traditional cooking methods using firewood or coal harm both
                health and the environment. Our Clean Cooking programs introduce
                efficient, clean-energy stoves and biogas systems to reduce
                indoor air pollution and dependence on non-renewable fuels.
              </p>
              <p className="h2">
                Prolonged exposure to smoke from traditional stoves leads to
                respiratory diseases, especially among women and children. By
                replacing inefficient cooking practices with cleaner
                technologies, we create safer, healthier indoor environments
                while reducing healthcare burdens.
              </p>
              <p className="h2">
                Our initiatives focus on affordability, accessibility, and
                awareness. Through community engagement and partnerships, we
                deliver clean cooking solutions that reduce carbon emissions,
                conserve forests, and empower families with safer, eco-friendly
                cooking alternatives.
              </p>
            </div>
            <div className="image">
              <img src="../../usp-1.svg" alt="Services" />
            </div>
          </div>
          <div className="lower-sec">
            <h2>The Health Impact of Traditional Cooking</h2>
            <p className="h2">
              Traditional cooking methods using solid fuels like wood, coal, or
              dung produce harmful smoke that severely affects health. Women and
              children are the most exposed, leading to respiratory diseases,
              eye infections, and even early mortality. Our Clean Cooking
              initiatives aim to replace these harmful practices with clean,
              efficient, and affordable cooking technologies.
            </p>
            <h2>Clean Energy Solutions</h2>
            <p className="h2">
              We promote clean cooking technologies such as improved cookstoves,
              LPG (liquefied petroleum gas), and biogas systems. These solutions
              minimize smoke emissions, reduce fuel consumption, and improve
              energy efficiency. By transitioning households to cleaner
              alternatives, we protect both health and the environment.
            </p>
            <h2>Environmental Sustainability</h2>
            <p className="h2">
              Traditional cooking contributes to deforestation and carbon
              emissions. Clean cooking technologies reduce the reliance on
              firewood, conserving forests and contributing to climate action
              goals. By implementing clean energy solutions, we lower greenhouse
              gas emissions, advancing sustainable development while preserving
              ecosystems.
            </p>
            <h2>Economic and Social Empowerment</h2>
            <p className="h2">
              Clean cooking solutions save time and reduce fuel costs, allowing
              families to invest in education, healthcare, and livelihoods.
              Women benefit greatly, as they spend less time collecting firewood
              and experience improved health. Our programs empower communities
              through access to sustainable, affordable technologies that
              transform daily life.
            </p>
            <h2>Our Approach</h2>
            <p className="h2">
              At SocioEdge, we collaborate with local governments,
              organizations, and communities to promote clean cooking solutions.
              We provide education, affordable technologies, and long-term
              support to ensure sustained adoption. By addressing health,
              economic, and environmental challenges, we create healthier homes
              and stronger, more resilient communities.
            </p>
          </div>
        </div>
      </div>

      <ContactUsStrip />
    </CarbonOffsetProjectsStyle>
  );
};

export default CarbonOffsetProjects;
