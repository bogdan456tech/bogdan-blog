import Head from "next/head";
import Layout from "@/components/Layout";

export default function Stack() {
  const tools = [
    { name: "React", desc: "A powerful JavaScript library for building UIs." },
    { name: "Next.js", desc: "The React framework for production-ready web apps." },
    { name: "Tailwind CSS", desc: "A utility-first CSS framework for rapid design." },
    { name: "ShadCN", desc: "A component library built with Radix and Tailwind." },
    { name: "Supabase", desc: "An open-source Firebase alternative with PostgreSQL." },
    { name: "Strapi", desc: "A flexible headless CMS for managing content." },
  ];

  return (
    <Layout>
      <Head>
        <title>Stack — Bogdan Arama</title>
        <meta
          name="description"
          content="Technologies and frameworks I use: React, Next.js, Tailwind CSS, ShadCN, Supabase, Strapi."
        />
      </Head>

      <section className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-6 text-slate-900">My Stack</h1>
        <p className="text-slate-700 leading-relaxed mb-12">
          These are the tools, frameworks, and technologies I work with in my projects, 
          internship, and personal learning journey.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="p-6 bg-white rounded-xl shadow hover:shadow-md transition text-left"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-2">{tool.name}</h2>
              <p className="text-slate-600">{tool.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
