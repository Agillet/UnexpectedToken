import React, { useState, useEffect } from 'react'
import { useSpring, animated, config } from 'react-spring'

function Letter({ letter, index, delay = 0, extraClass = "" }) {
  const [visible, set] = useState(false);
  const [hover, setHover] = useState(false);

  const props = useSpring({
    transform:
      visible ?
        hover ? 'scaleX(1.5)' : 'scale(1)'
        : 'scale(0)',
    from: { transform: 'scale(0)' },
    config: { ...config.wobbly },
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      set(true);
    }, index * 50 + delay);
    return () => clearTimeout(timer);
  }, [delay, index, visible]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHover(false);
    }, 200);
    return () => clearTimeout(timer);
  }, [hover]);



  // if (visible) {
  return (
    <animated.div
      style={{ ...props, }}
      className={`letter ${extraClass}`}
      onMouseEnter={() => { setHover(true); }}
    >
      {letter}
    </animated.div>)
}
export default Letter
