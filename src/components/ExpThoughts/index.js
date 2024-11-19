import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import ThoughtsCard from "./ThoughtsCard";

const ExpThoughtsStyle = styled.div`
  padding: 24px 16px;
  display: flex;
  gap: 0px;
  background: #edf8fc;
  flex-direction: column;
  margin-bottom: 250px;
  @media screen and (min-width: 768px) {
    padding: 56px 68px;
  }

  @media screen and (min-width: 1260px) {
    flex-direction: row;
    gap: 128px;
    margin-bottom: 150px;
  }

  .content {
    max-width: 496px;
    width: 100%;
  }

  .slider-content {
    max-width: 680px;
    width: 100%;
    margin-top: 24px;
    margin-bottom: -200px;
    @media screen and (min-width: 768px) {
      margin-top: 68px;
    }
  }

  button.btn {
    width: 100%;
    color: #fff;
    margin-top: 32px;
    display: block;
    border-radius: 100px;
    background: #013e93;
    border: none;
    padding: 10px;

    @media screen and (min-width: 768px) {
      max-width: 200px;
    }
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

  .regular.slider {
    display: flex;
    overflow: scroll;
    gap: 24px;
  }
`;

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1259,
      settings: "unslick",
    },
  ],
};

const ExpThoughts = () => {
  return (
    <ExpThoughtsStyle>
      <div className="content" data-aos="fade-right">
        <h3 className="d1">Expression of Thoughts</h3>
        <p className="h1">Latest Stories</p>
        <span className="b1">
          We bring you in-depth reporting about the people and ideas making a
          difference.
        </span>
        <button className="s2 btn">Read More</button>
      </div>
      <div className="slider-content" data-aos="fade-left">
        <Slider {...settings}>
          <ThoughtsCard
            img="exp-thoughts-1.svg"
            content="Redefining the CSR Strategy for remote areas"
          />
          <ThoughtsCard
            content="Missing Piece in Climate Action"
            img="exp-thoughts-2.svg"
          />
          <ThoughtsCard
            content="Redefining the CSR Strategy for remote areas"
            img="exp-thoughts-1.svg"
          />
        </Slider>
      </div>
    </ExpThoughtsStyle>
  );
};

export default ExpThoughts;
