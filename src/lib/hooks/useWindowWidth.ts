import { useState, useEffect } from 'react';

export default function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    let animationFrame = 0;
    const handleResize = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        setWidth(window.innerWidth);
      });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return width;
}