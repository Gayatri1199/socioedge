import React, { useEffect } from "react";
import styled from "styled-components";
import OurTeamBanner from "../components/OurTeamBanner";
import TeamBlock from "../components/TeamBlock";
import AOS from "aos";
import "aos/dist/aos.css";
const OurTeamBannerStyle = styled.div`
  max-width: 1440px;
  width: 100%;
  overflow: hidden;
  margin: auto;

  @media screen and (min-width: 1260px) {
    padding: 0px;
  }
  .team-block-container {
    margin-top: 104px;
  }
`;
const OurTeam = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <OurTeamBannerStyle>
      <OurTeamBanner />
      <div className="team-block-container">
        <TeamBlock
          animation="right"
          name="Gaurav Gaur"
          role="FOUNDER & CEO"
          desc={[
            "Gaurav is a business and sustainability professional with over 14 years of work experience in both corporate and social sectors. He has an intense understanding of the social, environmental, and business aspects of the development sector. He has worked with prestigious clients and corporate groups on business and CSR assignments. He has travelled all over India during his time spent in the corporate and community spheres. His expertise in combining business strategy with CSR/social development has resulted in highly impactful and durable programs.",
            "He has designed, developed, and executed various Carbon offset, Leadership and CSR projects in various parts of India. He is a keen observer of community dynamics essential for the success of a social and environmental project. He is a GRI-certified individual on sustainability reporting. He has worked as a business consultant to MSME clients, offering services on business expansion, working capital and inventory management, and corporate training programs.",
            "He is a mountaineer and loves to spend time in the Himalayas. He is a creative person, fond of creating digital content, writing blogs, and drawing charcoal and digital paintings.",
          ]}
        />
        <TeamBlock
          animation="left"
          name="Dr. Jude P"
          role="CHIEF CARBON OFFICER"
          desc={[
            "An alumnus of the University of Oxford, Cambridge, and the London School of Economics, Dr. Jude has extensive experience in carbon markets and community projects worldwide. He plays a crucial role in advancing the team’s carbon portfolio.",
          ]}
        />
        <TeamBlock
          animation="right"
          name="Pradeep Gaur"
          role="CHIEF CARBON OFFICER"
          desc={[
            "Pradeep Gaur is a public policy veteran with 44 years of work experience in soil and water conservation, rural development, Panchayat Raj, MNREGA, and IRGY (U). He has successfully led various social and environmental projects for the Government of Rajasthan. His astute knowledge of sustainable farming, soil preservation, biogas, water conservation, and public infrastructure sets the direction for the group. He has a profound understanding of the community dynamics of rural India. He is a soil conservation engineer and an environmental development practitioner. During his decades-long career, he has led various projects on renewable energy, reforestation, community-owned biogas plants, dam construction, women empowerment, and skill development. His professional ethics serve as guiding principles for the team.",
            "He loves to spend time in nature for wildlife protection. He has deep knowledge of culture, history, and ancient architecture.",
          ]}
        />
        <TeamBlock
          animation="left"
          name="Abhishek Sharma"
          role="PARTNER - RENEWABLES"
          desc={[
            "As a seasoned corporate leader, he firmly believes in nature’s inherent solutions to the challenges we face, advocating for sustainable living practices. With a formidable track record in driving renewable energy community projects, he brings a wealth of experience across diverse fields such as renewable energy and hydroponics technology. His collaborative approach has enabled him to cultivate strong partnerships with policymakers, facilitating the conception and execution of transformative initiatives across various regions.",
            "Guiding businesses into pioneering realms like solar water pumping solutions, he has played a pivotal role in reducing carbon footprints by revolutionizing traditional energy reliance. His strength lies in meticulously analyzing social demographics to tailor solutions that enhance the lives of end-users, seamlessly integrating technological advancements with community needs.",
            "Beyond his professional endeavors, he is an enthusiastic explorer of local cultures and cuisines, continuously broadening his perspective through extensive travels.",
          ]}
        />
      </div>
    </OurTeamBannerStyle>
  );
};

export default OurTeam;
