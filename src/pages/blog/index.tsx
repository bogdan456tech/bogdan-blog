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
        <meta
          name="description"
          content="Blog posts by Bogdan Arama — documenting my learning journey, projects, and insights."
        />
      </Head>

      <section className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-slate-900">Blog</h1>
        <p className="text-slate-700 leading-relaxed mb-12">
          Welcome to my blog! Here I share my progress in software development,
          personal projects, and lessons learned during university and internships.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((p) => (
            <div
              key={p.slug}
              className="p-6 bg-white rounded-xl shadow hover:shadow-md transition flex flex-col"
            >
              <Link
                href={`/blog/${p.slug}`}
                className="text-xl font-semibold text-slate-800 hover:underline"
              >
                {p.title}
              </Link>
              <div className="text-sm text-slate-500 mt-1">{p.date}</div>
              {p.description && (
                <p className="text-slate-700 mt-3 flex-grow">{p.description}</p>
              )}
              <Link
                href={`/blog/${p.slug}`}
                className="mt-4 inline-block text-slate-800 hover:underline font-medium"
              >
                Read more →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
