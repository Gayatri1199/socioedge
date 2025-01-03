import React from "react";
import styled from "styled-components";

import HeroBanner from "../components/HeroBanner";

import ContactUsStrip from "../components/ContactUsStrip";

const CapacityBuildingProjectsStyle = styled.div`
  max-width: 1440px;
  margin: auto;
  .services-section {
    max-width: 382px;
    margin: auto;
    box-shadow: 0px 2px 4px 0px #0000001a;
    text-align: center;
    padding: 24px 40px;
    margin-top: -90px;
    z-index: 181;
    position: relative;
    background: #edf8fc;
    padding-bottom: 0px !important;
    @media screen and (min-width: 768px) {
      margin-top: -90px;
      padding: 40px;
      max-width: 650px;
    }
    @media screen and (min-width: 1260px) {
      max-width: 988px;
    }

    .redirection {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 40px;
    }

    a {
      font-family: Open Sans;
      font-size: 16px;
      font-weight: 700;
      line-height: 30px;
      text-align: center;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
      display: block;
      max-width: 227px;
      width: 100%;
      text-decoration: none;
      color: #161618;
      &::after {
        content: "";
        display: block;
        height: 3px;
        width: 60px;
        background: transparent;
        margin: 0 auto;
      }

      &:active,
      &:visited {
        color: #013e93;

        // border-bottom: 3px solid #013e93;
        &::after {
          opacity: 1;
        }
      }
    }
    h2 {
      margin-bottom: 24px;
    }
  }

  .blogs-section {
    padding: 0px 16px;
    padding-top: 104px;

    .main-heading {
      padding: 20px 24px;
      background: #f2f5f8;
      border-left: 8px solid #013e93;
    }

    p {
      margin-bottom: 24px;
    }

    .above-content {
      display: flex;
      gap: 24px;
      margin-top: 16px;
      flex-direction: column-reverse;
      @media screen and (min-width: 1260px) {
        flex-direction: row;
      }

      &.reverse {
        flex-direction: column-reverse;
        @media screen and (min-width: 1260px) {
          flex-direction: row-reverse;
        }
      }
      .image {
        @media screen and (min-width: 1260px) {
          max-width: 312px;
        }
        img {
          width: 100%;
          max-width: 100%;
          @media screen and (min-width: 1260px) {
            width: 312px;
            max-width: 312px;
            height: 312px;
          }
        }
      }
    }
  }

  .banner-content {
    display: none;
  }
`;

