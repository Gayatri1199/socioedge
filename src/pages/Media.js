import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import MediaCard from "../components/MediaCard";
import GetinTouch from "../components/GetinTouch";

const MediaStyle = styled.div`
  max-width: 1440px;
  margin: auto;
  .media-section {
    margin-top: 48px;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    padding: 0px 16px;
    img {
      width: 100%;
    }
    @media screen and (min-width: 1260px) {
      padding: 0px;
      img {
        width: unset;
      }
    }
  }
`;

const Media = () => {
  return (
    <MediaStyle>
      <Banner page="media" />
      <div className="media-section">
        <img
          data-aos="fade-up"
          src="../../media-page/media-1.png"
          alt="Media"
        />
        <MediaCard
          background="green"
          content="What we do matters; let’s choose actions that protect our planet's future."
          name="-Jane Goodall"
          designation="Primatologist and Environmentalist"
        />
        <img
          data-aos="fade-up"
          src="../../media-page/media-2.png"
          alt="Media"
        />
        <MediaCard
          background="red"
          content="The Earth unites us all; safeguarding it is our shared responsibility."
          name="-Wendell Berry"
          designation="Environmental Activist and Writer"
        />
        <img
          data-aos="fade-up"
          src="../../media-page/media-3.png"
          alt="Media"
        />
        <img
          data-aos="fade-up"
          src="../../media-page/media-4.png"
          alt="Media"
        />
        <MediaCard
          background="blue"
          content="Our planet has no backup; urgent action is our only path forward."
          name="-Ban Ki-moon"
          designation="Former UN Secretary-General"
        />
        <img
          data-aos="fade-up"
          src="../../media-page/media-5.png"
          alt="Media"
        />
        <img
          data-aos="fade-up"
          src="../../media-page/media-6.png"
          alt="Media"
        />
        <img
          data-aos="fade-up"
          src="../../media-page/media-7.png"
          alt="Media"
        />
        <img
          data-aos="fade-up"
          src="../../media-page/media-8.png"
          alt="Media"
        />
        <MediaCard
          background="green"
          content="The right time to protect the climate and ensure justice is always now."
          name="-Martin Luther King Jr."
          designation="Civil Rights Leader (adapted for climate action)"
        />
      </div>
      <GetinTouch />
    </MediaStyle>
  );
};

export default Media;
