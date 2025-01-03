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

const WasteManagement = () => {
  return (
    <CarbonOffsetStyle>
      <div className="banner">
        <h2 className="d1">Waste Management</h2>
        <p className="h1">
          Driving impactful waste solutions that reduce emissions, promote
          sustainability, and transform waste into valuable resources. Creating
          a future where humanity and nature thrive in harmony.
        </p>
      </div>
      <img
        src="../../waste-management-banner.png"
        alt="Live Project Card"
        className="banner-img"
        data-aos="fade-up"
      />
      <div className="content" data-aos="fade-up">
        <div className="left-section">
          <div className="content-wrapper">
            <h3 className="d2">What is Waste Management Project?</h3>
            <p className="s2">
              Waste management projects focus on reducing greenhouse gas
              emissions through innovative practices that transform waste into
              valuable resources.
            </p>

            <p className="s2">
              At SocioEdge, we deliver impactful programs combining cutting-edge
              technologies with inclusiveness, creating meaningful contributions
              to a healthier planet and stronger communities for generations to
              come. Our waste management initiatives are key to combating
              climate change, addressing greenhouse gas emissions through
              sustainable practices and innovative solutions. Whether through
              recycling, composting, or advanced technologies, we create
              projects that uplift communities while enhancing environmental
              health. These projects not only reduce emissions but also foster
              long-term ecological balance, empowering societies and ecosystems
              alike.
            </p>

            <h3 className="d2">How it can help you from net zero journey?</h3>
            <p className="s2">
              Achieving net zero demands a holistic and actionable waste
              management strategy. At SocioEdge, we work with organizations to
              implement forward-thinking solutions tailored to their unique
              environmental goals. Our process equips you with:
            </p>

            <ul className="s2">
              <li>
                <span>Efficient Waste Tracking Systems:</span> Ensuring accurate
                data for monitoring and reporting impact.
              </li>

              <li>
                <span>Community Engagement Programs:</span> Educating and
                empowering local communities to adopt sustainable waste
                practices.
              </li>

              <li>
                <span>Circular Economy Models:</span> ransforming waste into
                resources that contribute to economic growth while reducing
                environmental impact.
              </li>
            </ul>

            <img
              src="../../waste-management-banner-2.png"
              alt="Live Project Card"
              className="banner-img"
              data-aos="fade-up"
            />

            <p className="s2" data-aos="fade-up">
              Partnering with us doesn’t just help you reduce emissions; it
              redefines waste as an opportunity to create long-term
              environmental and economic value.
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
              <img src="../../wm-side-banner.png" alt="Live Project Card" />
            </div>
            <p className="s1">
              "Sustainability thrives through collaboration—our waste management
              projects seamlessly merge technology and human ingenuity to ensure
              a cleaner, greener legacy for future generations."
            </p>
          </div>
          <div className="other-card">
            <div className="img">
              <img
                src="../../wm-renewable-energy.png"
                alt="Live Project Card"
              />
            </div>
            <div className="other-card-content">
              <h4 className="d2">Renewable Energy</h4>
              <p className="s2">
                Empowering sustainable transformation through renewable energy
                projects that drive innovation, reduce emissions, and create
                harmony between human progress and environmental preservation.
              </p>
              <a href="/renewablenergy">Read More</a>
            </div>
          </div>
        </div>
      </div>

      <div className="impact" data-aos="fade-up">
        <h4 className="d1" style={{ textAlign: "center" }}>
          Impact
        </h4>
        <p className="s2" style={{ textAlign: "center" }}>
          Our waste management initiatives redefine sustainability by addressing
          global waste challenges with innovative solutions. Through
          community-driven models and advanced technologies, we create impactful
          systems that empower communities, reduce emissions, and promote a
          circular economy.
        </p>
        <div className="content-impact">
          <div className="content-wrapper">
            <div className="content-card">
              <h4 className="h1">Problem around the category</h4>
              <p className="s2">
                Traditional waste management practices often lead to
                environmental degradation due to a lack of innovation and
                inclusiveness, leaving vast potential untapped.
              </p>
            </div>
            <div className="content-card">
              <h4 className="h1">Our Approach</h4>
              <p className="s2">
                We tackle these challenges by designing solutions that
                prioritize inclusivity and grassroots collaboration, ensuring
                every stakeholder has a role in the process. By combining
                community-driven models with advanced technologies, we develop
                strategies that not only address environmental goals but also
                create opportunities for local engagement. This holistic
                approach aligns our waste management projects with global best
                practices while delivering measurable success for organizations
                and the environment.
              </p>
            </div>
            <div className="content-card">
              <h4 className="h1">Our Solution</h4>
              <p className="s2">
                By integrating grassroots involvement with cutting-edge systems,
                we offer transparent reporting, measurable progress, and
                enduring benefits for both the environment and society.
              </p>
            </div>
          </div>
          <div className="img-wrapper">
            <img src="../../wm-impact-projects.png" alt="Live Project Card" />
          </div>
        </div>
      </div>
      <ContactUsStrip />
    </CarbonOffsetStyle>
  );
};

export default WasteManagement;
