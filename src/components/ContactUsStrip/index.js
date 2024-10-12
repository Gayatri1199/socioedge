import React from "react";
import styled from "styled-components";

const ContactUsStripStyle = styled.div`
  background: #22580e;
  display: flex;
  justify-content: space-between;
  padding: 40px;
  align-items: center;
  margin-top: 104px;
  h3 {
    max-width: 191px;
    width: 100%;
    color: #fff;
  }
  p {
    max-width: 400px;
    width: 100%;
    color: #fff;
    text-align: center;
  }

  button {
    max-width: 200px;
    width: 100%;
    color: #013e93;
    background: #fff;
    border-radius: 100px;
    padding: 9px;
  }
`;
const ContactUsStrip = () => {
  return (
    <ContactUsStripStyle>
      <h3 className="d2">Making real change possible</h3>
      <p className="h2">
        Contact us to learn about how we can work with you to deliver action on
        climate
      </p>
      <button className="s2">Contact Us</button>
    </ContactUsStripStyle>
  );
};

export default ContactUsStrip;
