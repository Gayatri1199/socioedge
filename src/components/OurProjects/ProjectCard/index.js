import React from "react";
import styled from "styled-components";

const ProjectCardStyle = styled.div`
  max-width: 345px;
  width: 100%;
  padding-left: 52px;
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
      top: 25px;
    }
  }
`;
const ProjectCard = () => {
  return (
    <ProjectCardStyle>
      <h4 className="h1">Quality credits</h4>
      <p className="b1">
        Recognizing excellence in sustainability, quality credits incentivize
        responsible practices and drive better outcomes across industries. As
        Henry Ford said, "Quality means doing it right when no one is looking."
      </p>
    </ProjectCardStyle>
  );
};

export default ProjectCard;
