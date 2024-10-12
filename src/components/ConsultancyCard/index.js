import React from "react";
import styled from "styled-components";

const ConsultancyCardStyle = styled.div`
  max-width: 640px;
  width: 100%;
  margin: auto;
  img {
    width: 100%;
  }
  @media screen and (min-width: 1260px) {
    margin: unset;
  }
  .content {
    max-width: 564px;
    width: 100%;
    box-shadow: 0px 1px 2px 0px #0000004d;
    padding: 24px;
    border-radius: 8px;
    margin: auto;
    margin-top: -70px;
    background: #fff;
    position: relative;

    h2 {
      margin-bottom: 18px;
      text-align: center;
      border-bottom: 2px solid #22580e;
      display: inline-block;
    }

    p {
      margin-bottom: 16px;
    }

    h3 {
      color: #22580e;
      margin-bottom: 8px;
    }

    ul {
      padding-left: 30px;
      li {
        margin-bottom: 8px;
      }
      &.flex {
        display: flex;
        flex-wrap: wrap;
        li {
          max-width: 50%;
          width: 100%;
        }
      }
    }
  }

  .heading-sec {
    text-align: center;
  }
`;

const ConsultancyCard = ({ heading, content, img, listing, page }) => {
  return (
    <ConsultancyCardStyle>
      <img src={`../../${img}`} alt="Services" />
      <div className="content">
        <div className="heading-sec">
          <h2 className="h1">{heading}</h2>
        </div>{" "}
        <p>{content}</p>
        <h3 className="s1">Range Of Projects:</h3>
        <ul
          className={`s1 ${
            listing.length === 4 && page !== "consultancy" ? "flex" : ""
          }`}
        >
          {listing?.map((list) => {
            return <li>{list}</li>;
          })}
        </ul>
      </div>
    </ConsultancyCardStyle>
  );
};

export default ConsultancyCard;
