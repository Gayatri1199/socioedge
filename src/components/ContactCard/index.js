import React from "react";
import styled from "styled-components";
const ContactCardStyle = styled.div`
  max-width: 300px;
  min-width: 300px;
  width: 100%;
  border: 1px solid #b1a9ad;
  border-radius: 8px;
  padding: 16px;
  .img-wrapper {
    display: inline-block;
    padding: 8px;
    border: 1px solid #b1a9ad;
    border-radius: 8px;
    height: 40px;
    width: 40px;
    margin-bottom: 44px;
    box-shadow: 0px 2px 4px 0px #0000001a;
  }
  span {
    color: #766b70;
  }
  a {
    margin-top: 20px;
    display: block;
    max-width: max-content;
  }
  .cd {
    cursor: default;
  }
`;
const ContactCard = ({ heading, content, anchorLink, img, href }) => {
  return (
    <ContactCardStyle>
      <span className="img-wrapper">
        <img src={`../../${img}.png`} alt="Contact" />
      </span>

      <p className="s2">{heading}</p>
      <span className="b1">{content}</span>
      <a
        href={href ? href : "javascript:void(0)"}
        className={`b1 ${href ? "" : "cd"}`}
      >
        {anchorLink}
      </a>
    </ContactCardStyle>
  );
};

export default ContactCard;
