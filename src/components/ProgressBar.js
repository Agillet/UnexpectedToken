import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'

const ProgressBar = ({ bgcolor, completed, title, index, icon, isVisible }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => setProgress(completed), (index * 500) + 500);
    } else {
      setProgress(0);
    }
  }, [completed, index, isVisible]);

  return (
    <>
      <h3 className="progress-bar-title">
        <FontAwesomeIcon className="progress-bar-icon" icon={icon} color={bgcolor} />
        {title}
      </h3>
      <div className="progress-bar-container">
        <div
          className="progress-bar-filler"
          style={{
            width: `${progress}%`,
            backgroundColor: bgcolor,
          }}
        >
        </div>
      </div>
    </>
  );
};

export default ProgressBar
