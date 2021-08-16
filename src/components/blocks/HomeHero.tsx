import Image from 'next/image'

export default function HomeHero({image, headline}) {
  return (
    <div className="home-hero"> 
      <Image src={image} layout="fill" />
      <div className="scrim"></div>
      <h1 className="headline">{headline}</h1>
    </div>
  );
}