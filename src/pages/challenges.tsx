import Head from "next/head";
import Layout from "@/components/Layout";
import ChallengeTracker from "@/components/ChallengeTracker";

export default function Challenges() {
  return (
    <Layout>
      <Head>
        <title>Challenges — Bogdan Arama</title>
        <meta
          name="description"
          content="Personal challenges I set for myself as a developer — including daily study, project practice, and more."
        />
      </Head>

      <section className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-slate-900">My Challenges</h1>
        <p className="text-slate-700 leading-relaxed mb-12">
          I use challenges to keep myself disciplined, consistent, and motivated.
          Each challenge helps me grow as a developer by combining theory with practice.
        </p>

        {/* Challenge 1 */}
        <div className="p-6 mb-8 bg-white rounded-xl shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2 text-slate-800">
            Daily Study Journal
          </h2>
          <p className="text-slate-700 mb-4">
            From 13 to 30 September 2025, I will write daily about my learning at
            university, the programming concepts I study, and the tasks I complete
            in personal projects or at my internship.
          </p>
          {/* Tracker for days 13–30 */}
          <ChallengeTracker start={13} end={30} challengeName="daily-study-journal" />
        </div>

      </section>
    </Layout>
  );
}