const CapacityBuildingProjects = () => {
  return (
    <CapacityBuildingProjectsStyle>
      <HeroBanner page="capacitybuildingprojects" />
      <div className="services-section">
        <h2 className="d1">Capacity Building Projects</h2>
        <p className="s1">
          We empower individuals and communities with skills, knowledge, and
          tools to drive sustainable development.
        </p>
        <div className="redirection">
          <a href="#Biochar">Entrepreneurial Skills</a>
          <a href="#Afforestation">Terra Leadership</a>
        </div>
      </div>
      <div className="blogs-section" id="Biochar">
        <div className="blog-card">
          <h2 className="h1 main-heading">Entrepreneurial Skills</h2>
          <div className="above-content">
            <div className="content">
              <p className="h2">
                Entrepreneurial skills are key to fostering economic
                independence and community growth. Our programs focus on
                equipping individuals with the skills to start and manage
                businesses effectively. By offering training in business
                planning, financial literacy, and market strategies, we help
                aspiring entrepreneurs build sustainable enterprises.
              </p>
              <p className="h2">
                We prioritize marginalized communities, particularly women and
                youth, enabling them to turn their ideas into viable businesses.
                This boosts income generation, creates jobs, and strengthens
                local economies.
              </p>
              <p className="h2">
                Through mentorship, access to resources, and hands-on learning,
                we cultivate entrepreneurial mindsets that drive innovation,
                self-reliance, and long-term economic resilience.
              </p>
            </div>
            <div className="image">
              <img
                src="../..//impact-projects/I_Banner_3_1.png"
                alt="Services"
              />
            </div>
          </div>
          <div className="lower-sec">
            <h2>Fostering Economic Empowerment</h2>
            <p className="h2">
              Entrepreneurial skills are a driving force behind economic
              empowerment and community development. At Socioedge, we design
              programs to equip individuals, particularly from underserved
              communities, with essential skills to launch and sustain
              businesses. These include business planning, budgeting, marketing
              strategies, and resource management to help entrepreneurs thrive
              in competitive markets.
            </p>
            <h2>Focus on Women and Youth</h2>
            <p className="h2">
              Women and youth often face barriers to entering entrepreneurial
              spaces due to limited access to education, funding, and
              opportunities. Our programs provide tailored training and
              mentorship to empower these groups. By fostering confidence and
              capability, we enable them to convert innovative ideas into
              profitable and sustainable businesses.
            </p>
            <h2>Skills for the Modern Economy</h2>
            <p className="h2">
              In today’s dynamic economy, entrepreneurship requires adaptability
              and innovation. We incorporate training in digital skills,
              e-commerce, and emerging market trends to help entrepreneurs stay
              ahead. By promoting modern business practices, we enable
              individuals to build scalable and future-ready enterprises.
            </p>
            <h2>Mentorship and Support</h2>
            <p className="h2">
              We connect aspiring entrepreneurs with industry leaders, mentors,
              and financial networks to provide ongoing guidance. This
              personalized support ensures they gain valuable insights and
              access to resources that are critical for growth. Through hands-on
              training and real-world exposure, we bridge gaps between vision
              and execution.
            </p>
            <h2>Measurable Impact</h2>
            <p className="h2">
              Our entrepreneurial programs not only uplift individuals but also
              create jobs, boost local economies, and foster community
              resilience. By promoting innovation and self-reliance, we empower
              communities to thrive, addressing economic and social challenges
              while driving long-term growth.
            </p>
          </div>
        </div>
      </div>

      <div className="blogs-section" id="Afforestation">
        <div className="blog-card">
          <h2 className="h1 main-heading">Terra Leadership</h2>
          <div className="above-content reverse">
            <div className="content">
              <p className="h2">
                Terra Leadership develops individuals to lead sustainable and
                impactful change in their communities. The program focuses on
                leadership training, environmental awareness, and project
                execution to address pressing challenges.
              </p>
              <p className="h2">
                By combining theoretical learning with practical experiences,
                participants are empowered to become change-makers in
                environmental sustainability and social development. Terra
                Leadership emphasizes collaboration, critical thinking, and
                strategic problem-solving to foster well-rounded leaders. Our
                approach nurtures leadership potential across diverse sectors,
                creating a network of individuals who can drive measurable and
                lasting solutions. These leaders bring vision, action, and
                purpose to shape a better, more sustainable future.
              </p>
            </div>
            <div className="image">
              <img
                src="../..//impact-projects/I_Banner_3_3.jpg"
                alt="Services"
              />
            </div>
          </div>
          <div className="lower-sec">
            <h2>Developing Future Leaders</h2>
            <p className="h2">
              The Terra Leadership program is designed to identify, nurture, and
              develop individuals who are passionate about driving sustainable
              change. Our comprehensive training focuses on leadership skills,
              environmental sustainability, and project execution, empowering
              participants to address real-world challenges with actionable
              solutions.
            </p>
            <h2>Leadership in Action</h2>
            <p className="h2">
              Terra Leadership emphasizes experiential learning by combining
              theoretical knowledge with hands-on experiences. Participants
              engage in community projects, environmental initiatives, and
              strategic decision-making exercises. This practical approach
              ensures that they develop critical problem-solving skills,
              communication, and the ability to lead teams effectively.
            </p>
            <h2>Environmental Sustainability Focus</h2>
            <p className="h2">
              The program integrates environmental awareness, teaching
              participants how to design and execute projects that address
              climate challenges. By fostering a deeper understanding of
              sustainable practices, we empower future leaders to take
              initiatives that protect the planet while benefiting local
              communities.
            </p>
            <h2>Building Collaborative Networks</h2>
            <p className="h2">
              Leadership is strengthened through collaboration. Terra Leadership
              encourages peer learning and teamwork, connecting participants
              with mentors, experts, and like-minded change-makers. This
              collaborative approach builds a global network of leaders
              committed to creating meaningful and measurable impact.
            </p>
            <h2>Long-Term Impact</h2>
            <p className="h2">
              The goal of Terra Leadership is to build leaders who are not only
              capable of driving projects but also inspiring change within their
              communities. By equipping participants with the tools, confidence,
              and vision needed to tackle challenges, we create a ripple effect
              of leadership, sustainability, and innovation that lasts for
              generations.
            </p>
          </div>
        </div>
      </div>

      <ContactUsStrip />
    </CapacityBuildingProjectsStyle>
  );
};

export default CapacityBuildingProjects;
