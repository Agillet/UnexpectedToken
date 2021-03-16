import Letter from '../components/Letter';
import ProgressBar from '../components/ProgressBar';
import AboutMeText from '../blocks/AboutMeText';
import SkillsCanvas from '../blocks/SkillsCanvas';
import ToolsAndSkills from '../blocks/ToolsAndSkills';

function About() {

  const title = "À propos de moi";
  const title2 = "outils & compétences";

  return (
    <div className="page">
      <div className="skills-wrapper">
        <AboutMeText title={title} />
        <SkillsCanvas />
      </div>
      <ToolsAndSkills title={title2} />
    </div>
  )
}

export default About
