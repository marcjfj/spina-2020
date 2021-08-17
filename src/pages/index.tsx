import fs from 'fs';
import { GetStaticProps } from "next";
import PageLayout from './../components/PageLayout';
import { fetchPageContent } from '../lib/pages';
import renderToString from "next-mdx-remote/render-to-string";
import matter from "gray-matter";



export default function Index(props) {
  return (
    <div>
    <PageLayout {...props} />
  </div>
  );
}

const slugToPostContent = ((postContents) => {
  let hash = {};
  postContents.forEach((it) => (hash[it.slug] = it));
  return hash;
})(fetchPageContent());

export const getStaticProps: GetStaticProps = async () => {
  const siteConfig = JSON.parse(fs.readFileSync('config.json', 'utf8'));
  const homePage = siteConfig.homepage;
  const pageSource = fs.readFileSync(slugToPostContent[homePage].fullPath, "utf8");

  const { data } = matter(pageSource);
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
