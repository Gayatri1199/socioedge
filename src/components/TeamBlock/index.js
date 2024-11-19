import React from "react";
import styled from "styled-components";

const TeamBLockStyle = styled.div`
  padding: 32px 0px;
  margin: 0px 16px;
  background: #ffffff;
  box-shadow: 0px 0px 6px 0px #0000001a;
  border-radius: 8px;
  margin-bottom: 68px;
  position: relative;
  border: 1px solid #eeeeee;
  z-index: 2;
  box-shadow: 20px 20px 0px #edf8fc;

  .upper-section {
    display: flex;
    gap: 24px;

    flex-direction: column;
    @media screen and (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
    h3 {
      padding: 12px 32px;
      background: #4591c4;
      color: #fff;
      max-width: max-content;
    }
    h4 {
      color: #4591c4;
      padding: 12px 32px;
    }
  }

  .lower-sec {
    padding: 24px 32px;
    p {
      margin-bottom: 24px;
    }
  }
`;
const TeamBlock = ({ animation, name, role, desc }) => {
  return (
    <TeamBLockStyle data-aos={`fade-${animation}`} data-aos-delay="250">
      <div className="upper-section">
        <h3 className="h1">{name}</h3>
        <h4 className="s1">{role}</h4>
      </div>
      <div className="lower-sec">
        {desc?.map((val, index) => {
          return <p className="b1">{val}</p>;
        })}
      </div>
    </TeamBLockStyle>
  );
};

export default TeamBlock;
