import React from 'react'
import AnimatedIcon from './AnimatedIcon'
import Envelope from './icons/Envelope'
import Github from './icons/Github'
import Linkedin from './icons/Linkedin'
import Phone from './icons/Phone'
import Twitter from './icons/Twitter'
import Letter from './Letter'

function Contact() {
  const title = "Prenons contact !"
  const findMe = "Retrouvez moi sur : ";

  return (
    <div className="page page-contact">
      <h2 className="title">
        <div className="title-line">
          {
            [...title].map((letter) => <Letter letter={letter} />)
          }
        </div>
      </h2>
      <div clasName="contact-form">
        <p className="contact-item">
          <Phone />
          <a href="tel:06.25.44.68.92" className="phone">06.25.44.68.92</a>
        </p>
        <p className="contact-item">
          <Envelope />
          <a href="mailto:agillet10@gmail.com" className="mail">agillet10@gmail.com</a>
        </p>
      </div>
      <div className="title">
        <div className="title-line">
          {
            [...findMe].map((letter) => <Letter letter={letter} />)
          }
        </div>
      </div>
      <div className="contact-item">
        <AnimatedIcon link="https://github.com/agillet" title="Github">
          <Github />
        </AnimatedIcon>
        <AnimatedIcon title="LinkedIn" href="www.linkedin.com/in/antoinegilletdev">
          <Linkedin />
        </AnimatedIcon>
        <AnimatedIcon title="Twitter" href="https://twitter.com/Agilleeeeet">
          <Twitter />
        </AnimatedIcon>
      </div>
    </div>
  )
}

export default Contact
