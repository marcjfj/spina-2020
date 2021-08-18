import Image from 'next/image'

export default function HeroBanner({image, headline}) {
  return (
    <div className="hero"> 
      <Image src={image} layout="fill" alt="" />
      <div className="scrim"></div>
      <h1 className="headline">{headline}</h1>
    </div>
  );
}