import React from "react";
import styled from "styled-components";
import ContactUsStrip from "../components/ContactUsStrip";

const CarbonOffsetStyle = styled.div`
  max-width: 1440px;
  margin: auto;
  p {
    margin-bottom: 24px;
  }
  .banner {
    padding: 24px;
    text-align: center;
  }
  .banner-img {
    margin-top: 32px;
    width: 100%;
  }

  .content {
    padding: 0px 32px;
    margin-top: 80px;
    gap: 32px;
    @media screen and (min-width: 1260px) {
      display: flex;
      padding: 0px 68px;
    }
    .left-section {
      width: 100%;
      @media screen and (min-width: 1260px) {
        max-width: calc(100% - 340px);
        border-right: 1px solid #b1a9ad;
        padding-right: 32px;
      }
    }
  }

  ul {
    padding-left: 25px;
    span {
      font-weight: 700;
    }
  }

  .cards-sec {
    gap: 24px;
    @media screen and (min-width: 1260px) {
      display: flex;
      flex-wrap: wrap;
    }
    .card {
      img {
        width: 100%;
      }
      margin-bottom: 16px;
      @media screen and (min-width: 768px) {
        display: flex;
        align-items: center;
        img {
          width: unset;
        }
      }
      @media screen and (min-width: 1260px) {
        max-width: 48%;
        h4 {
          white-space: nowrap;
        }
      }
      gap: 16px;
    }
  }

  a {
    font-family: Open Sans;
    font-size: 13px;
    font-weight: 700;
    line-height: 24px;
    text-align: left;
    text-decoration-line: underline;
    text-decoration-style: solid;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }

  .impact {
    margin-top: 80px;
    padding: 24px 32px;
    background: #f2f5f8;
  }

  .content-impact {
    gap: 24px;
    padding-top: 24px;
    justify-content: center;
    img {
      width: 100%;
    }
    @media screen and (min-width: 1260px) {
      display: flex;
    }
    .content-card {
      p {
        padding-left: 16px;
        border-left: 4px solid #013e93;
        max-width: 664px;
      }
    }
  }

  .right-section {
    width: 100%;
    margin-top: 32px;
    @media screen and (min-width: 1260px) {
      max-width: 340px;
      margin-top: 0px;
    }
  }
  .side-banner {
    padding: 16px;
    text-align: center;
    color: #fff;
    background: #013e93;
    img {
      width: 100%;
    }
    p {
      margin-top: 16px;
    }
  }

  .other-card {
    padding: 16px;
    margin-top: 32px;
    img {
      width: 100%;
    }
  }
`;

