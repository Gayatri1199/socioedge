import React from "react";
import styled from "styled-components";
import LiveProjectCard from "../components/LiveProjectCard";
import UpcomingProjectCard from "../components/UpcomingProjectCard";
import GetinTouch from "../components/GetinTouch";
const LiveProjectStyle = styled.div`
  max-width: 1440px;
  margin: auto;
  .banner {
    padding: 32px;
    background: url(../../live-project/Main-Banner-Top.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    position: relative;
    @media screen and (min-width: 768px) {
      padding: 64px 72px;
    }
    p,
    h2 {
      position: relative;
      z-index: 2;
    }
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgb(255 255 255 / 82%); /* Adjust the opacity here */
      z-index: 1;
    }
  }

  .widget-section {
    display: flex;
    justify-content: center;
    gap: 32px;
    margin-top: 80px;
    flex-wrap: wrap;
    .widget {
      max-width: 188px;
      width: 100%;
      text-align: center;
      h3 {
        color: #013e93;
        margin-bottom: 8px;
        font-family: Open Sans;
        font-size: 20px;
        font-weight: 600;
        line-height: 40px;
      }
    }
  }

  .video-banner {
    display: flex;
    align-items: center;
    margin: 0px 32px;
    margin-top: 80px;
    background: #edf8fc;
    flex-direction: column-reverse;
    @media screen and (min-width: 1260px) {
      flex-direction: row;
    }
    span {
      font-weight: 700;
    }
    .content {
      width: 100%;
      padding: 48px;
      @media screen and (min-width: 1260px) {
        max-width: calc(100% - 688px);
        padding: 0px 48px;
      }
    }
    .video-wrapper video {
      width: 100%;
      @media screen and (min-width: 1260px) {
        max-width: 688px;
      }
    }
  }

  .cards-container {
    margin: 0 32px;
    margin-top: 24px;
    gap: 24px;
    @media screen and (min-width: 768px) {
      overflow: auto;
      display: flex;
      &::-webkit-scrollbar {
        width: 0px;
      }
    }
    .live-project-card {
      margin-bottom: 16px;
      @media screen and (min-width: 768px) {
        min-width: 447px;
        margin-bottom: 0px;
      }
    }
  }

  .upcoming-projects {
    margin-top: 80px;
    padding: 48px 0px;
    background: #013e93;
    text-align: center;
    .inner-wrapper {
      @media screen and (min-width: 768px) {
        overflow: auto;
        display: flex;
        &::-webkit-scrollbar {
          width: 0px;
        }
      }

      gap: 24px;
      padding: 0px 32px;
      @media screen and (min-width: 1260px) {
        justify-content: center;
      }
    }
    .upcoming-project-card {
      margin-bottom: 16px;
      @media screen and (min-width: 768px) {
        min-width: 447px;
        margin-bottom: 0px;
      }
    }
    h3 {
      color: #fff;
      margin-bottom: 24px;
    }
  }

  .impact-section {
    margin-top: 80px;
    text-align: center;
    .images-section {
      display: flex;
      justify-content: center;
      gap: 10px;
      flex-wrap: wrap;
      margin-top: 24px;
      @media screen and (min-width: 768px) {
        gap: 24px;
      }
      img {
        width: 90px;
        max-height: 90px;
        border-radius: 8px;
        min-height: 90px;
        @media screen and (min-width: 768px) {
          width: 300px;
          max-height: 255px;

          min-height: 255px;
        }
      }
    }
  }

  .get-in-touch {
    margin-left: 0px;
    margin-right: 0px;
    max-width: 100%;
  }
`;
const LiveProject = () => {
  return (
    <LiveProjectStyle>
      <div className="banner">
        <h2 className="d1">Live Project 2024</h2>
        <p className="s1">
          Join us in driving impactful climate solutions through innovative
          projects tackling carbon removal, renewable energy, and sustainable
          development. Together, we simplify climate action for a greener
          future.
        </p>
      </div>
      <div className="widget-section" data-aos="fade-up">
        <div className="widget">
          <h3>40,000</h3>
          <p className="s2">Individuals</p>
        </div>
        <div className="widget">
          <h3>89</h3>
          <p className="s2">Villages</p>
        </div>
        <div className="widget">
          <h3>1,34,000</h3>
          <p className="s2">tCO2e Offset</p>
        </div>
        <div className="widget">
          <h3>58</h3>
          <p className="s2">Rural Jobs Creation </p>
        </div>
      </div>

      <div className="video-banner" data-aos="fade-up">
        <div className="content">
          <h3 className="h1">Improved Cookstove Project 2024 </h3>
          <p className="b1">
            Distribution of energy-efficient cookstoves to rural and tribal
            communities, reducing greenhouse gas emissions, deforestation, and
            indoor air pollution. Registered under <span>Gold Standard</span>,
            it delivers high SDG impacts, including better health, gender
            equality, and climate action.
          </p>
        </div>
        <div className="video-wrapper">
          <video width="100%" autoPlay muted loop>
            <source
              src="../../../Socioedge-Website-final.mp4"
              type="video/mp4"
            />
            <source src="mov_bbb.ogg" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="cards-container" data-aos="fade-up">
        <LiveProjectCard
          heading="Baseline Scenario"
          content="We identified villages with high wood consumption due to traditional cooking practices and engaged directly with the communities to understand their challenges firsthand. Based on these insights, Socioedge developed a tailored solution, aligning with the specific needs of the villagers, particularly addressing the concerns of women. "
          img="baseline-scenario.jpg"
        />
        <LiveProjectCard
          img="Data-Integrity.jpg"
          heading="Data Integrity"
          content="We have GPS-tagged all households that received improved cookstoves, ensuring precise tracking and transparency. With no intermediaries between Socioedge and the community, our frequent interactions with women for monitoring are digitally recorded, enhancing accountability and impact measurement. "
        />
        <LiveProjectCard
          img="Employability.jpg"
          heading="Employability "
          content="The entire execution team for our project is directly recruited from the project villages and employed by Socioedge. This passionate group of changemakers is dedicated to driving positive transformation in their communities. Equipped with technical skills in SaaS applications, route-beat planning, and MIS, they ensure highly accurate data collection during monitoring visits. This initiative has not only created local employment but also significantly enhanced the employability of youth in the region. "
        />
      </div>

      <div className="upcoming-projects" data-aos="fade-up">
        <h3 className="d2">Upcoming Projects</h3>
        <div className="inner-wrapper">
          <UpcomingProjectCard
            heading="Afforestation"
            content="Launching in 2025 with 1,000 hectares, the project aims to expand to 5,000 hectares, prioritizing high-quality carbon removal credits and substantial SDG contributions."
          />
          <UpcomingProjectCard
            heading="Improved Cookstove"
            content="Benefiting 80,000 families, the project will commence in 2025 and conclude by the end of 2026. It aims to create over 500 rural jobs while empowering women entrepreneurs. "
          />{" "}
          <UpcomingProjectCard
            heading="Biochar"
            content="Launching in mid-2025, the sawdust-based biochar project will distribute approximately 1,000 tons of biochar annually, promoting its use as a sustainable agricultural fertilizer and a livestock feed additive. "
          />
        </div>
      </div>

      <div className="impact-section" data-aos="fade-up">
        <h4 className="d2">Impact</h4>
        <div className="images-section">
          <img src="../../media-page/media-4.png" alt="Services" />
          <img src="../../media-page/media-5.png" alt="Services" />
          <img src="../../media-page/media-3.png" alt="Services" />
          <img src="../../media-page/media-8.png" alt="Services" />
          <img src="../../media-page/media-6.png" alt="Services" />
          <img src="../../media-page/media-1.png" alt="Services" />
          <img src="../../media-page/media-7.png" alt="Services" />
          <img src="../../media-page/media-2.png" alt="Services" />
        </div>
      </div>

      <GetinTouch />
    </LiveProjectStyle>
  );
};

export default LiveProject;
