import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";
import components from "./blocks";

export default function PageLayout({ slug, title, sections = [], config = {phone: ""}, menuConfig }) {
  const renderSections = () => {
    return sections.map((section, i) => {
      const Component = components[section.type];
      return <Component {...section} key={i} />;
    });
  };
  return (
    <div>
      <Head>
        <title>{title}</title>
        {/* <meta /> */}
      </Head>
      <Header menuConfig={menuConfig} />
      <main>{renderSections()}</main>
      <Footer phone={config.phone} />
    </div>
  );
}