import fs from "fs";
import matter from "gray-matter";
import path from "path";
import yaml from "js-yaml";

const pagesDirectory = path.join(process.cwd(), "content/pages");

export type PageContent = {
    readonly slug: string;
    readonly headline: string;
    readonly hero_image: string;
};

let pageCache;

export const fetchPageContent = () => {
    if (pageCache) return pageCache;

    const fileNames =  fs.existsSync(pagesDirectory) ? fs.readdirSync(pagesDirectory) : [];
    

    const allPagesData = fileNames.filter(name => name.endsWith(".mdx"))
      .map(fileName => {
        const fullPath = path.join(pagesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const matterResult = matter(fileContents, {
            engines: {
                yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
            },
        });
        const matterData = matterResult.data;
        
        matterData.fullPath = fullPath;
        const slug = fileName.replace(/\.mdx$/, "");
        // Validate slug string
        if (matterData.slug !== slug) {
          throw new Error(
            "slug field not match with the path of its content source"
          );
        }
        return matterData;
      })
      return allPagesData;

}