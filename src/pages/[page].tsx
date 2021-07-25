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

export default ({headline, content}) => (
    <div>
      <h1>{headline}</h1>
      <div>
        {content}
      </div>
    </div>
);

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
    console.log("params", params)
  const slug = params.page as string;
  console.log(slugToPostContent)
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
      content: mdxSource
    },
  };
};

