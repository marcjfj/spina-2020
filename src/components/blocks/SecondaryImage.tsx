import Image from "next/image";
import Pumpkin from "../../../public/images/pumpkin.svg";
export default function SecondaryImage({ bullets, image }) {
  return (
    <section className="secondary-image">
      <div className="image-wrapper">
        <Image src={image} layout="fill" objectFit="cover" className="image" alt="" />
      </div>
      <div className="bullets">
        <ul className="bullet-list">
          {bullets.map((i) => (
            <li>
              <Pumpkin className="pumpkinIcon" />
              <span>{i}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
