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
import HeroBanner from "../components/HeroBanner";
import Header from '../components/Header';
const myLoader = ({ src, width, quality }) => {
  return `https://inspiring-lovelace-3e5b25.netlify.app/.netlify/functions/next_image${src}/${width}/${quality || 75}`
}
const components = {
  HeroBanner,
};

const Page = ({slug, title, sections}) => {
  
  const renderSections = () => {
    sections.map(section => {
      const Component = components[section.type];
      return (
        <Component {...section} />
      )
    })
  }
  // console.log('source', source);
  // const content = hydrate(source);
  return (
    <div>
      <Header />
      <main>
        {renderSections}
      </main>
    </div>
)};

const slugToPostContent = (postContents => {
  let hash = {}
  postContents.forEach(it => hash[it.slug] = it)
  return hash;
})(fetchPageContent());

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = fetchPageContent().map(it => "/" + it.slug);
  console.log(paths);
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


  // const mdxSource = await renderToString(content, { scope: data });

  return {
    props: {
      slug: data.slug,
      title: data.title,
      sections: data.sections,
    },
  };
};

export default Page;