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

