import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.div`
  padding: 16px 34px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  margin: auto;

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
  }
`;
const Header = () => {
  return (
    <HeaderStyle>
      <div className="logo">
        <a href="#">
          <img src="../../socioedge-logo.svg" alt="Logo" />
        </a>
      </div>
      <div className="navigations">
        <a href="#">Services</a>
        <a href="#">Programs</a>
        <a href="#">Impact</a>
        <a href="#">Insights</a>
        <a href="#">About</a>

        <button>Enquire Now</button>
      </div>
    </HeaderStyle>
  );
};

export default Header;
