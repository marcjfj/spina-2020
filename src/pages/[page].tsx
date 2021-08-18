import { GetStaticProps, GetStaticPaths } from "next";
import renderToString from "next-mdx-remote/render-to-string";
import matter from "gray-matter";
import { fetchPageContent } from "../lib/pages";
import fs from "fs";

import PageLayout from "../components/PageLayout";


const Page = (props) => {
  return (
    <div>
      <PageLayout {...props}></PageLayout>
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
  const parseMDX = async (section) => {
    const parseObj = {};
    for (const key of Object.keys(section)) {
      let val;
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
  const fullMenuConfig = menuConfig.pages.map(menuPage => {
    return fetchPageContent().find(({slug}) => slug === menuPage.page);
  })

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
