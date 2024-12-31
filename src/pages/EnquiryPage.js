import React from "react";
import styled from "styled-components";
import ContactCard from "../components/ContactCard";
import ContentAccordion from "../components/ContentAccordion";
import GetinTouch from "../components/GetinTouch";

const EnquiryPageStyle = styled.div`
  max-width: 1440px;
  margin: auto;
  .banner {
    padding: 64px;
    display: flex;
    gap: 24px;
    // background: url(../../Contact-Us-Banner.jpg);
    background-size: cover;
    padding: 64px 32px;
    flex-direction: column-reverse;
    @media screen and (min-width: 1260px) {
      flex-direction: row;
    }

    .image-sec {
      max-width: 868px;
      width: 100%;
      position: relative;
      p {
        color: #fff;
        position: absolute;
        bottom: 70px;
        left: 50%;
        width: 100%;
        transform: translateX(-50%);
        text-align: center;
      }
      img {
        width: 100%;
        height: 414px;
        @media screen and (min-width: 768px) {
          height: 100%;
        }
      }
    }
  }
  .cards-container {
    display: flex;
    gap: 32px;
    margin-top: 48px;
    flex-wrap: wrap;
  }

  .faq {
    margin-top: 64px;
    padding: 0px 16px;
    h3 {
      text-align: center;
      margin-bottom: 32px;
    }
  }

  .form-container {
    padding: 24px;

    width: 100%;
    background: #f2f5f8;
    @media screen and (min-width: 1260px) {
      max-width: 484px;
    }
    h1 {
      text-align: center;
    }
    p {
      text-align: center;
    }
    form {
      padding: 24px;
      background: #ffffff;
      border: 1px solid #b1a9ad;
      box-shadow: 0px 4px 4px 0px #00000040;
      border-radius: 10px;
      margin-top: 24px;
      label {
        display: block;
      }

      button {
        width: 100%;
        padding: 12px;
        color: #fff;
        border-radius: 10px;
        background: #151314;
        cursor: pointer;
      }
      input,
      textarea {
        display: block;
        border: 1px solid #b1a9ad;
        width: 100%;
        padding: 12px 16px;
        border-radius: 10px;
        margin-bottom: 24px;
        &:focus {
          border: 1px solid #b1a9ad;
          outline: none;
        }
      }
    }
  }
`;
const EnquiryPage = () => {
  function Submit(e) {
    const FormElement = document.querySelector("form");
    e.preventDefault();
    alert("Your Enquiry is with us now.");
    const formData = new FormData(FormElement);
    fetch(
      "https://script.google.com/macros/s/AKfycbw9gmlfSJWhZ9zQBxJFp61hsKBAqgE1NleHzEtdrjC8kEsLlfiGuQ-AR3YtxoUlQN-x/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  }

  const accordionItems = [
    {
      title: "What are Climate Projects?",
      content: [
        {
          type: "paragraph",
          text: (
            <p className="b1">
              <span>Climate projects</span> are initiatives or activities
              designed to address climate change by reducing greenhouse gas
              (GHG) emissions, enhancing carbon sequestration, or increasing
              resilience to climate impacts. These projects aim to mitigate
              climate change and support adaptation in line with global goals
              like the Paris Agreement.
            </p>
          ),
        },
      ],
    },
    {
      title: "How do they help in Net Zero journey? ",
      content: [
        {
          type: "paragraph",
          text: (
            <>
              <p>
                Climate projects play a{" "}
                <span>central role in the net-zero journey,</span>
                enabling businesses, governments, and communities to reduce
                greenhouse gas (GHG) emissions and achieve balance between
                emissions produced and removed. Here is how they do it.{" "}
              </p>
              <div className="content-block">
                <div className="content">
                  <h2 className="sub-heading">2.1 Reducing GHG Emissions</h2>
                  <ul>
                    <li>
                      Climate projects directly mitigate emissions from sectors
                      like energy, industry, transport, and agriculture
                    </li>
                    <li>
                      Example: Switching to renewable energy sources (solar,
                      wind) reduces emissions from fossil fuels.
                    </li>
                  </ul>
                </div>
                <div className="content">
                  <h2 className="sub-heading">2.2 Supporting Carbon Removal</h2>
                  <ul>
                    <li>
                      Projects like afforestation, reforestation, and soil
                      carbon enhancement remove CO₂ from the atmosphere.
                    </li>
                    <li>
                      Technologies such as direct air capture and biochar
                      production complement natural solutions.
                    </li>
                  </ul>
                </div>
                <div className="content">
                  <h2 className="sub-heading">
                    2.3 Offsetting Residual Emissions
                  </h2>
                  <ul>
                    <li>
                      For emissions that cannot be eliminated (e.g., in
                      hard-to-abate sectors like aviation or cement), carbon
                      offset projects (e.g., afforestation, biochar) enable
                      companies to balance their footprint by investing in
                      equivalent reductions or removals elsewhere.
                    </li>
                  </ul>
                </div>
                <div className="content">
                  <h2 className="sub-heading">
                    2.4 Advancing Social and Economic Development
                  </h2>
                  <ul>
                    <li>
                      Climate projects, especially community-based ones, deliver
                      co-benefits like improved health, education, and economic
                      opportunities, aligning with Sustainable Development Goals
                      (SDGs).
                    </li>
                    <li>
                      Example: Improved cookstove projects reduce deforestation
                      and indoor air pollution, contributing to both carbon
                      savings and public health.
                    </li>
                  </ul>
                </div>
              </div>
            </>
          ),
        },
      ],
    },
    {
      title: "Who governs climate projects?",
      content: [
        {
          type: "paragraph",
          text: (
            <>
              <p>
                Climate projects are governed by a combination of{" "}
                <span>
                  international organizations, national governments,
                  certification standards, and market mechanisms.
                </span>{" "}
                These entities ensure that climate projects are credible,
                impactful, and aligned with global climate goals like the Paris
                Agreement.
              </p>
              <div className="content-block">
                <div className="content">
                  <h2 className="sub-heading">
                    3.1 International Frameworks and Agreements
                  </h2>
                  <p className="mid-point">
                    United Nations Framework Convention on Climate Change
                    (UNFCCC):
                  </p>
                  <ul>
                    <li>
                      Sets global climate action rules and frameworks, including
                      the Paris Agreement and the Kyoto Protocol.
                    </li>
                    <li>
                      Governs mechanisms like the Clean Development Mechanism
                      (CDM) and Article 6 of the Paris Agreement (for carbon
                      markets)
                    </li>
                  </ul>
                  <p className="mid-point">Paris Agreement (2015):</p>
                  <ul>
                    <li>
                      Aims to limit global warming to below 2°C, ideally 1.5°C.
                    </li>
                    <li>
                      Supports international collaboration on mitigation,
                      adaptation, and finance for climate projects.{" "}
                    </li>
                    <li>
                      Includes Article 6, which establishes international carbon
                      markets and cooperative approaches.
                    </li>
                  </ul>
                </div>
                <div className="content">
                  <h2 className="sub-heading">3.2 Certification Standards</h2>
                  <p>
                    Certification standards govern the validation, monitoring,
                    and verification of climate projects to ensure credibility
                    and impact. Examples include:{" "}
                  </p>
                  <p className="mid-point">Gold Standard (GS):</p>
                  <ul>
                    <li>
                      Focuses on high-integrity carbon projects that contribute
                      to Sustainable Development Goals (SDGs).
                    </li>
                    <li>
                      Prioritizes community benefits and environmental
                      sustainability.
                    </li>
                  </ul>
                  <p className="mid-point">
                    Verified Carbon Standard (VCS) by Verra:
                  </p>
                  <ul>
                    <li>
                      A widely used standard for voluntary carbon markets.
                    </li>
                    <li>
                      Covers a variety of project types, including renewable
                      energy, afforestation, and REDD+ (Reducing Emissions from
                      Deforestation and Forest Degradation).{" "}
                    </li>
                  </ul>
                  <p className="mid-point">
                    Clean Development Mechanism (CDM):
                  </p>
                  <ul>
                    <li>
                      Operated under the UNFCCC to allow projects in developing
                      countries to earn Certified Emission Reductions (CERs).{" "}
                    </li>
                  </ul>
                </div>
                <div className="content">
                  <h2 className="sub-heading">3.3 Market Mechanisms</h2>
                  <p className="mid-point">Compliance Markets:</p>
                  <ul>
                    <li>
                      OGoverned by national or regional authorities (e.g., EU
                      ETS, California Cap-and-Trade Program).
                    </li>
                    <li>
                      Companies meet legally mandated emission reduction targets
                      by funding climate projects.
                    </li>
                  </ul>
                  <p className="mid-point">Voluntary Carbon Markets:</p>
                  <ul>
                    <li>Overseen by independent certification standards.</li>
                    <li>
                      Companies and individuals voluntarily offset emissions by
                      purchasing carbon credits.{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </>
          ),
        },
      ],
    },
    {
      title: "What is the role of Socioedge?",
      content: [
        {
          type: "paragraph",
          text: (
            <>
              <p>
                <span>Socioedge</span> is a carbon project developer and
                sustainability consultancy dedicated to simplifying climate
                action. We specialize in designing and implementing high-impact
                carbon credit projects, such as improved cookstoves, biochar,
                afforestation, and community renewable energy, with a strong
                focus on delivering social, environmental, and economic
                co-benefits. Our expertise includes project registration under
                leading certification standards like Gold Standard, helping
                organizations meet net-zero targets while creating meaningful
                change in remote and underserved communities.
              </p>
            </>
          ),
        },
      ],
    },
    {
      title: "What is the timeline for a climate project?",
      content: [
        {
          type: "paragraph",
          text: (
            <>
              <p>
                The timeline for a climate project from execution to
                registration and eventual carbon credit issuance typically spans
                <span>2 to 5 years,</span> depending on the project's type,
                complexity, and the certification standard.
              </p>
            </>
          ),
        },
      ],
    },
    {
      title: "What are impact projects?",
      content: [
        {
          type: "paragraph",
          text: (
            <>
              <p>
                <span>Impact projects</span> are initiatives specifically
                designed to create significant and measurable positive changes
                in social, environmental, and economic dimensions. These
                projects focus on addressing pressing global challenges, such as
                poverty, education, climate change, health, and biodiversity
                loss, while often aligning with frameworks like the United
                Nations Sustainable Development Goals (SDGs).
              </p>
            </>
          ),
        },
      ],
    },
    {
      title: "How are Socioedge’s impact projects different?",
      content: [
        {
          type: "paragraph",
          text: (
            <>
              <p>
                Socioedge's carbon and impact projects are closely intertwined,
                but each has distinct goals and unique differentiators that set
                them apart. Here’s how they differ:
              </p>
              <div className="content-block">
                <div className="content">
                  <h2 className="sub-heading">7.1 Core Objective</h2>

                  <ul>
                    <li>
                      Carbon Projects: Primarily focused on reducing, avoiding,
                      or removing greenhouse gas (GHG) emissions to combat
                      climate change. The main output is the generation of
                      high-quality carbon credits.
                    </li>
                    <li>
                      Impact Projects: Aim to deliver holistic social, economic,
                      and environmental benefits. While they may involve
                      emission reductions, the emphasis is on broader outcomes
                      like community development, education, and health.
                    </li>
                  </ul>
                </div>
                <div className="content">
                  <h2 className="sub-heading">7.2 Primary Drivers</h2>

                  <ul>
                    <li>
                      Carbon Projects: Driven by global climate goals, net-zero
                      commitments, and compliance or voluntary carbon markets.
                      The focus is on measurable, verifiable emission reductions
                      or removals.
                    </li>
                    <li>
                      Impact Projects: Motivated by the need to address societal
                      challenges, improve livelihoods, and contribute to the UN
                      Sustainable Development Goals (SDGs).
                    </li>
                  </ul>
                </div>
                <div className="content">
                  <h2 className="sub-heading">7.3 Key Metrics </h2>

                  <ul>
                    <li>
                      Carbon Projects: Measured in terms of emissions reductions
                      or removals, quantified in metric tons of CO₂ equivalent
                      (tCO₂e).{" "}
                      <p>
                        Example: Reduced emissions from improved cookstoves or
                        avoided deforestation.
                      </p>
                    </li>
                    <li>
                      Impact Projects: Assessed using broader indicators,
                      including health improvements, economic upliftment,
                      educational outcomes, and biodiversity enhancement.
                      <p>
                        Example: Number of households benefiting from clean
                        cooking solutions or increased income for farmers from
                        agroforestry.
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="content">
                  <h2 className="sub-heading">7.4 Scope of Benefits</h2>

                  <ul>
                    <li>
                      Carbon Projects: Focus on climate benefits with additional
                      social and environmental co-benefits where applicable.
                      <p>
                        Example: A solar energy project reducing emissions while
                        providing electricity access.
                      </p>
                    </li>
                    <li>
                      Impact Projects: Designed to maximize multi-dimensional
                      benefits, with or without carbon credit generation
                      <p>
                        Example: A vocational training program for women that
                        indirectly contributes to sustainability by empowering
                        communities.
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="content">
                  <h2 className="sub-heading">
                    7.5 Integration with Standards
                  </h2>

                  <ul>
                    <li>
                      Carbon Projects: Strictly adhere to carbon certification
                      standards like Gold Standard, Verra (VCS), or CDM to
                      ensure credible emission reductions.
                    </li>
                    <li>
                      Impact Projects: May align with SDG frameworks, Social
                      Return on Investment (SROI), or IRIS+ for tracking broader
                      development outcomes. Certification is not always
                      mandatory.
                    </li>
                  </ul>
                </div>

                <div className="content">
                  <h2 className="sub-heading">7.6 Target Stakeholders</h2>

                  <ul>
                    <li>
                      Carbon Projects: Often targeted at businesses,
                      governments, and investors looking to offset emissions or
                      meet compliance obligations.
                    </li>
                    <li>
                      Impact Projects: Designed for communities, NGOs, CSR
                      initiatives, and organizations prioritizing social and
                      environmental equity.
                    </li>
                  </ul>
                </div>

                <div className="content">
                  <h2 className="sub-heading">7.7 Financial Model</h2>

                  <ul>
                    <li>
                      Carbon Projects: Generate revenue through the sale of
                      carbon credits in voluntary or compliance markets, making
                      them financially self-sustaining.
                    </li>
                    <li>
                      Impact Projects: Rely on diverse funding sources like CSR
                      contributions, grants, and philanthropic donations, in
                      addition to potential income from associated benefits.
                    </li>
                  </ul>
                </div>

                <div className="content">
                  <h2 className="sub-heading">
                    7.8 How Socioedge Combines the Two
                  </h2>
                  <p>
                    Socioedge uniquely integrates carbon projects with impactful
                    design to ensure:
                  </p>
                  <ul>
                    <li>
                      Dual Outcomes: Projects generate high-quality carbon
                      credits while creating measurable social and environmental
                      benefits.
                      <p>
                        Example: Improved cookstove projects reduce emissions,
                        improve health, and empower women through fuel savings.{" "}
                      </p>
                    </li>
                    <li>
                      Community-Centric Implementation: Both project types
                      prioritize local participation and benefit-sharing,
                      ensuring long-term sustainability.
                    </li>
                    <li>
                      Scalability and Innovation: Socioedge applies best
                      practices across industries to enhance both the climate
                      and social impact of projects.{" "}
                    </li>
                  </ul>
                </div>

                <div className="content">
                  <h2 className="sub-heading">7.9 Examples from Socioedge</h2>

                  <ul>
                    <li>
                      Carbon Project: A biochar initiative that sequesters
                      carbon and improves soil health, certified under Verra.
                    </li>
                    <li>
                      Impact Project: A community renewable energy project
                      providing electricity access while enhancing education and
                      productivity.
                    </li>
                    <li>
                      Hybrid Approach: An afforestation project in tribal areas
                      that generates carbon credits, restores biodiversity, and
                      creates sustainable livelihoods.
                    </li>
                  </ul>
                </div>
                <p>
                  Socioedge's projects are different because they merge
                  technical expertise in carbon finance with a deep commitment
                  to community-driven impact, ensuring that every initiative
                  contributes to a sustainable and thriving future.
                </p>
              </div>
            </>
          ),
        },
      ],
    },
  ];

  return (
    <EnquiryPageStyle>
      <div className="banner">
        <div className="image-sec">
          <img src="../../enq-form.jpeg" alt="Enquiry" />
          <p className="s1">
            "Climate action is not an option; it's a responsibility to secure
            our planet's future."
          </p>
        </div>
        <div className="form-container">
          <h1 className="d1">Let’s get connected!</h1>
          <p className="s1">You can reach us anytime!</p>
          <form onSubmit={(e) => Submit(e)}>
            <label className="b1">Full Name</label>
            <input
              type="text"
              className="b1"
              placeholder="Enter your Name"
              name="Name"
            />
            <label className="b1">Email Address</label>
            <input
              type="email"
              className="b1"
              placeholder="Enter your Email Address"
              name="Email"
            />
            <label className="b1">Contact Number</label>
            <input
              type="number"
              className="b1"
              placeholder="Enter your mobile number"
              name="Phone"
            />
            <label className="b1">Message</label>
            <textarea
              type="text"
              className="b1"
              placeholder="Enter your message"
              rows={5}
              name="Message"
            />
            <button className="s1" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="faq">
        <h3 className="d2">Frequently Asked Questions</h3>
        <ContentAccordion items={accordionItems} />
      </div>
      <GetinTouch />
    </EnquiryPageStyle>
  );
};

export default EnquiryPage;
