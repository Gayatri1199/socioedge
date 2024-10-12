import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const OurProjectsStyle = styled.div`
  padding: 0px 16px;
  @media screen and (min-width: 1260px) {
    padding: 0px;
  }
  h2 {
    text-align: center;
    margin-bottom: 16px;
  }
  p {
    text-align: center;
  }
  .project-container {
    margin: auto;
    margin-top: 48px;

    display: flex;

    flex-wrap: wrap;
    max-width: 1304px;
    width: 100%;
    @media screen and (min-width: 1260px) {
      gap: 56px;
    }
  }
`;

const OurProjects = () => {
  return (
    <OurProjectsStyle>
      <h2 className="d1">Our Project Stand Out</h2>
      <p className="s1">
        Showcasing innovative solutions, our projects set new benchmarks in
        sustainability, impact, and long-term value creation.
      </p>
      <div className="project-container">
        <ProjectCard
          heading="Quality credits"
          content='Recognizing excellence in sustainability, quality credits incentivize responsible practices and drive better outcomes across industries. As Henry Ford said, "Quality means doing it right when no one is looking."'
        />
        <ProjectCard
          heading="High SDGs"
          content="Initiatives that align with high Sustainable Development Goals (SDGs) emphasize global well-being and balance, aiming to leave no one behind, much like the UN's 2030 Agenda for Sustainable Development."
        />
        <ProjectCard
          heading="Data-driven"
          content={`Informed by precise data, decisions are sharper and more efficient, echoing the sentiment, "Without data, you're just another person with an opinion" — W. Edwards Deming.`}
        />
        <ProjectCard
          heading="Long-term impact"
          content='Focusing on enduring solutions, long-term impact strategies build sustainable futures that benefit generations to come, following the ethos of "Think big, start small, but most of all, start."'
        />
        <ProjectCard
          heading="Capacity building"
          content={`Empowering individuals and institutions, capacity building strengthens the ability to address complex challenges effectively, embodying Nelson Mandela's belief that "Education is the most powerful weapon which you can use to change the world.`}
        />
      </div>
    </OurProjectsStyle>
  );
};

export default OurProjects;
