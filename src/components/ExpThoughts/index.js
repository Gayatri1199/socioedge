import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import ThoughtsCard from "./ThoughtsCard";

const ExpThoughtsStyle = styled.div`
  padding: 56px 68px;
  display: flex;
  gap: 128px;
  background: #edf8fc;
  flex-direction: column;
  @media screen and (min-width: 1260px) {
    flex-direction: row;
  }

  .content {
    max-width: 496px;
    width: 100%;
  }

  .slider-content {
    max-width: 680px;
    width: 100%;
    margin-top: 68px;
    margin-bottom: -200px;
  }

  button.btn {
    max-width: 200px;
    width: 100%;
    color: #fff;
    margin-top: 32px;
    display: block;
    border-radius: 100px;
    background: #013e93;
    border: none;
    padding: 10px;
  }
  .slick-prev,
  .slick-next {
    position: absolute;
    top: -50px;
    left: unset;
    right: 20px;
  }

  .slick-prev {
    right: 60px;
  }

  .slick-next {
    &::before {
      transform: scaleX(-1);
    }
  }

  .slick-prev:before,
  .slick-next:before {
    content: url(../../slider-arrow-right-solid.svg);
    width: 24px;
    height: 24px;

    display: block;
  }
`;

var settings = {
  dots: false,
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
        <button className="s2 btn">Read More</button>
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
