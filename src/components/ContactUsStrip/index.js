import React from "react";
import styled from "styled-components";

const ContactUsStripStyle = styled.div`
  background: #22580e;
  display: flex;
  justify-content: space-between;
  padding: 24px;
  align-items: center;
  margin: 0px 16px;
  margin-top: 56px;
  gap: 32px;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    padding: 40px;
    margin: 0px;
    margin-top: 104px;
  }
  @media screen and (min-width: 1260px) {
    flex-direction: row;
  }
  h3 {
    width: 100%;
    color: #fff;
    @media screen and (min-width: 768px) {
      text-align: center;
    }
    @media screen and (min-width: 1260px) {
      max-width: 360px;
    }
  }
  p {
    max-width: 400px;
    width: 100%;
    color: #fff;

    @media screen and (min-width: 768px) {
      text-align: center;
    }
  }

  button {
    width: 100%;
    color: #013e93;
    background: #fff;
    border-radius: 100px;
    padding: 9px;
    @media screen and (min-width: 768px) {
      max-width: 200px;
    }
  }
`;
const ContactUsStrip = () => {
  return (
    <ContactUsStripStyle>
      <h3 className="d2">
        Empowering communities, driving inclusive climate action
      </h3>
      <p className="h2">
        Contact us to explore how we can work together on Net Zero goals.
      </p>
      <button className="s2">Contact Us</button>
    </ContactUsStripStyle>
  );
};

export default ContactUsStrip;
