import Head from "next/head";
import Layout from "@/components/Layout";

export default function Values() {
  const values = ["Courage", "Discipline", "Curiosity", "Moderation", "Presence"];

  return (
    <Layout>
      <Head>
        <title>Values — Bogdan Arama</title>
        <meta
          name="description"
          content="The values that guide Bogdan Arama in software development and life."
        />
      </Head>

      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-6 text-slate-900">My Values</h1>
        <p className="text-slate-700 leading-relaxed mb-12">
          These values guide me in my learning, projects, and everyday decisions.
          They help me stay focused, motivated, and grounded while growing as a developer
          and as a person.
        </p>

        {/* Values as interactive buttons */}
        <div className="flex flex-wrap justify-center gap-6">
          {values.map((val) => (
            <div
              key={val}
              className="
                px-8 py-4 rounded-xl shadow-md text-lg font-semibold cursor-default
                bg-white text-slate-700 
                transition duration-300 ease-in-out
                hover:bg-blue-600 hover:text-white hover:shadow-lg
              "
            >
              {val}
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
