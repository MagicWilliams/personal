'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Layout(props) {
  const { view, flipView, isMobile } = props;
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  const [color, setColor] = useState('#00145c');
  const pathname = usePathname();

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: 'linear' }}
      className="Layout"
    >
      <Header color={color} />
      {props.children}
      <Footer
        page={
          props.page || (pathname === '/' ? 'index' : pathname.split('/')[1])
        }
        handleColorChange={setColor}
        view={view}
        flipView={flipView}
        isMobile={isMobile}
      />
    </motion.div>
  );
}
