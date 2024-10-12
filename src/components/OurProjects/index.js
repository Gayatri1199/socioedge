import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const OurProjectsStyle = styled.div`
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
    gap: 56px;

    flex-wrap: wrap;
    max-width: 1304px;
    width: 100%;
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
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </OurProjectsStyle>
  );
};

export default OurProjects;
