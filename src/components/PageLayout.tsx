import Footer from "./Footer";
import Header from "./Header";
import components from "./blocks";

export default function PageLayout({ slug, title, sections, config, menuConfig }) {
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
}