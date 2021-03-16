import React, { useState, useEffect } from 'react'
import Letter from '../components/Letter'
function Home() {
  const line1 = "Salut, ";
  const line2 = "moi c'est "
  const name = "Antoine. ";
  const line3 = "Je suis ";
  const job = "développeur front-end."

  const delayBetweenLine = 50;

  return (
    <div className="page home">
      <div id="title" className="title">
        <div className="title-line">
          {
            [...line1].map((letter, index) => (<Letter letter={letter} index={index} />))
          }
        </div>
        <div className="title-line">
          {
            [...line2].map((letter, index) => (
              <Letter
                letter={letter}
                index={index}
                delay={line1.length * 50}
              />
            ))
          }
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/antoinegilletdev/" className="name-container">
            {
              [...name].map((letter, index) => (
                <Letter
                  letter={letter}
                  index={index}
                  extraClass="name"
                  delay={(line1.length + line2.length) * 50}
                />
              ))
            }
          </a>
        </div>
        <div className="title-line">
          {
            [...line3].map((letter, index) => (
              <Letter
                letter={letter}
                index={index}
                delay={delayBetweenLine + (line1.length + line2.length + name.length) * 50}
              />
            ))
          }
          <a target="_blank" rel="noreferrer" href="https://github.com/Agillet" className="name-container">
            {
              [...job].map((letter, index) => (
                <Letter
                  letter={letter}
                  index={index}
                  extraClass="name"
                  delay={(line1.length + line2.length + name.length + line3.length) * 50} />
              ))
            }
          </a>
        </div>
      </div >
    </div>
  )
}



export default Home
