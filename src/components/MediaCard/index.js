import React from "react";
import styled from "styled-components";

const MediaCardStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-height: 470px;
  height: 470px;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 8px;
  background: #22580e;
  padding: 24px;
  color: #fff;
  @media screen and (min-width: 1260px) {
    max-width: 446px;
  }
  &.red {
    background: #a12b33;
  }

  &.blue {
    background: #013e93;
  }
`;

const MediaCard = ({ background, content, name, designation }) => {
  return (
    <MediaCardStyle data-aos="fade-up" className={`${background}`}>
      <div className="content s1">{content}</div>
      <p className="name h2">-{name}</p>
      <span className="b1">{designation}</span>
    </MediaCardStyle>
  );
};

export default MediaCard;
