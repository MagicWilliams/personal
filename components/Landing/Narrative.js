import React, { useState, useEffect, useRef } from 'react';
import styles from '../../styles/Landing.module.scss';

const Narrative = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  
  // Track cursor position for the floating visual
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleHover = (item) => {
    setHoveredItem(item);
  };

  const handleLeave = () => {
    setHoveredItem(null);
  };

  return (
    <>
      <div className={styles.narrative}>
        I'm <span className={styles.highlight}>David Latimore II</span>. <span className={styles.highlight}>I explore the hidden logic of everyday systems. </span>
        My practice blends <span className={styles.keyword}>creative technology</span> and <span className={styles.keyword}>critical theory</span> to build tools that help us see the world differently. 
        
        Currently, I'm developing <a href="#" onMouseEnter={() => handleHover('sunset')} onMouseLeave={handleLeave}>Sunset Index</a>, a speculative futures market built on top of LA street parking data, 
        and <a href="#" onMouseEnter={() => handleHover('wallart')} onMouseLeave={handleLeave}>Wall Art for the Crib</a>, an ambient light installation that turns software into atmosphere. 
        
        I work across <span className={styles.keyword}>React Native</span>, <span className={styles.keyword}>embedded hardware</span>, and <span className={styles.keyword}>civic data</span> to create interfaces that are as <span className={styles.keyword}>conceptual</span> as they are functional.
      </div>

      {/* Floating Visuals */}
      <div 
        className={`${styles.floatingVisual} ${hoveredItem === 'sunset' ? styles.active : ''}`}
        style={{ left: cursorPos.x, top: cursorPos.y }}
      >
        <div className={styles.sunsetPlaceholder}></div>
      </div>

      <div 
        className={`${styles.floatingVisual} ${hoveredItem === 'wallart' ? styles.active : ''}`}
        style={{ left: cursorPos.x, top: cursorPos.y }}
      >
        <div className={styles.wallartPlaceholder}></div>
      </div>
    </>
  );
};

export default Narrative;
