import Logo from '../../public/images/spina-logo.svg';
import { useEffect, useState } from 'react';
import { motion, useViewportScroll, useTransform } from "framer-motion";
import Menu from './Menu';
export default function Header() {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const [scaleState, setScaleState] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    scale.onChange(v => {
      setScaleState(v);
    })
  }, [scale])
  return (
    <motion.div className={`header ${scaleState ? 'scrolled' : ''}`}>
      <div className="logo">
        <Logo />
      </div>
      <button className="contact-button">
        Contact Us
      </button>
      <button
      onClick={() => setShowMenu(!showMenu)}
      className={`menu-button ${showMenu && 'menu-open'}`} 
      aria-label="menu">
        <i></i>
        <i></i>
        <i></i>
      </button>
      <Menu show={showMenu} />
    </motion.div>
  )
}