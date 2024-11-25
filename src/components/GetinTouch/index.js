import React from "react";
import styled from "styled-components";

const GetinTouchStyle = styled.div`
  background: url(../../getintouch.jpg);
  padding: 64px;
  text-align: center;
  max-width: 1380px;
  margin: auto;
  margin-top: 82px;
  background-size: cover;
  background-repeat: no-repeat;
  .action-btns {
    display: flex;
    justify-content: center;
    margin-top: 32px;
    gap: 24px;
    flex-direction: column;
    align-items: center;
    @media screen and (min-width: 768px) {
      flex-direction: row;
    }
    button {
      max-width: 200px;
      padding: 9px;
      text-align: center;
      display: block;
      width: 100%;
      border: none;
      border-radius: 100px;
      border: 1px solid #013e93;
      color: #013e93;
      &.send-enq {
        background: #013e93;
        color: #fff;
      }
    }
  }
`;

const GetinTouch = () => {
  return (
    <GetinTouchStyle>
      <h2 className="d2">Get In Touch With Us</h2>
      <p className="s1">Let us know how we can help!</p>
      <div className="action-btns">
        <button>Watch Video</button>
        <button className="send-enq">Send Enquiry</button>
      </div>
    </GetinTouchStyle>
  );
};

export default GetinTouch;
