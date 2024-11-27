import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Accordion from "../Accordion";

const HeaderStyle = styled.div`
  padding: 16px 34px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  margin: auto;
  background: #fff;
  position: relative;
  z-index: 19;
  position: sticky;
  width: 100%;
  top: 0px;
  transition: 0.5s all ease-in-out;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  &.fixed-header {
    @media screen and (max-width: 1259px) {
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.5s all ease-in-out;
      position: fixed;
      width: 100%;
    }
  }

  a {
    margin-right: 40px;
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
    color: #151314;
    text-decoration: none;
  }

  button {
    padding: 4px 16px;
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
    background: #013e93;
    color: #fff;
    border: none;
    border-radius: 100px;

    @media screen and (max-width: 1259px) {
      margin-left: 20px;
    }
  }

  .navigations {
    @media screen and (max-width: 1259px) {
      position: absolute;
      width: 100%;
      background: #fff;
      top: 90px;
      right: -100%;
      left: unset;
      transition: 0.5s all ease-in-out;
      z-index: -1;
      height: 100vh;
      overflow: hidden;
      width: 0;

      &.show-menu {
        height: 100vh; // Adjust height as needed
        right: 0px;
        display: block;
        width: 90%;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      }

      a {
        display: block;
        margin-bottom: 20px;
        padding: 0 20px;
      }
    }
  }

  .mobile-menu {
    min-width: 24px;
    display: none;
    cursor: pointer; // Add cursor pointer for better UX
    @media screen and (max-width: 1259px) {
      display: inline-block;
    }
  }
  .content-wrapper {
    top: 60px;
    right: 0 !important;
    left: auto !important;
    padding: 0px;
    box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.062745098);
    z-index: 4;
    border: none;
    max-height: 300px;
    overflow: auto;
    border-radius: 0px 0px 4px 4px !important;
    margin-top: 10px;
    display: block;
    visibility: hidden;
    opacity: 0;
    transition: all 0.3s ease-in-out;
    position: absolute;
    background: #fff;
    min-width: max-content;
    a {
      font-size: 14px;
    }
    /* width */
    &::-webkit-scrollbar {
      width: 5px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey;
      border-radius: 10px;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: #000;
      border-radius: 10px;
    }
    a {
      display: block;
      padding: 10px 15px;
    }
  }

  .menu-item {
    position: relative;
    &:hover {
      .content-wrapper {
        visibility: visible;
        opacity: 1;
        margin-top: 0px;
      }
    }
  }

  .desk-device {
    display: none;
    @media screen and (min-width: 1260px) {
      display: block;
    }
  }

  .mob-device {
    display: block;
    padding: 16px;
    button {
      margin: 0px;
      margin-top: 16px;
    }
    @media screen and (min-width: 1260px) {
      display: none;
    }
  }

  a[href="javascript:void(0)"] {
    cursor: default;
  }
`;

const Header = () => {
  const accordionItems = [
    {
      title: "Services",
      content: [
        { label: "Climate Projects", url: "/actionproject" },
        { label: "Impact Projects", url: "/impactproject" },
        { label: "Consultancy", url: "/consultancy" },
        { label: "Capacity Building", url: "/capacitybuilding" },
      ],
    },
    {
      title: "Climate Project",
      content: [
        { label: "Carbon Removal", url: "javascript:void(0)" },
        { label: "Carbon Offsets", url: "javascript:void(0)" },
        {
          label: "Waste Management",
          url: "javascript:void(0)",
        },
        {
          label: "Renewable Energy",
          url: "javascript:void(0)",
        },
      ],
    },

    {
      title: "Why Us",
      content: [
        { label: "About Us", url: "javascript:void(0)" },
        { label: "History", url: "javascript:void(0)" },
        { label: "Our USPs", url: "javascript:void(0)" },
        { label: "Our Team", url: "/ourteam" },
        { label: "Testimonials", url: "javascript:void(0)" },
        { label: "Milestones", url: "javascript:void(0)" },
        { label: "Contact Us", url: "/contactus" },
      ],
    },
  ];
  const [scrolled, setScrolled] = useState(false);
  const handleMenuVisibility = () => {
    const Nav = document.getElementById("navigation");
    if (Nav) {
      Nav.classList.toggle("show-menu");
      document.body.classList.toggle("is-locked");
    }
  };

  const closeMenuOnClickOutside = (event) => {
    const Nav = document.getElementById("navigation");
    const menuToggleButton = document.getElementById("menu-toggle-button");
    if (
      Nav &&
      !Nav.contains(event.target) &&
      !menuToggleButton.contains(event.target) &&
      Nav.classList.contains("show-menu")
    ) {
      Nav.classList.remove("show-menu");
      document.body.classList.remove("is-locked");
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeMenuOnClickOutside);

    return () => {
      document.removeEventListener("click", closeMenuOnClickOutside); // Cleanup
    };
  }, []);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      // Adjust the scroll distance as needed
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup
    };
  }, []);

  return (
    <HeaderStyle id="header" className={`${scrolled ? "fixed-header" : ""}`}>
      <div className="logo">
        <a href="/">
          <img src="../../socioedge-logo.svg" alt="Logo" />
        </a>
      </div>
      <span
        className="mobile-menu"
        id="menu-toggle-button"
        onClick={handleMenuVisibility}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
        </svg>
      </span>
      <div className="navigations" id="navigation">
        <div className="desk-device">
          <span className="menu-item">
            <a href="/services">Services</a>
            <span className="content-wrapper">
              <a href="/actionproject">Climate Projects</a>
              <a href="/impactproject">Impact Projects</a>
              <a href="/consultancy">Consultancy</a>

              <a href="/capacitybuilding">Capacity Building</a>
            </span>
          </span>

          <span className="menu-item">
            <a href="/actionproject">Climate Projects</a>
            <span className="content-wrapper">
              <a href="javascript:void(0)">Carbon Removal</a>
              <a href="javascript:void(0)">Carbon Offset</a>
              <a href="javascript:void(0)">Waste Management</a>
              <a href="javascript:void(0)">Renewable Energy</a>
            </span>
          </span>

          <a href="/media">Media</a>
          <a href="javascript:void(0)">Latest Projects</a>
          <span className="menu-item">
            <a href="/aboutus">Why Us</a>
            <span className="content-wrapper">
              <a href="/aboutus">About Us</a>
              <a href="javascript:void(0)">History</a>
              <a href="javascript:void(0)">Our USPs</a>
              <a href="/ourteam">Our Team</a>
              <a href="javascript:void(0)">Testimonials</a>
              <a href="javascript:void(0)">Milestones</a>
              <a href="/contactus">Contact Us</a>
            </span>
          </span>

          <button>Enquire Now</button>
        </div>
        <div className="mob-device">
          <Accordion items={accordionItems} page="header" />
          <a href="/media" style={{ padding: "0" }}>
            Media
          </a>
          <a href="javascript:void(0)" style={{ padding: "0" }}>
            Live Projects
          </a>
          <button>Enquire Now</button>
        </div>
      </div>
    </HeaderStyle>
  );
};

export default Header;
