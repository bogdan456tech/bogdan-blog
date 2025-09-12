import Head from "next/head";
import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About — Bogdan Arama</title>
        <meta name="description" content="About Bogdan Arama." />
      </Head>
      <article className="prose">
        <h1>About me</h1>
        <p>Short bio, interests, and what I’m building.</p>
      </article>
    </Layout>
  );
}
