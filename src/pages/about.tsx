import Head from "next/head";
import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About — Bogdan Arama</title>
        <meta
          name="description"
          content="Learn more about Bogdan Arama, Software Engineering student, developer, and lifelong learner."
        />
      </Head>

      <section className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-slate-900">About Me</h1>
        <p className="text-slate-700 leading-relaxed mb-4">
          Hi, I’m <span className="font-semibold text-blue-600">Bogdan Arama</span>, 
          a Software Engineering student at the Technical University of Moldova. 
          I’m passionate about building real-world applications, exploring modern web technologies, 
          and improving myself as a developer every day.
        </p>

        <p className="text-slate-700 leading-relaxed mb-4">
          My current focus is on{" "}
          <span className="font-semibold">backend development</span> and full-stack projects. 
          I enjoy solving problems, experimenting with different tools, and sharing my journey 
          through writing and challenges on this site.
        </p>

        <p className="text-slate-700 leading-relaxed mb-6">
          Outside of coding, I believe in personal growth, discipline, and staying curious. 
          These values guide not just my work in software, but also my daily life.
        </p>

        {/* Small highlight box */}
        <div className="p-6 bg-blue-50 border-l-4 border-blue-500 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-2 text-blue-700">Currently</h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-2">
            <li>📚 Studying Software Engineering at university</li>
            <li>💻 Learning React, Next.js, Supabase, and backend technologies</li>
            <li>🏢 Doing an internship with focus on full-stack development</li>
            <li>✍️ Writing blog posts and documenting challenges</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
