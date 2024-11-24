import React from "react";
import styled from "styled-components";

const ConsultancyCardStyle = styled.div`
  max-width: 640px;
  width: 100%;
  margin: auto;
  img {
    width: 100%;
    height: 414px;
    object-fit: cover;
    @media screen and (min-width: 768px) {
      object-fit: unset;
    }
  }
  @media screen and (min-width: 1260px) {
    margin: unset;
  }
  .content {
    max-width: 350px;
    width: 100%;
    box-shadow: 0px 1px 2px 0px #0000004d;
    padding: 24px;
    border-radius: 8px;
    margin: auto;
    margin-top: -70px;
    background: #fff;
    position: relative;
    min-height: 402px;
    @media screen and (min-width: 768px) {
      max-width: 564px;
      min-height: 428px;
    }

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
      padding-left: 0px;
      list-style-type: none;
      display: flex;
      gap: 12px;
      overflow: scroll;
      /* width */
      &::-webkit-scrollbar {
        width: 5px;
      }
      li {
        // margin-bottom: 8px;
        background: #013e93;
        color: #fff;
        max-width: 50%;
        width: 100%;
        margin-right: 4px;
        position: relative;
        // padding: 8px;
        padding-left: 0px;
        // border-radius: 8px;/
        min-width: 120px;
        max-width: 120px;
        img {
          width: 100%;
          object-fit: cover;
          max-height: 120px;
          height: 100% !important;
          min-height: 120px;
          display: block;
        }

        span {
          display: block;
          &.content-span {
            text-align: center;
            padding: 14px;
          }
        }
      }
      &.flex {
        display: flex;
        flex-wrap: wrap;
        li {
          max-width: 49%;
          width: 100%;
        }
      }
    }
  }

  .heading-sec {
    text-align: center;
  }
`;

const ConsultancyCard = ({
  heading,
  content,
  img,
  listing,
  page,
  animation,
}) => {
  return (
    <ConsultancyCardStyle
      data-aos={`fade-${animation}`}
      className="consultancy-card"
    >
      <img src={`../../${img}`} alt="Services" />
      <div className="content">
        <div className="heading-sec">
          <h2 className="h1">{heading}</h2>
        </div>{" "}
        <p>{content}</p>
        <h3 className="s1">Range Of Projects:</h3>
        <ul
          className={`s1 ${
            listing.length >= 4 && page !== "consultancy" ? "" : ""
          }`}
        >
          {listing?.map((list) => {
            return (
              <li>
                <span>
                  <img src={`../../${list.image}`} alt="Services" />
                </span>
                <span className="a2 content-span">{list.title}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </ConsultancyCardStyle>
  );
};

export default ConsultancyCard;
