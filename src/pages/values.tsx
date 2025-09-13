import Head from "next/head";
import Layout from "@/components/Layout";

const values = [
  "Courage",
  "Discipline",
  "Curiosity",
  "Moderation",
  "Presence",
];

export default function Values() {
  return (
    <Layout>
      <Head>
        <title>Values — Bogdan Arama</title>
        <meta
          name="description"
          content="My core values that guide me in life and software development."
        />
      </Head>

      <section className="text-center">
        <h1 className="text-3xl font-bold mb-6">My Values</h1>
        <p className="text-slate-600 mb-10">
          These principles guide my journey in software development and life.
        </p>

        <div className="flex justify-center gap-6 ">
          {values.map((val) => (
            <div
              key={val}
              className="
                px-8 py-4 rounded-2xl shadow-md text-lg font-medium cursor-pointer 
                bg-slate-100 text-slate-800 
                transition duration-300 ease-in-out
                hover:bg-blue-600 hover:text-white
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
