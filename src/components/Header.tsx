import Logo from '../../public/images/spina-logo.svg';
import { useEffect, useState } from 'react';
import { motion, useViewportScroll, useTransform } from "framer-motion";
import Menu from './Menu';
import Link from 'next/link'
export default function Header({menuConfig}) {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const [scaleState, setScaleState] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const closeMenu = () => setShowMenu(false);
  useEffect(() => {
    scale.onChange(v => {
      setScaleState(v);
    })
  }, [scale])

  return (
    <motion.div className={`header ${scaleState ? 'scrolled' : ''}`}>
      <div className="logo">
        <Link href="/">
          <a aria-label="Navigate home">
            <Logo />
          </a>
        </Link>
      </div>
      <button
      onClick={() => setShowMenu(!showMenu)}
      className={`menu-button ${showMenu && 'menu-open'}`} 
      aria-label="menu">
        <i></i>
        <i></i>
        <i></i>
      </button>
      <Menu show={showMenu} menuConfig={menuConfig} closeMenu={closeMenu} />
    </motion.div>
  )
}