import React from "react";
import styled from "styled-components";
import ContactUsStrip from "../components/ContactUsStrip";

const OurHistoryStyle = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0px 16px;
  @media screen and (min-width: 768px) {
    padding: 0px 32px;
  }

  .banner-img {
    margin-bottom: 56px;
    @media screen and (min-width: 768px) {
      margin-bottom: 80px;
    }
    img {
      width: 100%;
      height: 382px;
      object-fit: cover;
      @media screen and (min-width: 768px) {
        height: unset;
      }
    }
  }
  h1 {
    text-align: center;
    margin: 56px 0px;
  }
  .content {
    margin-bottom: 56px;
    padding: 0px 16px;
    @media screen and (min-width: 768px) {
      padding: 0px 36px;
    }
    h2 {
      margin-bottom: 24px;
      display: flex;

      gap: 16px;
      align-items: center;
      @media screen and (min-width: 768px) {
        white-space: nowrap;
        gap: 48px;
      }
    }
    span {
      display: inline-block;
      height: 2px;
      width: 100%;
      background: rgba(177, 169, 173, 1);
    }
  }
`;
const OurHistory = () => {
  return (
    <OurHistoryStyle>
      <h1 className="d1">Our History</h1>
      <div className="banner-img">
        <img src="../../OurHistory.png" alt="Banner" />
      </div>
      <div className="content" data-aos="fade-up ">
        <h2 className="d2">
          Foundation and Vision <span></span>
        </h2>
        <p className="s2">
          Socioedge was created to simplify climate action and address pressing
          community challenges. The organization builds on the extensive
          experience of its founding team, who have executed impactful projects
          in collaboration with renowned organizations such as the Eicher Group,
          HDFC Bank, Madhya Pradesh Tourism Board (MPTB), NABARD, ICAR, ACIAR,
          AON and GIZ.   
        </p>
      </div>
      <div className="content" data-aos="fade-up">
        <h2 className="d2">
          Tackling Challenges in Remote Regions <span></span>
        </h2>
        <p className="s2">
          Operating in many of India's most remote and challenging regions,
          including Zanskar, Arunachal Pradesh, and Meghalaya, the team focused
          on renewable energy access, skill development, and women's
          entrepreneurship. Many of these initiatives were implemented under
          extreme conditions, such as Ladakh's harsh winters, where temperatures
          dropped as low as -30°C. 
        </p>
      </div>
      <div className="content" data-aos="fade-up">
        <h2 className="d2">
          Guidance and Expertise <span></span>
        </h2>
        <p className="s2">
          Socioedge is guided by a team of advisors with decades of experience
          in rural development, renewable energy, public policy, soil and water
          conservation, and sustainable development. Their expertise has been
          critical in designing and executing projects under policies like
          MGNREGA, IRGY & PMAY, ensuring alignment with national frameworks to
          maximize community impact. Their knowledge in soil and water
          conservation further enables the organization to implement holistic
          environmental solutions that strengthen ecosystem resilience.  
        </p>
      </div>
      <div className="content" data-aos="fade-up">
        <h2 className="d2">
          Initiatives and Achievements <span></span>
        </h2>
        <p className="s2">
          The advisors' diverse expertise also supports the organization's
          efforts in promoting renewable energy technologies, biogas adoption,
          and integrated water resource management. These initiatives allow
          Socioedge to address climate challenges while delivering tangible
          benefits to rural communities. In its first year alone, Socioedge made
          a significant impact: positively affecting the lives of over 40,000
          individuals, offsetting more than 1 lakh tCO2e through successfully
          executed projects, and creating 50+ jobs in rural areas, with a
          dedicated focus on employability rather than just skill-building.  
        </p>
      </div>
      <div className="content" data-aos="fade-up">
        <h2 className="d2">
          Global Impact and Innovation <span></span>
        </h2>
        <p className="s2">
          The organization benefits from its global team, working across
          multiple continents, which brings diverse perspectives and ensures it
          can tackle challenges on a global scale. A key strength of Socioedge
          lies in its business process amalgamation, seamlessly integrating
          expertise across sectors to develop innovative and scalable models.
          The organization adopts a data-centric and result-driven approach,
          ensuring measurable impacts and continuous improvement. With strong
          partnerships, including those with Bajaj and various international
          organizations, Socioedge delivers high-SDG-impact projects that combat
          climate change while uplifting marginalized communities.
        </p>
      </div>

      <ContactUsStrip />
    </OurHistoryStyle>
  );
};

export default OurHistory;
