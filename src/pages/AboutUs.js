import React from "react";
import styled from "styled-components";
import HeroBanner from "../components/HeroBanner";
import AboutUsVision from "../components/AboutUsVision";
import OurTeamComponent from "../components/OurTeamComponent";
import ContactUsStrip from "../components/ContactUsStrip";
const AboutUsStyle = styled.div`
  max-width: 1440px;
  margin-top: 104px;
  margin: auto;

  @media screen and (min-width: 768px) {
    padding: 0px 32px;
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
    background: #fff;
    @media screen and (min-width: 768px) {
      margin-top: -220px;
      padding: 40px;
      max-width: 988px;
    }
    h2 {
      margin-bottom: 24px;
    }
  }

  .socio-matter {
    margin: auto;
    margin-top: 56px;
    display: flex;

    max-width: 1304px;
    flex-direction: column-reverse;
    @media screen and (min-width: 768px) {
      margin-top: 106px;
      gap: 68px;
    }
    @media screen and (min-width: 1260px) {
      flex-direction: row;
    }
    img {
      width: 100%;
      display: none;
      @media screen and (min-width: 768px) {
        display: block;
      }
    }
    .img {
      max-width: 320px;
      width: 100%;
    }

    h2 {
      margin-bottom: 24px;
      padding: 0px 16px;
      @media screen and (min-width: 768px) {
        padding: 0px;
      }
    }
    p {
      margin-bottom: 24px;
      padding: 0px 16px;
      @media screen and (min-width: 768px) {
        padding: 0px;
      }
    }
  }

  .banner {
    text-align: center;

    margin-top: 104px;
    max-width: 1304px;
    margin: auto;

    img {
      width: 100%;
    }
    .content {
      background: #f2f5f8;
      padding: 0px 32px;
      @media screen and (min-width: 1260px) {
        padding: 0px;
      }
    }
    h2 {
      padding: 40px 0px 16px 0px;
    }
    p {
      max-width: 1168px;
      background: #f2f5f8;
      width: 100%;
      margin: auto;
      padding-bottom: 40px;
    }
    img {
      display: block;
      margin: auto;
      margin-top: 52px;
    }
  }

  .our-team {
    padding: 40px 16px;
    background: #f2f5f8;
    margin-top: 56px;

    @media screen and (min-width: 768px) {
      margin-top: 104px;
      padding: 40px 68px;
    }

    h3 {
      margin-bottom: 32px;

      position: relative;
      @media screen and (min-width: 768px) {
        text-align: center;
      }
      a {
        font-weight: 400;
        font-size: 18px;
        line-height: 32px;
        position: absolute;
        right: 0px;
        top: 0px;
        color: #151314;
        @media screen and (min-width: 768px) {
          top: 10px;
        }
      }
    }

    .our-team-inner {
      gap: 24px;
      overflow: scroll;
      padding: 4px;
      @media screen and (min-width: 768px) {
        display: flex;
      }
      /* width */
      &::-webkit-scrollbar {
        width: 20px;
        display: none;
      }

      /* Track */
      &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey;
        border-radius: 10px;
      }

      /* Handle */
      &::-webkit-scrollbar-thumb {
        background: red;
        border-radius: 10px;
      }

      /* Handle on hover */
      &::-webkit-scrollbar-thumb:hover {
        background: #b30000;
      }
    }
  }

  // .hide-large {
  //   display: none !important;
  //   @media screen and (min-width: 1260px) {
  //     display: block !important;
  //   }
  // }
  // .hide-medium {
  //   display: none !important;
  //   @media screen and (min-width: 768px) {
  //     display: block !important;
  //   }
  // }
  // .desk-device {
  //   display: block !important;
  //   @media screen and (max-width: 767px) {
  //     display: none !important;
  //   }
  // }

  .desk-device {
    display: none !important;
    @media screen and (min-width: 1260px) {
      display: block !important;
    }
  }

  .mob-device {
    display: block !important;
    @media screen and (min-width: 1260px) {
      display: none !important;
    }
  }

  .img-wrapper {
    display: flex;
    gap: 20px;
    img {
      max-width: 49%;
    }
  }
`;
const AboutUs = () => {
  return (
    <AboutUsStyle>
      <HeroBanner page="aboutus" />
      <div className="services-section">
        <h2 className="d1">About Us</h2>
        <p className="s1">
          We are a team committed to simplifying climate action through
          inclusiveness and transparency. We address environmental and community
          challenges via carbon financing, impact programs, and consultancy
          services.  
        </p>
      </div>
      <div className="socio-matter">
        <div className="content" data-aos="fade-right">
          <h2 className="s1">
            Socioedge was founded by a team passionate towards social and
            environmental development.{" "}
          </h2>
          <p className="s2">
            We have a talent pool with 106 years of professional experience in
            Business, Public policy and Social development sectors. We design
            and develop Carbon & CSR projects in various regions of India.Having
            worked in some of India's very remote and challenging locations, we
            connect directly with the community to understand the core issues.
            We firmly believe in inclusiveness in climate action and practise
            the same through our operational models.
          </p>
          <p className="s2">
            Corporate background helps us in creating excellent audit-ready
            processes. This is beneficial in preserving data integrity and
            monitoring mechanism for an accurate impact measurement and
            reporting system.
          </p>
        </div>
        <div className="img" data-aos="fade-left">
          <img src="../../about-us.gif" alt="About" />
        </div>
      </div>
      <AboutUsVision />
      <div className="banner" data-aos="fade-up">
        <div className="img-wrapper">
          {" "}
          <img
            src="../../About_Us_Values.JPG"
            alt="About"
            className="desk-device"
          />{" "}
          <img
            src="../../About_Us_Values.JPG"
            alt="About"
            className="desk-device"
          />
        </div>

        <img
          src="../../../aboutus-page/about-us-mobile-banner.svg"
          alt="About"
          className="mob-device"
        />
        <div className="content">
          <h2 className="d2">OUR VALUES</h2>
          <p className="s2">
            We create a system of a complete transparancy with our associates.
            We are a company which is audit-ready at any point in our
            operational cycle.  We  monitoring and measuring every business
            process and our partners have access to the real time data all of
            the time. Our reference parameters are based on business excellence,
            GRI standards, and ISO 14064 to follow a globally accepted
            operational mechanism.
          </p>
        </div>

        <img
          src="../../Values_Desktop.png"
          alt="About"
          className="desk-device"
        />

        <img src="../../Values_Mobile.png" alt="About" className="mob-device" />
      </div>

      <div className="our-team" data-aos="fade-up">
        <h3 className="d1">
          Our Team <a href="/ourteam">VIEW TEAM</a>
        </h3>
        <div className="our-team-inner">
          <OurTeamComponent
            name="Gaurav Gaur"
            role="FOUNDER & CEO"
            description="Business sustainability expert in carbon, community dynamics, GRI, ISO certified."
          />
          <OurTeamComponent
            name="Dr. Jude P"
            role="CHIEF CARBON OFFICER"
            description="Oxford, Cambridge, LSE alumnus, carbon markets expert, key team contributor."
          />
          <OurTeamComponent
            name="Pradeep Gaur"
            role="ADVISOR - PUBLIC POLICY"
            description="44 years in public policy, rural development, renewable energy, forestation. "
          />
          <OurTeamComponent
            name="Abhishek Sharma"
            role="PARTNER - RENEWABLES"
            description="Renewable energy, hydroponics expert, fosters strong partnerships with stakeholders."
          />
        </div>
      </div>
      <ContactUsStrip />
    </AboutUsStyle>
  );
};

export default AboutUs;
