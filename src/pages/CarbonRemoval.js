import React from "react";
import styled from "styled-components";
import ContactUsStrip from "../components/ContactUsStrip";

const CarbonRemovalStyle = styled.div`
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

const CarbonRemoval = () => {
  return (
    <CarbonRemovalStyle>
      <div className="banner">
        <h2 className="d1">Carbon Removal</h2>
        <p className="h1">
          Simplifying climate action with inclusiveness and transparency.
          Tackling environmental and community challenges through carbon
          financing, impactful programs, and consultancy services.
        </p>
      </div>
      <img
        src="../../carbon-removal-banner.png"
        alt="Live Project Card"
        className="banner-img"
        data-aos="fade-up"
      />
      <div className="content" data-aos="fade-up">
        <div className="left-section">
          <div className="content-wrapper">
            <h3 className="d2">What is Carbon Removal Project?</h3>
            <p className="s2">
              Carbon removal projects are designed to combat climate change by
              capturing and reducing greenhouse gas emissions from the
              atmosphere. At SocioEdge, we specialize in implementing projects
              that integrate sustainability with community development. By
              focusing on inclusiveness and practical solutions, we bring
              environmental and social benefits together.
            </p>

            <h3 className="d2">How it can help you from net zero journey?</h3>
            <p className="s2">
              Achieving net zero requires a strategic approach tailored to your
              unique challenges. At SocioEdge, we bring decades of expertise to
              help businesses navigate this complex yet crucial transition. From
              designing carbon removal projects to implementing CSR initiatives,
              we align environmental objectives with social impact goals.
            </p>
            <p className="s2">
              Our proven methodologies ensure that your organization is equipped
              with:
            </p>
            <ul className="s2">
              <li>
                <span>Robust Audit-Ready Processes:</span>By streamlining data
                integrity and transparency, we create systems that are not only
                compliant but also reliable for long-term sustainability
                reporting.
              </li>

              <li>
                <span>Community-Centric Solutions:</span> Our team works
                directly with local communities in remote and underserved areas,
                ensuring that their needs and knowledge are incorporated into
                the projects.
              </li>

              <li>
                <span>Tailored Impact Frameworks:</span> Every solution is
                customized to suit your organization's goals, ensuring
                measurable results in both environmental and community domains.
              </li>
            </ul>

            <img
              src="../../carbon-removal-2.png"
              alt="Live Project Card"
              className="banner-img"
              data-aos="fade-up"
            />

            <p className="s2" data-aos="fade-up">
              By partnering with us, you're not just reducing emissions; you're
              building a legacy of inclusiveness, accountability, and meaningful
              change. Whether you’re at the start of your journey or advancing
              toward ambitious targets, we offer the expertise and tools to help
              you succeed.
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
                    <img src="../../biochar.png" alt="Live Project Card" />
                  </div>
                  <div className="card-content">
                    <h4 className="h2">Biochar</h4>
                    <p className="b1">
                      A sustainable solution that sequesters carbon and enhances
                      soil health while supporting rural livelihoods.
                    </p>
                    <a href="/carbonRemovalProjects#Biochar">Read More</a>
                  </div>
                </div>
                <div className="card">
                  <div className="img-sec">
                    <img
                      src="../../afforestation.png"
                      alt="Live Project Card"
                    />
                  </div>
                  <div className="card-content">
                    <h4 className="h2">Afforestation</h4>
                    <p className="b1">
                      Transforming barren lands into lush forests to capture
                      carbon, restore ecosystems, and create green jobs.
                    </p>
                    <a href="/carbonRemovalProjects#Afforestation">Read More</a>
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
                src="../../take-care-earth-carbon-removal.png"
                alt="Live Project Card"
              />
            </div>
            <p className="s1">
              "True climate action transcends numbers—it’s about creating a
              ripple effect of positive change for both the environment and the
              communities that depend on it."
            </p>
          </div>
          <div className="other-card">
            <div className="img">
              <img
                src="../../carbon-offset-carbon-removal.png"
                alt="Live Project Card"
              />
            </div>
            <div className="other-card-content">
              <h4 className="d2">Carbon Offset</h4>
              <p className="s2">
                Reducing emissions while fostering sustainability, driving
                innovative solutions, and creating a balanced relationship
                between humanity and nature.
              </p>
              <a href="/carbonOffsetProjects">Read More</a>
            </div>
          </div>
        </div>
      </div>

      <div className="impact" data-aos="fade-up">
        <h4 className="d1" style={{ textAlign: "center" }}>
          Impact
        </h4>
        <p className="s2" style={{ textAlign: "center" }}>
          We deliver actionable solutions that create audit-ready processes and
          preserve data integrity. Our approach ensures that every project makes
          a tangible difference, driving both environmental and community
          development goals.
        </p>
        <div className="content-impact">
          <div className="content-wrapper">
            <div className="content-card">
              <h4 className="h1">Problem around the category</h4>
              <p className="s2">
                Traditional climate initiatives often fail to incorporate
                inclusive practices, resulting in limited community engagement
                and suboptimal outcomes. Without transparency and localized
                involvement, such efforts risk missing the mark in delivering
                long-term, scalable impact.
              </p>
            </div>
            <div className="content-card">
              <h4 className="h1">Our Approach</h4>
              <p className="s2">
                We address these challenges by designing innovative frameworks
                that prioritize inclusiveness and collaboration. By actively
                engaging stakeholders at every level—from grassroots communities
                to corporate partners—we create solutions that are sustainable,
                equitable, and aligned with global best practices.
              </p>
            </div>
            <div className="content-card">
              <h4 className="h1">Our Solution</h4>
              <p className="s2">
                To bridge the gap between intention and implementation, we
                leverage a blend of community-driven models and advanced
                technologies. This enables us to develop robust mechanisms for
                monitoring, reporting, and continuously improving the impact of
                our projects.
              </p>
            </div>
          </div>
          <div className="img-wrapper">
            <img
              src="../../carbon-removal-impact.png"
              alt="Live Project Card"
            />
          </div>
        </div>
      </div>
      <ContactUsStrip />
    </CarbonRemovalStyle>
  );
};

export default CarbonRemoval;
