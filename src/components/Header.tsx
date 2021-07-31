import Logo from '../../public/images/spina-logo.svg';
import { useEffect, useState } from 'react';
import { motion, useViewportScroll, useTransform } from "framer-motion";
export default function Header() {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const [scaleState, setScaleState] = useState(0);
  useEffect(() => {
    scale.onChange(v => {
      console.log(v);
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
    </motion.div>
  )
}