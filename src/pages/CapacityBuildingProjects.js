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
          <h2 className="h1 main-heading">Afforestation</h2>
          <div className="above-content reverse">
            <div className="content">
              <p className="h2">
                Afforestation is a powerful climate solution that restores
                ecosystems and mitigates carbon emissions. By planting trees in
                barren or degraded lands, afforestation enhances carbon
                sequestration, combating climate change effectively.
              </p>
              <p className="h2">
                Trees play a crucial role in improving air and water quality,
                stabilizing soil, and reducing desertification. Through
                afforestation, we promote environmental sustainability while
                addressing land degradation challenges. This effort also
                provides socio-economic benefits for local communities.
              </p>
              <p className="h2">
                Our afforestation projects are designed to maximize
                environmental and social impact. By engaging stakeholders, we
                develop sustainable forest solutions that drive climate action,
                protect ecosystems, and foster long-term resilience against
                global challenges.
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
            <h2>What is Afforestation?</h2>
            <p className="h2">
              Afforestation refers to the process of planting trees in barren or
              degraded lands where there was no previous forest cover. This
              intentional effort to create forests helps restore ecosystems,
              increase biodiversity, and combat the adverse effects of climate
              change. Afforestation is a proactive measure that supports both
              environmental conservation and community well-being.
            </p>
            <h2>Restoring Ecosystems and Biodiversity</h2>
            <p className="h2">
              Forests are vital for ecological balance. They provide habitats
              for countless species, conserve biodiversity, and maintain
              critical ecosystem services like clean air, water filtration, and
              soil stabilization. Afforestation helps reverse habitat loss and
              prevents desertification by stabilizing soils, reducing erosion,
              and enhancing water retention in arid regions. Healthy forests
              also act as carbon sinks, absorbing carbon dioxide from the
              atmosphere and reducing global greenhouse gas emissions. This
              makes afforestation one of the most effective tools in the fight
              against climate change.
            </p>
            <h2>Socio-Economic Benefits</h2>
            <p className="h2">
              Afforestation projects bring significant benefits to local
              communities. By creating green spaces, afforestation generates
              livelihoods through forestry-based employment, including planting,
              maintenance, and forest resource management. Communities benefit
              from increased income, improved agricultural productivity due to
              better soils, and enhanced access to forest resources like fruits,
              nuts, and medicinal plants. Afforestation also supports
              agroforestry systems, where trees and crops are cultivated
              together to promote sustainable land use. These systems improve
              food security, diversify income sources, and boost resilience
              against climate extremes.
            </p>
            <h2>Combating Climate Change</h2>
            <p className="h2">
              Forests are crucial allies in mitigating climate change. By
              sequestering carbon dioxide, afforestation offsets emissions from
              industrial activities and human development. Newly planted forests
              help cool the environment, regulate local weather patterns, and
              reduce the heat island effect in urban areas. Afforestation also
              contributes to achieving global sustainability goals, including
              combating land degradation (SDG 15), improving climate action (SDG
              13), and reducing poverty through sustainable forest management
              (SDG 1).
            </p>
            <h2>Our Approach</h2>
            <p className="h2">
              At SocioEdge, we implement afforestation projects designed for
              long-term environmental and social impact. Our solutions focus on
              planting native tree species, restoring degraded lands, and
              ensuring the sustainability of forests through community
              engagement and participation. By collaborating with local
              governments, communities, and organizations, we create
              afforestation programs that drive measurable outcomes—improving
              ecosystems, enhancing livelihoods, and supporting global carbon
              reduction goals.
            </p>
          </div>
        </div>
      </div>

      <ContactUsStrip />
    </CapacityBuildingProjectsStyle>
  );
};

export default CapacityBuildingProjects;
