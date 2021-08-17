import Image from "next/image";
import hydrate from "next-mdx-remote/hydrate";

export default function ContentImage({ title, image, content, layout }) {
  const parsedContent = hydrate(content);
  return (
    <section className={`content-image ${layout}`}>
      <div className="content">
        <h3 className="title">{title}</h3>
        {parsedContent}
      </div>
      <div className="image-wrapper">
        <Image src={image} layout="fill" objectFit="cover" className="image" />
      </div>
    </section>
  );
}
