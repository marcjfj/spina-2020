import { GetStaticProps } from "next";
import Layout from "../../components/Layout";
import BasicMeta from "../../components/meta/BasicMeta";
import OpenGraphMeta from "../../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../components/meta/TwitterCardMeta";
import PostList from "../../components/PostList";
import config from "../../lib/config";
import { countPosts, listPostContent, PostContent } from "../../lib/posts";
import { listTags, TagContent } from "../../lib/tags";
import Head from "next/head";

import PageLayout from '../../components/PageLayout';


export default function Index(props) {
  const url = "/posts";
  const title = "All posts";
  return (
    <div>
    <PageLayout {...props} />
  </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return null;
};
