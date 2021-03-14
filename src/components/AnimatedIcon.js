import React, { useEffect, useState } from 'react'
import { config, useSpring, animated } from 'react-spring';

function AnimatedIcon({ children, link, title }) {
  const [hover, setHover] = useState(false);
  const animation = useSpring({
    transform: hover ? 'scaleX(1.1)' : 'scale(1)',
    from: { transform: 'scale(1)' },
    config: { ...config.wobbly },
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setHover(false);
    }, 200);
    return () => clearTimeout(timer);
  }, [hover]);


  return (
    <animated.a title={title} href={link} style={{ ...animation }} onMouseEnter={() => { setHover(true); }}>
      {children}
    </animated.a>
  )
}

export default AnimatedIcon
