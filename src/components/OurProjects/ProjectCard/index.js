import React from "react";
import styled from "styled-components";

const ProjectCardStyle = styled.div`
  width: 100%;
  padding-left: 52px;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    max-width: 345px;
  }
  p {
    text-align: left !important;
  }
  h4 {
    margin-bottom: 8px;
    position: relative;
    &::before {
      content: "";
      width: 40px;
      display: block;
      height: 2px;
      background: #013e93;
      position: absolute;
      left: -50px;
      top: 12px;
      @media screen and (min-width: 768px) {
        top: 25px;
      }
    }
  }
`;
const ProjectCard = ({ heading, content }) => {
  return (
    <ProjectCardStyle className="project-card">
      <h4 className="h1">{heading}</h4>
      <p className="b1">{content}</p>
    </ProjectCardStyle>
  );
};

export default ProjectCard;