const RenewableEnergy = () => {
  return (
    <CarbonOffsetStyle>
      <div className="banner">
        <h2 className="d1">Renewable Energy</h2>
        <p className="h1">
          Empowering sustainable transformation through renewable energy
          projects that drive innovation, reduce emissions, and create harmony
          between human progress and environmental preservation.
        </p>
      </div>
      <img
        src="../../renewable-project-banner.png"
        alt="Live Project Card"
        className="banner-img"
        data-aos="fade-up"
      />
      <div className="content" data-aos="fade-up">
        <div className="left-section">
          <div className="content-wrapper">
            <h3 className="d2">What is Renewable Energy Project?</h3>
            <p className="s2">
              Renewable energy projects aim to transform the way we generate and
              use energy by harnessing natural and sustainable resources like
              solar, wind, and hydro. At SocioEdge, we design and implement
              innovative renewable energy solutions that align with global
              sustainability goals while addressing local community needs. By
              adopting advanced technologies and inclusive practices, we create
              projects that not only mitigate emissions but also foster
              equitable growth, offering a roadmap for a sustainable future.
            </p>

            <h3 className="d2">How it can help you from net zero journey?</h3>
            <p className="s2">
              Transitioning to net zero emissions involves more than adopting
              clean energy—it requires a comprehensive strategy that aligns with
              your organization’s unique goals. At SocioEdge, we provide
              expertise and tailored frameworks to simplify this complex
              journey. By partnering with us, you'll benefit from:
            </p>

            <ul className="s2">
              <li>
                <span>Scalable Renewable Solutions:</span> Implement energy
                systems designed to maximize efficiency and support measurable
                reductions in emissions over time.
              </li>

              <li>
                <span>Community-Centered Implementation:</span> Work
                collaboratively with underserved communities to create impactful
                solutions that drive inclusive progress.
              </li>

              <li>
                <span>Customizable Net Zero Frameworks:</span> Receive
                strategies personalized to align with your organization’s
                sustainability ambitions and deliver tangible, long-term
                outcomes.
              </li>
            </ul>

            <img
              src="../../re-banner-2.png"
              alt="Live Project Card"
              className="banner-img"
              data-aos="fade-up"
            />

            <p className="s2" data-aos="fade-up">
              Choosing us ensures that you’re contributing to a greener planet
              while creating lasting impacts for the environment and society
              alike.
            </p>

            {/* <div className="our-project" data-aos="fade-up">
              <h3 className="d2">Our Projects</h3>
              <p className="s2">
                Corporate background helps us in creating excellent audit-ready
                processes. This is beneficial in preserving data integrity and
                monitoring mechanism for an accurate impact measurement and
                reporting system.
              </p>
              <div className="cards-sec">
                <div className="card">
                  <div className="img-sec">
                    <img
                      src="../../clean-cooking.png"
                      alt="Live Project Card"
                    />
                  </div>
                  <div className="card-content">
                    <h4 className="h2">Clean Cooking</h4>
                    <p className="b1">
                      Improving lives with clean cooking solutions that cut
                      carbon emissions, reduce health risks, and protect the
                      environment.
                    </p>
                    <a href="javascript:void(0)">Read More</a>
                  </div>
                </div>
                <div className="card">
                  <div className="img-sec">
                    <img
                      src="../../solar-lightning.png"
                      alt="Live Project Card"
                    />
                  </div>
                  <div className="card-content">
                    <h4 className="h2">Solar Lighting</h4>
                    <p className="b1">
                      Providing solar-powered lighting to underserved areas,
                      reducing fossil fuel dependency and improving quality of
                      life.
                    </p>
                    <a href="javascript:void(0)">Read More</a>
                  </div>
                </div>
                <div className="card">
                  <div className="img-sec">
                    <img
                      src="../../waste-management.png"
                      alt="Live Project Card"
                    />
                  </div>
                  <div className="card-content">
                    <h4 className="h2">Waste Management</h4>
                    <p className="b1">
                      Turning waste into opportunities with strategies that
                      lower emissions, improve hygiene, and drive circular
                      economies.
                    </p>
                    <a href="javascript:void(0)">Read More</a>
                  </div>
                </div>
                <div className="card">
                  <div className="img-sec">
                    <img
                      src="../../renewable-energy.png"
                      alt="Live Project Card"
                    />
                  </div>
                  <div className="card-content">
                    <h4 className="h2">Renewable Energy</h4>
                    <p className="b1">
                      Innovating energy systems with renewable solutions that
                      lower emissions and foster a transition to cleaner power.
                    </p>
                    <a href="javascript:void(0)">Read More</a>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="right-section" data-aos="fade-up">
          <div className="side-banner">
            <div className="img">
              <img src="../../re-side-banner.png" alt="Live Project Card" />
            </div>
            <p className="s1">
              "True sustainability is about partnership—our renewable energy
              projects connect innovation with inclusiveness, delivering cleaner
              energy for a brighter tomorrow."
            </p>
          </div>
          <div className="other-card">
            <div className="img">
              <img src="../../re-wm-banner.png" alt="Live Project Card" />
            </div>
            <div className="other-card-content">
              <h4 className="d2">Waste Management</h4>
              <p className="s2">
                Driving impactful waste solutions that reduce emissions, promote
                sustainability, and transform waste into valuable resources.
                Creating a future where humanity and nature thrive in harmony.
              </p>
              <a href="javascript:void(0)">Read More</a>
            </div>
          </div>
        </div>
      </div>

      <div className="impact" data-aos="fade-up">
        <h4 className="d1" style={{ textAlign: "center" }}>
          Impact
        </h4>
        <p className="s2" style={{ textAlign: "center" }}>
          Our renewable energy projects go beyond reducing emissions—they
          revolutionize energy access while driving sustainable transformation
          for communities and the environment. By integrating advanced
          technology with grassroots initiatives, we create inclusive solutions
          that deliver long-term benefits and align with global sustainability
          goals.
        </p>
        <div className="content-impact">
          <div className="content-wrapper">
            <div className="content-card">
              <h4 className="h1">Problem around the category</h4>
              <p className="s2">
                Conventional energy systems rely on non-renewable resources,
                causing environmental harm and limiting equitable access to
                clean, affordable energy. Additionally, inadequate innovation
                and inclusiveness in project designs hinder their scalability,
                reducing their ability to drive impactful, long-term results.
              </p>
            </div>
            <div className="content-card">
              <h4 className="h1">Our Approach</h4>
              <p className="s2">
                We overcome these challenges by combining cutting-edge renewable
                technologies with strategies that empower local communities. By
                aligning our projects with both environmental and economic
                goals, we create renewable energy systems that are inclusive,
                sustainable, and adaptable to global best practices.
              </p>
            </div>
            <div className="content-card">
              <h4 className="h1">Our Solution</h4>
              <p className="s2">
                SocioEdge delivers innovative renewable energy systems that
                include solar, wind, and hybrid technologies tailored for
                diverse needs. By leveraging community-driven models and robust
                tracking systems, we ensure every project creates measurable,
                long-lasting benefits for both people and the planet.
              </p>
            </div>
          </div>
          <div className="img-wrapper">
            <img src="../../re-impact-img.png" alt="Live Project Card" />
          </div>
        </div>
      </div>
      <ContactUsStrip />
    </CarbonOffsetStyle>
  );
};

export default RenewableEnergy;
