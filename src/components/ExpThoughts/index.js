import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import ThoughtsCard from "./ThoughtsCard";

const ExpThoughtsStyle = styled.div`
  padding: 56px 68px;
  display: flex;
  gap: 128px;
  background: #edf8fc;

  .content {
    max-width: 496px;
    width: 100%;
  }

  .slider-content {
    max-width: 680px;
    width: 100%;
    margin-bottom: -200px;
  }
`;

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
};

const ExpThoughts = () => {
  return (
    <ExpThoughtsStyle>
      <div className="content">
        <h3 className="d1">Expression of Thoughts</h3>
        <p className="h1">Latest Stories</p>
        <span className="b1">
          We bring you in-depth reporting about the people and ideas making a
          difference.
        </span>
        <button className="s2">Read More</button>
      </div>
      <div className="slider-content">
        <Slider {...settings}>
          <ThoughtsCard />
          <ThoughtsCard />
          <ThoughtsCard />
        </Slider>
      </div>
    </ExpThoughtsStyle>
  );
};

export default ExpThoughts;
