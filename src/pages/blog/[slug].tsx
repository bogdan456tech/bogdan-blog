import Head from "next/head";
import Layout from "@/components/Layout";
import { getAllSlugs, getPostBySlug, type Post } from "@/lib/posts";

export async function getStaticPaths() {
  const paths = getAllSlugs().map(slug => ({ params: { slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  return { props: { post } };
}

export default function PostPage({ post }: { post: Post }) {
  return (
    <Layout>
      <Head>
        <title>{post.title} — Bogdan Arama</title>
        <meta name="description" content={post.description ?? post.title} />
      </Head>

      <article className="prose prose-slate lg:prose-lg mx-auto">
        <h1 className="mb-0">{post.title}</h1>
        <p className="mt-0 text-sm text-slate-500">{post.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>
    </Layout>
  );
}
