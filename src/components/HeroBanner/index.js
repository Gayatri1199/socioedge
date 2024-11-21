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
          src="../../../aboutus-page/about-us-banner.svg"
          alt="About us page banner"
        />
      ) : (
        <video width="100%" autoPlay muted loop>
          <source
            src="../../../Socioedge_Trailer_Home_Page.mp4"
            type="video/mp4"
          />
          <source src="mov_bbb.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      )}

      {page !== "services" ? (
        <p className="s1">
          Pioneering transformative, community-driven climate projects with
          lasting impact. 
        </p>
      ) : null}
    </HeroBannerStyle>
  );
};

export default HeroBanner;
