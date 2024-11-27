import React from "react";
import styled from "styled-components";

const HeroBannerStyle = styled.div`
  p {
    text-align: center;
    max-width: 1008px;
    margin: 48px auto;
    padding: 0px 16px;
    @media screen and (min-width: 768px) {
      padding: 0px;
    }
  }
  img {
    width: 100%;
    height: 420px;
    object-fit: cover;
    @media screen and (min-width: 768px) {
      height: unset;
      object-fit: unset;
    }
  }

  .about-us-banner {
    height: 400px;
    @media screen and (min-width: 1260px) {
      height: 600px;
    }
  }
`;

const HeroBanner = ({ page }) => {
  return (
    <HeroBannerStyle>
      {page === "services" ? (
        <img
          src="../../../service-main-banner.svg"
          alt="Main banner for services"
        />
      ) : page === "aboutus" ? (
        <img
          src="../../../About_Us_Hero_Image.jpg"
          alt="About us page banner"
          className="about-us-banner"
        />
      ) : (
        <video width="100%" autoPlay muted loop>
          <source src="../../../Socioedge-Website-final.mp4" type="video/mp4" />
          <source src="mov_bbb.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      )}

      {page !== "services" || page !== "aboutus" ? (
        <p className="s1">
          Pioneering transformative, community-driven climate projects with
          lasting impact. 
        </p>
      ) : null}
    </HeroBannerStyle>
  );
};

export default HeroBanner;
