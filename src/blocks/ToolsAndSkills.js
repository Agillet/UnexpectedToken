import React, { useRef } from 'react'
import { faAngular, faCss3, faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import Letter from '../components/Letter'
import ProgressBar from '../components/ProgressBar'
import useOnScreen from '../hooks/useOnScreen';

function ToolsAndSkills({ title }) {
  const wrapperRef = useRef(null);
  const isVisible = useOnScreen(wrapperRef);

  return (
    <div ref={wrapperRef} className={`tools-wrapper ${isVisible ? 'visible' : ''}`}>
      <h2 className="title">
        <div className="title-line">
          {
            [...title].map((letter, index) => <Letter letter={letter} index={index} />)
          }
        </div>
      </h2>
      <ProgressBar
        bgcolor="#e66b19"
        title="HTML"
        icon={faHtml5}
        completed={75}
        index={1}
        isVisible={isVisible}
      />
      <ProgressBar
        bgcolor="#264DE4"
        title="CSS"
        icon={faCss3}
        completed={75}
        index={2}
        isVisible={isVisible}
      />
      <ProgressBar
        bgcolor="#ccbd49"
        title="JavaScript"
        icon={faJs}
        completed={80}
        index={3}
        isVisible={isVisible}
      />
      <ProgressBar
        bgcolor="#19c6e6"
        title="React"
        icon={faReact}
        completed={80}
        index={4}
        isVisible={isVisible}
      />
      <ProgressBar
        bgcolor="#D6002F"
        title="Angular"
        icon={faAngular}
        completed={50}
        index={5}
        isVisible={isVisible}
      />
      <ProgressBar
        bgcolor="#19c6e6"
        title="React Native"
        icon={faReact}
        completed={70}
        index={6}
        isVisible={isVisible}
      />
    </div>
  )
}

export default ToolsAndSkills
