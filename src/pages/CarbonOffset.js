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

const CarbonOffset = () => {
  return (
    <CarbonOffsetStyle>
      <div className="banner">
        <h2 className="d1">Carbon Offset</h2>
        <p className="h1">
          Reducing emissions while fostering sustainability, driving innovative
          solutions, and creating a balanced relationship between humanity and
          nature.
        </p>
      </div>
      <img
        src="../../carbon-offset-banner.png"
        alt="Live Project Card"
        className="banner-img"
        data-aos="fade-up"
      />
      <div className="content" data-aos="fade-up">
        <div className="left-section">
          <div className="content-wrapper">
            <h3 className="d2">What is Carbon Offset Project?</h3>
            <p className="s2">
              Carbon offset projects mitigate greenhouse gas emissions, aligning
              environmental sustainability with societal progress. At SocioEdge,
              we deliver impactful programs combining cutting-edge technologies
              with inclusiveness, creating meaningful contributions to a
              healthier planet and stronger communities for generations to come.
            </p>

            <p className="s2">
              Carbon offset projects are vital tools in combating climate change
              by reducing greenhouse gas emissions through sustainable practices
              and forward-thinking technologies. At SocioEdge, we craft
              initiatives that not only support environmental goals but also
              uplift underserved communities. Whether through reforestation,
              clean energy, or innovative waste management, we design projects
              that generate measurable benefits for ecosystems and societies
              alike.
            </p>

            <h3 className="d2">How it can help you from net zero journey?</h3>
            <p className="s2">
              Reaching net zero requires a collaborative and tailored approach
              that aligns your environmental, operational, and community goals.
              At SocioEdge, we specialize in creating innovative frameworks that
              guide organizations through every step of the journey. With us,
              you’ll:
            </p>

            <ul className="s2">
              <li>
                <span>Build Audit-Ready Systems:</span>Develop efficient,
                transparent reporting systems for measurable and long-lasting
                sustainability outcomes.
              </li>

              <li>
                <span>Engage Local Communities:</span> Collaborate with local
                stakeholders to implement impactful solutions in underserved
                regions, ensuring inclusiveness.
              </li>

              <li>
                <span>Create Tailored Frameworks:</span> Design comprehensive
                initiatives that align with your organization’s goals and create
                measurable success metrics.
              </li>
            </ul>

            <img
              src="../../carbon-offset-banner-2.png"
              alt="Live Project Card"
              className="banner-img"
              data-aos="fade-up"
            />

            <p className="s2" data-aos="fade-up">
              Choosing us means reducing your emissions while creating a legacy
              of inclusivity, transparency, and meaningful change for all.
            </p>

            <div className="our-project" data-aos="fade-up">
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
                    <a href="/carbonOffsetProjects#Afforestation">Read More</a>
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
            </div>
          </div>
        </div>
        <div className="right-section" data-aos="fade-up">
          <div className="side-banner">
            <div className="img">
              <img
                src="../../carbon-offset-right-sec-img.png"
                alt="Live Project Card"
              />
            </div>
            <p className="s1">
              “True sustainability is about partnership—our carbon offset
              projects unite technology and people to create a greener future
              for generations.”
            </p>
          </div>
          <div className="other-card">
            <div className="img">
              <img
                src="../../carbon-offset-carbon-removal-page.png"
                alt="Live Project Card"
              />
            </div>
            <div className="other-card-content">
              <h4 className="d2">Carbon Removal</h4>
              <p className="s2">
                Simplifying climate action with inclusiveness and transparency.
                Tackling environmental and community challenges through carbon
                financing, impactful programs, and consultancy services.
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
          Our carbon offset projects are designed to deliver much more than
          emissions reduction. They drive systemic change by creating inclusive
          frameworks, empowering communities, and fostering long-term
          sustainability. By combining cutting-edge technology with grassroots
          involvement, our solutions generate tangible, measurable benefits that
          extend far beyond the environmental scope.
        </p>
        <div className="content-impact">
          <div className="content-wrapper">
            <div className="content-card">
              <h4 className="h1">Problem around the category</h4>
              <p className="s2">
                Traditional carbon offset programs often lack the transparency
                and inclusiveness needed to scale effectively. Limited local
                engagement and accountability frequently hinder their impact and
                growth potential.
              </p>
            </div>
            <div className="content-card">
              <h4 className="h1">Our Approach</h4>
              <p className="s2">
                We tackle these challenges by implementing inclusive strategies
                that involve local communities and foster active participation
                at every stage. This approach ensures that our initiatives are
                both sustainable and impactful, aligning with global best
                practices for long-term success.
              </p>
            </div>
            <div className="content-card">
              <h4 className="h1">Our Solution</h4>
              <p className="s2">
                By combining advanced technologies with locally driven models,
                we create reliable systems for progress tracking and reporting.
                These systems ensure our projects deliver measurable results
                that benefit the planet, local communities, and global climate
                goals.
              </p>
            </div>
          </div>
          <div className="img-wrapper">
            <img
              src="../../carbon-offset-impact-section.png"
              alt="Live Project Card"
            />
          </div>
        </div>
      </div>
      <ContactUsStrip />
    </CarbonOffsetStyle>
  );
};

export default CarbonOffset;
