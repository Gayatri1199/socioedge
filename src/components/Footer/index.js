import React from "react";
import styled from "styled-components";
import Accordion from "../Accordion";
const FooterStyle = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: auto;
  margin-top: 56px;
  @media screen and (min-width: 768px) {
    margin-top: 100px;
  }
  .subscription {
    padding: 32px;
    background: #f2f5f8;
  }
  .subscription-form {
    max-width: 1140px;
    width: 100%;
    margin: auto;
    // padding: 10px 0px 10px 38px;
    background: #fff;
    border-radius: 100px;
    form {
      display: flex;
      justify-content: space-between;
    }
    input {
      width: 100%;
      max-width: calc(100% - 140px);
      border: none;
      margin: 10px 0px 10px 38px;
      &:focus-visible {
        border: none;
        outline: none;
      }
      @media screen and (min-width: 768px) {
        max-width: calc(100% - 300px);
      }
    }
    button {
      max-width: 120px;
      width: 100%;
      padding: 5px;
      border: none;
      background: #151314;
      border-radius: 100px;
      color: #fff;
      @media screen and (min-width: 768px) {
        max-width: 280px;
      }
    }
  }
  .footer-main {
    background: #c8e8f7;
    .footer-inner {
      max-width: 1172px;
      margin: auto;
      padding: 48px 0px;
      display: flex;
      justify-content: space-between;
    }
    .footer-block {
      h4 {
        margin-bottom: 24px;
      }
      a {
        display: block;
        color: #000;
        text-decoration: none;
        margin-bottom: 12px;
        img {
          margin-right: 8px;
          position: relative;
          top: 5px;
        }
      }
    }
  }

  .copyright-section {
    max-width: 1172px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: auto;
    padding-top: 24px;
    padding-bottom: 24px;
    border-top: 1px solid #151314;
    flex-direction: column;
    gap: 12px;
    align-items: center;
    @media screen and (min-width: 768px) {
      flex-direction: row;
      align-items: unset;
    }
  }
  .footer-links {
    a {
      color: #000;
      text-decoration: none;
      margin-left: 40px;

      &:first-child {
        margin-left: 0px;
      }
    }
  }
  .desk-footer {
    display: none;
    @media screen and (min-width: 1260px) {
      display: block;
    }
  }

  .mobile-footer {
    display: none;
    padding: 32px;
    @media screen and (max-width: 1259px) {
      display: block;
    }
  }

  a.contact-btn {
    color: #fff !important;

    width: 100%;
    background: #013e93;
    margin-top: 40px;
    border-radius: 100px;
    padding: 8px;
    text-align: center;
    @media screen and (min-width: 1260px) {
      max-width: 200px;
    }
  }
`;
const Footer = () => {
  const accordionItems = [
    {
      title: "Company",
      content: [
        { label: "About Us", url: "void:0" },
        { label: "Careers", url: "void:0" },
        { label: "Consultancy", url: "void:0" },
        {
          label: "FAQs",
          url: "void:0",
        },
        { label: "Teams", url: "/ourteam" },
      ],
    },
    {
      title: "Services",
      content: [
        { label: "Carbon Projects", url: "void:0" },
        { label: "CSR/SDG Programs", url: "void:0" },
        {
          label: "Learning & Development",
          url: "void:0",
        },
        {
          label: "Consultancy Services",
          url: "/consultancy",
        },
      ],
    },
    {
      title: "Why Us",
      content: [
        { label: "USPs", url: "void:0" },
        { label: "Milestones", url: "void:0" },
        { label: "Testimonials", url: "void:0" },
        { label: "Projects", url: "void:0" },
      ],
    },
    {
      title: "Climate Projects",
      content: [
        {
          label: "Carbon Removal Projects",
          url: "void:0",
        },
        {
          label: "Carbon Offset Projects",
          url: "void:0",
        },
      ],
    },
  ];
  return (
    <FooterStyle className="footer">
      <div className="subscription">
        <div className="subscription-form">
          <form>
            <input type="text" placeholder="Enter your email Address" />
            <button>Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-main desk-footer">
        <div className="footer-inner">
          <div className="footer-block">
            <h4>Company</h4>
            <a href="/aboutus" className="s2">
              About Us
            </a>
            <a href="void:(0)" className="s2">
              Careers
            </a>
            <a href="void:(0)" className="s2">
              FAQs
            </a>
            <a href="/ourteam" className="s2">
              Teams
            </a>
          </div>
          <div className="footer-block">
            <h4>Services</h4>
            <a href="void:(0)" className="s2">
              Carbon Projects
            </a>
            <a href="void:(0)" className="s2">
              CSR/SDG Programs
            </a>
            <a href="void:(0)" className="s2">
              Learning & Development
            </a>
            <a href="/consultancy" className="s2">
              Consultancy Services
            </a>
          </div>
          <div className="footer-block">
            <h4>Why Us</h4>
            <a href="void:(0)" className="s2">
              USPs
            </a>
            <a href="void:(0)" className="s2">
              Milestones
            </a>
            <a href="void:(0)" className="s2">
              Testimonials
            </a>
            <a href="void:(0)" className="s2">
              Projects
            </a>
          </div>
          <div className="footer-block">
            <h4>Climate Projects</h4>
            <a href="void:(0)" className="s2">
              Carbon Removal Projects
            </a>
            <a href="void:(0)" className="s2">
              Carbon Offset Projects
            </a>
          </div>
          <div className="footer-block">
            <h4>Contact</h4>
            <a href="mailto:someone@example.com" className="s2">
              <img src="../../Footer/Email.svg" alt="Email" />
              info@socioedge.com
            </a>
            <a href="tel:+91-9923060619" className="s2">
              <img src="../../Footer/Phone.svg" alt="Email" />
              +91-9923060619
            </a>

            <a href="void:(0)" className="s2 contact-btn">
              {" "}
              Contact Us
            </a>
          </div>
        </div>
        <div className="copyright-section a2">
          <p>© 2024 All Rights Reserved</p>
          <div className="footer-links">
            <a href="void:(0)">Privacy Policy</a>
            <a href="void:(0)">Terms of Use</a>
          </div>
        </div>
      </div>
      <div className="footer-main mobile-footer">
        <Accordion items={accordionItems} />
        <div className="copyright-section a2">
          <p>© 2024 All Rights Reserved</p>
          <div className="footer-links">
            <a href="void:(0)">Privacy Policy</a>
            <a href="void:(0)">Terms of Use</a>
          </div>
        </div>
      </div>
    </FooterStyle>
  );
};

export default Footer;
