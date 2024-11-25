import React from "react";
import styled from "styled-components";

const ContactUsStyle = styled.div`
  max-width: 1440px;
  margin: auto;
  .banner {
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
const ContactUs = () => {
  return (
    <ContactUsStyle>
      <div className="banner">
        <h2 className="d1">Contact Our Team</h2>
        <p>Let us know how we can help!</p>
      </div>
    </ContactUsStyle>
  );
};

export default ContactUs;
