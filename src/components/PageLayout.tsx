import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";
import components from "./blocks";

export default function PageLayout({ slug, title, sections = [], config, menuConfig }) {
  const renderSections = () => {
    return sections.map((section, i) => {
      const Component = components[section.type];
      return <Component {...section} key={i} />;
    });
  };
  const footerProps = {phone: config.phone, facebook: config.facebook_account, yelp: config.yelp_account, email: config.main_email};
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="The North Bay's Favorite Pumpkin Patch" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
        {/* <meta /> */}
      </Head>
      <Header menuConfig={menuConfig} />
      <main>{renderSections()}</main>
      <Footer {...footerProps} />
    </div>
  );
}