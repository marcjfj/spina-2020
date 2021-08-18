import Image from 'next/image'
import Logo from '../../../public/images/spina-logo.svg'

export default function HomeHero({image, logo, topText, bottomText}) {
  return (
    <div className="home-hero"> 
      <Image src={image} layout="fill" alt="" />
      <div className="scrim"></div>
      <h1 className="top-text">{topText}</h1>
      <Logo className="logo" />
      <h2 className="bottom-text">{bottomText}</h2>
    </div>
  );
}