import React from "react";
import styled from "styled-components";

const MileStoneStyle = styled.div`
  padding: 104px 0px;
  h3 {
    text-align: center;
    margin-bottom: 32px;
  }
`;
const MileStone = () => {
  return (
    <MileStoneStyle>
      <h3 className="d1">Milestones</h3>
      <div className="milestone-sec"></div>
    </MileStoneStyle>
  );
};

export default MileStone;
