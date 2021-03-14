/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import TagCanvas from '../lib/tagcanvas';
import Letter from './Letter';

function Skills() {

  const title = "À propos de moi";

  React.useEffect(() => {
    try {
      TagCanvas.Start('myCanvas', null, {
        maxSpeed: 0.03,
        minSpeed: 0.01,
        textColour: '#f4791f',
        outlineColour: '659999',
        freezeActive: true,
        shuffleTags: true,
        shape: 'sphere',
        wheelZoom: false,
        noSelect: true,
        textFont: null,
        freezeDecel: true,
        fadeIn: 3000,
        initial: [0.3, -0.1],
        depth: 1.1,
        weight: true,
      });
    } catch (e) {
      // something went wrong, hide the canvas container
      document.getElementById('myCanvasContainer').style.display = 'none';
    }
  }, []);
  return (
    <div className="page">
      <div className="skills-wrapper">
        <article className="about-me">
          <h2 className="title">
            <div className="title-line">
              {
                [...title].map((letter) => <Letter letter={letter} delay={1000} />)
              }
            </div>
          </h2>
          <p>Je suis un développeur front-end basé à Metz.</p>
          <p>J'aime construire des applications fluides, dynamiques et innovantes.</p>
          <p>
            Indépendance et attention aux détails me caracterisent tant professionellement que personnellement.
            Je suis intérréssé par tout ce qui touche au developpement front, pour travailler sur des projets ambitieux et dans un esprit positif.
        </p>
        </article>
        <div className="canvas-wrapper">
          <canvas width="500" height="500" id="myCanvas">
            <ul>
              <li><a>JavaScript</a></li>
              <li><a>TypeScript</a></li>
              <li><a>React</a></li>
              <li><a>React Native</a></li>
              <li><a>Redux</a></li>
              <li><a>Angular</a></li>
              <li><a>NPM</a></li>
              <li><a>Yarn</a></li>
              <li><a>Gulp</a></li>
              <li><a>Webpack</a></li>
              <li><a>GraphQL</a></li>
              <li><a>PWA</a></li>
              <li><a>Firebase</a></li>
              <li><a>jQuery</a></li>
              <li><a>ES5/ES6</a></li>
              <li><a>GIT</a></li>
              <li><a>HTML</a></li>
              <li><a>SASS</a></li>
              <li><a>CSS</a></li>
              <li><a>BEM</a></li>
              <li><a>REST</a></li>
            </ul>
          </canvas>
        </div>
      </div>
    </div>
  )
}

export default Skills
