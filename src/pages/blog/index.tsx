import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Layout from "@/components/Layout";
import { getSortedPostsMeta, type PostMeta } from "@/lib/posts";

export async function getStaticProps() {
  return { props: { posts: getSortedPostsMeta() } };
}

export default function Blog({ posts }: { posts: PostMeta[] }) {
  const [selectedDate, setSelectedDate] = useState("");

  const filteredPosts = selectedDate
    ? posts.filter((p) => p.date === selectedDate)
    : posts;

  return (
    <Layout>
      <Head>
        <title>Journal — Bogdan Arama</title>
        <meta name="description" content="Daily software development journal by Bogdan Arama." />
      </Head>

      <h1 className="text-2xl font-semibold mb-4">Blog</h1>

      {/* Date filter */}
      <div className="mb-6">
        <label htmlFor="date" className="mr-2 text-sm font-medium">
          Filter by date:
        </label>
        <input
          id="date"
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="border rounded p-2"
        />
        {selectedDate && (
          <button
            onClick={() => setSelectedDate("")}
            className="ml-3 text-sm text-blue-600 hover:underline"
          >
            Clear
          </button>
        )}
      </div>

      <ul className="space-y-6">
        {filteredPosts.length === 0 ? (
          <p className="text-slate-500">No entries for this date.</p>
        ) : (
          filteredPosts.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/blog/${p.slug}`}
                className="text-lg font-medium hover:underline"
              >
                {p.title}
              </Link>
              <div className="text-sm text-slate-500">{p.date}</div>
              {p.description && (
                <p className="text-slate-700 mt-1">{p.description}</p>
              )}
            </li>
          ))
        )}
      </ul>
    </Layout>
  );
}
