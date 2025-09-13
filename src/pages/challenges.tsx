import Head from "next/head";
import Layout from "@/components/Layout";
import ChallengeTracker from "@/components/ChallengeTracker";

export default function Challenges() {
  return (
    <Layout>
      <Head>
        <title>Challenges — Bogdan Arama</title>
      </Head>

      <h1 className="text-3xl font-bold mb-6">My Challenges</h1>

      <div className="p-6 rounded-2xl shadow-md bg-slate-50 text-left hover:bg-blue-50 transition duration-300 mb-6">
        <h2 className="text-xl font-semibold mb-2">Daily Study Journal</h2>
        <p className="text-slate-700">
          From 13 to 30 September 2025, I will write daily about my learning at
          university, the programming concepts I study, and the tasks I complete
          in personal projects or at my internship.
        </p>

        {/* Tracker for days 13–30 */}
        <ChallengeTracker start={13} end={30} challengeName="daily-study-journal" />

      </div>
    </Layout>
  );
}
