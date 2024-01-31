import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Add the event listener when the component mounts
    window.addEventListener('mousemove', updateMousePosition);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <motion.div
      className="custom-cursor"
      animate={{ x: position.x, y: position.y }}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      {/* Your custom cursor content goes here */}
    </motion.div>
  );
};

export default CustomCursor;