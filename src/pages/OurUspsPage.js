import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";

const OurUspsPageStyle = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  .cards-sec {
    margin-top: 104px;
    .card {
      background: #f2f5f8;
      align-items: center;
      margin-top: 56px;
      padding: 0px 16px;
      @media screen and (min-width: 768px) {
        display: flex;
      }
      @media screen and (max-width: 767px) {
        img {
          width: 100%;
        }
      }
      .content {
        padding: 24px;
        background: #f2f5f8;
        @media screen and (max-width: 767px) {
          padding: 16px 0px;
        }
      }
    }
  }
`;

const OurUspsPage = () => {
  return (
    <OurUspsPageStyle>
      <Banner page="ourusps" />
      <div className="cards-sec">
        <div className="card">
          <div className="img-sec">
            <img src="../../usp-1.svg" alt="Services" />
          </div>
          <div className="content">
            <h2 className="h1">Quality Assurance</h2>
            <span className="s1">RELIABILITY</span>
            <p className="s2">
              At Socioedge, quality is at the heart of our projects. We ensure
              reliable, efficient, and impactful solutions tailored to community
              needs. By maintaining rigorous standards and adopting
              result-driven approaches, we deliver measurable outcomes that
              inspire trust and foster long-term change across diverse regions.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h2 className="h1">Impact Driven</h2>
            <span className="s1">DESIGN THINKING</span>
            <p className="s2">
              We prioritize sustainable impact through innovative solutions
              rooted in design thinking. Our projects address real-world
              challenges while empowering communities to thrive. By
              understanding local contexts and tailoring interventions, we
              create scalable models that drive meaningful progress, improve
              livelihoods, and strengthen resilience against social and
              environmental challenges.
            </p>
          </div>
          <div className="img-sec">
            <img src="../../usp-2.svg" alt="Services" />
          </div>
        </div>
        <div className="card">
          <div className="img-sec">
            <img src="../../usp-3.svg" alt="Services" />
          </div>
          <div className="content">
            <h2 className="h1">Result Oriented</h2>
            <span className="s1">INTEGRITY</span>
            <p className="s2">
              Integrity drives our result-oriented approach. Socioedge focuses
              on measurable outcomes, ensuring every project delivers tangible
              benefits. By combining strategic planning, efficient execution,
              and continuous monitoring, we create initiatives that exceed
              expectations, positively transforming communities while fostering
              accountability, transparency, and long-term value.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h2 className="h1">Business Process</h2>
            <span className="s1">INNOVATION</span>
            <p className="s2">
              Innovation defines our business processes. Socioedge seamlessly
              integrates expertise, data-driven strategies, and sectoral
              insights to design solutions that are scalable and efficient. By
              prioritizing process excellence and adaptability, we ensure
              communities receive sustainable benefits, building a foundation
              for self-reliance and growth.
            </p>
          </div>
          <div className="img-sec">
            <img src="../../usp-4.svg" alt="Services" />
          </div>
        </div>
        <div className="card">
          <div className="img-sec">
            <img src="../../usp-5.svg" alt="Services" />
          </div>
          <div className="content">
            <h2 className="h1">Scalability</h2>
            <span className="s1">STRONG PIPELINE</span>
            <p className="s2">
              Our solutions are designed for scalability, ensuring sustained
              growth and impact across diverse geographies. Socioedge’s strong
              operational pipelines and innovative models allow projects to
              expand seamlessly while maintaining quality. This ensures that
              every intervention can be replicated, driving collective progress
              and addressing challenges at scale.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h2 className="h1">Transparency</h2>
            <span className="s1">BUSINESS EXCELLENCE</span>
            <p className="s2">
              Transparency is fundamental to our operations. Socioedge ensures
              clear communication, accountability, and audit-ready processes at
              every stage. By fostering trust and maintaining rigorous
              standards, we deliver projects with measurable outcomes while
              aligning with the highest levels of business excellence and
              stakeholder expectations.
            </p>
          </div>
          <div className="img-sec">
            <img src="../../usp-6.svg" alt="Services" />
          </div>
        </div>
      </div>
    </OurUspsPageStyle>
  );
};

export default OurUspsPage;
