import { GetStaticProps, GetStaticPaths } from "next";
import renderToString from "next-mdx-remote/render-to-string";
import matter from "gray-matter";
import { fetchPageContent } from "../lib/pages";
import fs from "fs";

import HeroBanner from "../components/blocks/HeroBanner";
import Paragraph from "../components/blocks/Paragraph";
import Downloads from "../components/blocks/Downloads";
import ContentImage from "../components/blocks/ContentImage";
import SecondaryImage from "../components/blocks/SecondaryImage";
import Calendar from "../components/blocks/Calendar";
import Map from "../components/blocks/Map";
import Footer from "../components/Footer";

import Header from "../components/Header";
import config from "../lib/config";

const components = {
  HeroBanner,
  Paragraph,
  Downloads,
  ContentImage,
  SecondaryImage,
  Calendar,
  Map,
};

const Page = ({ slug, title, sections, config, menuConfig }) => {
  // console.log(sections);
  const renderSections = () => {
    return sections.map((section, i) => {
      const Component = components[section.type];
      return <Component {...section} key={i} />;
    });
  };
  return (
    <div>
      <Header menuConfig={menuConfig} />
      <main>{renderSections()}</main>
      <Footer phone={config.phone} />
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

  // page data
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
      parseObj[key] = val;
    }
    return parseObj;
  };
  const mdxSections = (await Promise.all(
    data.sections ? data.sections.map(async (section) => await parseMDX(section)) : []
  )) as any;
  // console.log(mdxSections);


  // calendar data
  const calendarSectionIndex = mdxSections.findIndex(
    (sec) => sec.type === "Calendar"
  );

  if (calendarSectionIndex !== -1) {
    const calendarFile = fs.readFileSync("content/calendar.json", "utf8");
    mdxSections[calendarSectionIndex].days = JSON.parse(calendarFile).days || [];
  }
  // const mdxSource = await renderToString(content, { scope: data });
  const config = fs.readFileSync("config.json", "utf8");
  // Menu data
  const menuFile = fs.readFileSync("content/menu.json", "utf8");
  const menuConfig = JSON.parse(menuFile);
  // console.log(fetchPageContent());
  const fullMenuConfig = menuConfig.pages.map(menuPage => {
    return fetchPageContent().find(({slug}) => slug === menuPage.page);
  })

  console.log(fullMenuConfig);
  return {
    props: {
      slug: data.slug,
      title: data.title,
      sections: mdxSections,
      config: JSON.parse(config),
      menuConfig: fullMenuConfig,
    },
  };
};

export default Page;
