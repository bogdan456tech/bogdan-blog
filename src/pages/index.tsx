import Head from "next/head";
import Layout from "@/components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Bogdan Arama — Personal Site</title>
        <meta
          name="description"
          content="Bogdan Arama — Software Engineering student and aspiring developer. Explore my blog, challenges, values, and stack."
        />
      </Head>

      {/* ✅ Centered Hero */}
      <section className="flex items-center justify-center min-h-[80vh] text-center">
        <div>
          <h1 className="text-4xl font-bold mb-4 text-slate-900">
            Hi, I’m Bogdan Arama 👋
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            I’m a Software Engineering student passionate about backend
            development, full-stack projects, and continuous learning.
            On this site I share my{" "}
            <Link
              href="/blog"
              className="font-semibold text-blue-600 hover:underline"
            >
              blog posts
            </Link>
            , document my{" "}
            <Link
              href="/challenges"
              className="font-semibold text-blue-600 hover:underline"
            >
              challenges
            </Link>
            , and showcase my{" "}
            <Link
              href="/values"
              className="font-semibold text-blue-600 hover:underline"
            >
              values
            </Link>{" "}
            and{" "}
            <Link
              href="/stack"
              className="font-semibold text-blue-600 hover:underline"
            >
              stack
            </Link>
            .
          </p>

          <div className="flex justify-center gap-4">
            <Link
              href="/blog"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              Read Blog
            </Link>
            <Link
              href="/challenges"
              className="px-6 py-3 bg-slate-200 text-slate-800 rounded-lg shadow hover:bg-slate-300 transition"
            >
              View Challenges
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
