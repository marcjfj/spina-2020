import { GetStaticProps, GetStaticPaths } from "next";
import renderToString from "next-mdx-remote/render-to-string";
import { MdxRemote } from "next-mdx-remote/types";
import hydrate from "next-mdx-remote/hydrate";
import matter from "gray-matter";
import { fetchPageContent } from "../lib/pages";
import fs from "fs";
import yaml from "js-yaml";
import { parseISO } from 'date-fns';
import PostLayout from "../components/PostLayout";
import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
  return `https://inspiring-lovelace-3e5b25.netlify.app/.netlify/functions/next_image${src}?w=${width}&q=${quality || 75}`
}

const Page = ({headline, source, hero_image}) => {
  const content = hydrate(source)
  console.log('img', hero_image);
  return (
    <div>
      <div className="hero"> 
      {/* <img className="heroImage" src={hero_image} /> */}
      <Image src={hero_image} loader={myLoader} layout="fill" />
      <div className="scrim"></div>
      <h1 className="headline">{headline}</h1>
      </div>
      <div className="contentWrapper">
        <div className="content">
          {content}
        </div>
      </div>
    </div>
)};

const slugToPostContent = (postContents => {
  let hash = {}
  postContents.forEach(it => hash[it.slug] = it)
  return hash;
})(fetchPageContent());

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = fetchPageContent().map(it => "/" + it.slug);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const slug = params.page as string;
  const source = fs.readFileSync(slugToPostContent[slug].fullPath, "utf8");
  const { content, data } = matter(source, {
    engines: { yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object }
  });


  const mdxSource = await renderToString(content, { scope: data });

  return {
    props: {
      headline: data.headline,
      hero_image: data.hero_image,
      slug: data.slug,
      source: mdxSource
    },
  };
};

export default Page;