import Head from "next/head";
import Layout from "@/components/Layout";
import Link from "next/link"; // ✅ now we’ll actually use it
import { getPostBySlug, getSortedPostsMeta, type Post } from "@/lib/posts";

export async function getStaticPaths() {
  const posts = getSortedPostsMeta();
  return {
    paths: posts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
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
        <meta name="description" content={post.description || post.title} />
      </Head>

      <article className="max-w-3xl mx-auto prose prose-slate lg:prose-lg">
        <h1 className="mb-2">{post.title}</h1>
        <p className="text-slate-500 text-sm mb-6">{post.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>

      <div className="max-w-3xl mx-auto mt-12">
        {/* ✅ replaced <a> with Link */}
        <Link href="/blog" className="text-slate-800 hover:underline font-medium">
          ← Back to Blog
        </Link>
      </div>
    </Layout>
  );
}
