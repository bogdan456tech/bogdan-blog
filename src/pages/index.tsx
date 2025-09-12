import Head from "next/head";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Bogdan Arama — Software Engineering Student</title>
        <meta
          name="description"
          content="Personal site of Bogdan Arama: achievements, plans, and blog."
        />
      </Head>
      <section className="prose">
        <h1>Hi, I’m Bogdan 👋</h1>
        <p>
          I’m a Software Engineering student and intern. This is my personal
          site and blog where I write about my progress and projects.
        </p>
      </section>
    </Layout>
  );
}
