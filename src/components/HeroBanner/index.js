import React from "react";
import styled from "styled-components";

const HeroBannerStyle = styled.div`
  p {
    text-align: center;
    max-width: 1008px;
    margin: 48px auto;
  }
  img {
    width: 100%;
  }
`;

const HeroBanner = ({ page }) => {
  return (
    <HeroBannerStyle>
      {page === "services" ? (
        <img src="../../../service-main-banner.svg" alt="Hero Banner" />
      ) : (
        <img src="../../../herobanner.svg" alt="Hero Banner" />
      )}

      {page !== "services" ? (
        <p className="s1">
          We are a dedicated team committed to simplifying climate action
          through inclusiveness and transparency. We address environmental and
          community challenges via carbon financing, impact programs and
          consultancy services.
        </p>
      ) : null}
    </HeroBannerStyle>
  );
};

export default HeroBanner;
