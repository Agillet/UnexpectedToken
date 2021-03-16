import Letter from '../components/Letter';
import ProgressBar from '../components/ProgressBar';
import AboutMeText from '../blocks/AboutMeText';
import SkillsCanvas from '../blocks/SkillsCanvas';
import ToolsAndSkills from '../blocks/ToolsAndSkills';

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
