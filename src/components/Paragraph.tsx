import hydrate from "next-mdx-remote/hydrate";

export default function Paragraph({ content }) {
  const parsedContent = hydrate(content);
  return (
    <section className="paragraph">
      <div className="content">
        {parsedContent}
      </div>
    </section>
  );
}
