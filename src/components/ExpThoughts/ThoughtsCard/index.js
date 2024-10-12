import React from "react";
import styled from "styled-components";

const ThoughtsCardStyle = styled.div`
  max-width: 324px;
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
`;
const ThoughtsCard = () => {
  return (
    <ThoughtsCardStyle>
      <div className="upper-sec">
        <p className="s1">Redefining the CSR Strategy for remote areas</p>
        <button className="a1">Read More</button>
      </div>
      <div className="lower-sec">
        <img src="../../exp-thoughts-1.svg" alt="Services" />
      </div>
    </ThoughtsCardStyle>
  );
};

export default ThoughtsCard;
