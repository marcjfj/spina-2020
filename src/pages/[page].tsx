import { GetStaticProps, GetStaticPaths } from "next";
import renderToString from "next-mdx-remote/render-to-string";
import { MdxRemote } from "next-mdx-remote/types";
import hydrate from "next-mdx-remote/hydrate";
import matter from "gray-matter";
import { fetchPageContent } from "../lib/pages";
import fs from "fs";
import yaml from "js-yaml";
import { parseISO } from "date-fns";
import PostLayout from "../components/PostLayout";

import HeroBanner from "../components/blocks/HeroBanner";
import Paragraph from "../components/blocks/Paragraph";
import Downloads from "../components/blocks/Downloads";
import ContentImage from "../components/blocks/ContentImage";
import SecondaryImage from "../components/blocks/SecondaryImage";
import Calendar from "../components/blocks/Calendar";
import Header from "../components/Header";

const components = {
  HeroBanner,
  Paragraph,
  Downloads,
  ContentImage,
  SecondaryImage,
};

const Page = ({ slug, title, sections }) => {
  console.log(sections);
  const renderSections = () => {
    return sections.map((section, i) => {
      const Component = components[section.type];
      return <Component {...section} key={i} />;
    });
  };
  return (
    <div>
      <Header />
      <main>{renderSections()}</main>
    </div>
  );
};

const slugToPostContent = ((postContents) => {
  let hash = {};
  postContents.forEach((it) => (hash[it.slug] = it));
  return hash;
})(fetchPageContent());

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = fetchPageContent().map((it) => "/" + it.slug);
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params.page as string;
  const source = fs.readFileSync(slugToPostContent[slug].fullPath, "utf8");
  const { data } = matter(source);
  // console.log(data);
  const parseMDX = async (section) => {
    const parseObj = {};
    for (const key of Object.keys(section)) {
      let val;
      console.log(section[key]);
      if (key === "content") {
        val = await renderToString(section[key]);
      } else {
        val = section[key];
      }
      console.log(val);
      parseObj[key] = val;
    }
    return parseObj;
  };
  const mdxSections = await Promise.all(
    data.sections.map(async (section) => await parseMDX(section))
  );
  console.log(mdxSections);
  // const mdxSource = await renderToString(content, { scope: data });

  return {
    props: {
      slug: data.slug,
      title: data.title,
      sections: mdxSections,
    },
  };
};

export default Page;
