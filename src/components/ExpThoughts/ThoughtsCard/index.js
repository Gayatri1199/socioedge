import React from "react";
import styled from "styled-components";

const ThoughtsCardStyle = styled.div`
  max-width: 324px;
  min-width: 324px;
  width: 100%;
  background: #fff;
  .upper-sec {
    padding: 16px 24px;
  }
  .lower-sec {
    img {
      width: 100%;
    }
  }
  button {
    margin-top: 8px;
    background: none;
    border: none;
    cursor: pointer;
  }

  p {
    min-height: 64px;
  }
`;
const ThoughtsCard = ({ content, img }) => {
  return (
    <ThoughtsCardStyle>
      <div className="upper-sec">
        <p className="s1">{content}</p>
        <button className="a1">Read More</button>
      </div>
      <div className="lower-sec">
        <img src={`../../${img}`} alt="Services" />
      </div>
    </ThoughtsCardStyle>
  );
};

export default ThoughtsCard;
