import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/Layout";
import { getSortedPostsMeta, type PostMeta } from "@/lib/posts";

export async function getStaticProps() {
  return { props: { posts: getSortedPostsMeta() } };
}

export default function Blog({ posts }: { posts: PostMeta[] }) {
  return (
    <Layout>
      <Head>
        <title>Blog — Bogdan Arama</title>
        <meta name="description" content="All posts by Bogdan Arama." />
      </Head>

      <h1 className="text-2xl font-semibold mb-4">Blog</h1>
      <ul className="space-y-6">
        {posts.map(p => (
          <li key={p.slug}>
            <Link href={`/blog/${p.slug}`} className="text-lg font-medium hover:underline">
              {p.title}
            </Link>
            <div className="text-sm text-slate-500">{p.date}</div>
            {p.description && (
              <p className="text-slate-700 mt-1">{p.description}</p>
            )}
          </li>
        ))}
      </ul>
    </Layout>
  );
}
