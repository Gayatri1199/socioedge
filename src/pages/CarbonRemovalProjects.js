import React from "react";
import styled from "styled-components";

import HeroBanner from "../components/HeroBanner";

import ContactUsStrip from "../components/ContactUsStrip";

const CarbonRemovalProjectsStyle = styled.div`
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
          }
        }
      }
    }
  }

  .banner-content {
    display: none;
  }
`;

const CarbonRemovalProjects = () => {
  return (
    <CarbonRemovalProjectsStyle>
      <HeroBanner page="carbonremovalproject" />
      <div className="services-section">
        <h2 className="d1">Carbon Removal Projects</h2>
        <p className="s1">
          Our solutions foster impactful environmental change, addressing
          challenges while supporting global sustainability goals. 
        </p>
        <div className="redirection">
          <a href="#Biochar">Biochar</a>
          <a href="#Afforestation">Afforestation</a>
        </div>
      </div>
      <div className="blogs-section" id="Biochar">
        <div className="blog-card">
          <h2 className="h1 main-heading">Biochar</h2>
          <div className="above-content">
            <div className="content">
              <p className="h2">
                Biochar plays a significant role in carbon sequestration and
                soil health improvement. Produced through the pyrolysis of
                organic biomass, biochar locks carbon in a stable form,
                preventing its release into the atmosphere. This sustainable
                approach aids in reducing greenhouse gas emissions.
              </p>
              <p className="h2">
                In agriculture, biochar enhances soil fertility, moisture
                retention, and nutrient absorption. By revitalizing degraded
                soils, it promotes better crop yields while fostering
                sustainable farming practices. Biochar is a proven tool for
                enhancing environmental resilience and productivity.
              </p>
              <p className="h2">
                {" "}
                We implement biochar initiatives that benefit farmers,
                ecosystems, and the climate. Our comprehensive strategies ensure
                measurable results, empowering communities to contribute to
                global carbon reduction goals.
              </p>
            </div>
            <div className="image">
              <img src="../../Biochar-blog-img.png" alt="Biochar" />
            </div>
          </div>
          <div className="lower-sec">
            <h2>What is Biochar?</h2>
            <p className="h2">
              Biochar is a carbon-rich material produced through the pyrolysis
              of biomass—organic matter like agricultural residues, wood, or
              manure—at high temperatures in a low-oxygen environment. This
              process locks carbon in a stable form, preventing its release into
              the atmosphere. Biochar has been recognized as a powerful solution
              for carbon sequestration and improving soil health.
            </p>
            <h2>Environmental Benefits of Biochar</h2>
            <p className="h2">
              Biochar contributes significantly to climate change mitigation. By
              converting biomass into a stable carbon form, it reduces
              greenhouse gas emissions and locks carbon into the soil for
              hundreds of years. Additionally, the production of biochar
              generates renewable energy as a byproduct, reducing reliance on
              fossil fuels. This dual benefit—sequestering carbon and producing
              energy—makes biochar an ideal solution for sustainable
              development. Biochar also plays a vital role in restoring degraded
              ecosystems. It improves soil quality, aids reforestation efforts,
              and reduces nutrient runoff that can harm waterways. These
              attributes contribute to building climate-resilient landscapes.
            </p>
            <h2>Improving Soil Health and Agriculture</h2>
            <p className="h2">
              In agriculture, biochar enhances soil fertility by improving its
              structure, moisture retention, and nutrient-holding capacity.
              Farmers using biochar experience increased crop yields, especially
              in nutrient-poor or degraded soils. By enhancing soil aeration and
              microbial activity, biochar creates an ideal environment for plant
              growth. Biochar also reduces the need for synthetic fertilizers,
              which helps lower costs and environmental impacts. As a result, it
              serves as a valuable tool for smallholder farmers and large-scale
              agricultural enterprises alike, promoting food security and
              sustainable farming practices.
            </p>
            <h2>Driving Circular Economies</h2>
            <p className="h2">
              Biochar production supports the circular economy by repurposing
              waste biomass that would otherwise decompose and emit methane.
              Instead of discarding agricultural and forestry residues, they are
              transformed into biochar, closing waste loops and driving
              sustainable economic models.
            </p>
            <h2>Our Approach</h2>
            <p className="h2">
              At SocioEdge, we leverage biochar projects to deliver
              environmental and social impact. By working with local
              stakeholders, farmers, and communities, we develop solutions
              tailored to regional needs. Our approach ensures improved
              agricultural productivity, reduced carbon footprints, and
              strengthened community resilience.
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
                src="../..//action-project-page/afforestation.svg"
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
    </CarbonRemovalProjectsStyle>
  );
};

export default CarbonRemovalProjects;
