import React, { useEffect, useState } from 'react'
import Letter from '../components/Letter';

function AboutMeText({ title }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 1500);
  }, []);

  return (
    <article className="about-me">
      <h2 className="title">
        <div className="title-line">
          {
            [...title].map((letter, index) => <Letter letter={letter} index={index} delay={500} />)
          }
        </div>
      </h2>
      <div className={`about-me-text ${visible && 'visible'}`}>
        <p>Je suis un <span className="highlight">développeur front-end</span> basé à Metz.</p>
        <p>J'aime construire des applications&nbsp;
        <span className="highlight">fluides</span>,&nbsp;
        <span className="highlight">dynamiques</span> et&nbsp;
        <span className="highlight">innovantes</span>.
        </p>
        <p>
          <span className="highlight">Indépendance</span> et&nbsp;
      <span className="highlight">attention aux détails</span>&nbsp;
      me caracterisent tant professionellement que personnellement.
        Je suis intérréssé par tout ce qui touche au developpement front, pour travailler sur des projets&nbsp;
        <span className="highlight">ambitieux</span> et dans un esprit&nbsp;
        <span className="highlight">positif</span>.
  </p>
        <div className="link-resume">
          <p>Vous voulez en savoir plus?</p>
          <a
            rel="noreferrer"
            target="_blank"
            title="mon CV"
            href="https://drive.google.com/file/d/1GarR6ueu6Ogck5HQWMjwL5NWMXippQWA/view?usp=sharing"
          >
            Jetez un oeil à mon CV !
      </a>
        </div>
      </div>
    </article>
  )
}

export default AboutMeText
