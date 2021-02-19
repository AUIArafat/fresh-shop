import AboutUs from "../../components/about-us";
import TitleBox from "../../components/title-box";

import about_img from "../../assets/images/about-img.jpg"
import TeamMembers from "../../components/team-members";

function AboutUsPages() {
  return (
    <div>
      <TitleBox title="About Us"/>
      <div className="about-box-main">
        <div className="container">
          <AboutUs imgSrc={about_img}/>
          <TeamMembers/>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPages;
