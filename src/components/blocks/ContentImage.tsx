import Image from 'next/image';

export default function ContentImage({title, image, content}) {
  return (
    <section className="content-image">
      <div className="content">
        {content}
      </div>
      <div className="image-wrapper">
        <Image src={image} layout="fill" className="image" />
      </div>
    </section>
  )
}