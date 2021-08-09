import Image from "next/image";
import hydrate from "next-mdx-remote/hydrate";

export default function SecondaryImage({ bullets, image }) {
  return (
    <section className="secondary-image">
      <div className="bullets">
        <ul className="bullet-list">
          {[bullets].map((i) => (
            <li>{i.item}</li>
          ))}
        </ul>
      </div>
      <div className="image-wrapper">
        <Image src={image} layout="fill" objectFit="cover" className="image" />
      </div>
    </section>
  );
}
