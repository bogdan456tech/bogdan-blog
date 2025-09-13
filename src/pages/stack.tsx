import Head from "next/head";
import Layout from "@/components/Layout";

const stack = [
  { name: "React", color: "bg-blue-100 text-blue-700 hover:bg-blue-600 hover:text-white" },
  { name: "Next.js", color: "bg-gray-100 text-gray-800 hover:bg-gray-800 hover:text-white" },
  { name: "Strapi", color: "bg-purple-100 text-purple-700 hover:bg-purple-600 hover:text-white" },
  { name: "Supabase", color: "bg-green-100 text-green-700 hover:bg-green-600 hover:text-white" },
  { name: "Tailwind CSS", color: "bg-cyan-100 text-cyan-700 hover:bg-cyan-600 hover:text-white" },
  { name: "shadcn/ui", color: "bg-pink-100 text-pink-700 hover:bg-pink-600 hover:text-white" },
];

export default function Stack() {
  return (
    <Layout>
      <Head>
        <title>Stack — Bogdan Arama</title>
        <meta
          name="description"
          content="The technologies I use: React, Next.js, Strapi, Supabase, Tailwind CSS, Shadcn."
        />
      </Head>

      <section className="text-center">
        <h1 className="text-3xl font-bold mb-6">My Stack</h1>
        <p className="text-slate-600 mb-10">
          These are the main frameworks, libraries, and tools I use for building projects.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {stack.map((tech) => (
            <div
              key={tech.name}
              className={`px-8 py-4 rounded-2xl shadow-md text-lg font-medium cursor-pointer transition duration-300 ease-in-out ${tech.color}`}
            >
              {tech.name}
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
