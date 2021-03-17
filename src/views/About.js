import AboutMeText from '../blocks/AboutMeText';
import SkillsCanvas from '../blocks/SkillsCanvas';

function About() {

  const title = "À propos de moi";

  return (
    <div className="page">
      <div className="skills-wrapper">
        <AboutMeText title={title} />
        <SkillsCanvas />
      </div>
    </div>
  )
}

export default About
