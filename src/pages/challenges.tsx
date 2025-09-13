import Head from "next/head";
import Layout from "@/components/Layout";
import { useState, useEffect } from "react";

const challenges = [
  {
    title: "Daily Study Journal",
    description:
      "From 13 to 30 September 2025, I will write daily about my learning at university, the programming concepts I study, and the tasks I complete in personal projects or at my internship.",
  },
  {
    title: "Project Practice",
    description:
      "Build at least one mini project every month using my stack: React, Next.js, Supabase, Strapi, Tailwind, and Shadcn.",
  },
];

// ✅ Small reusable tracker component
function ChallengeTracker({ start, end, id }: { start: number; end: number; id: string }) {
  const [checkedDays, setCheckedDays] = useState<number[]>([]);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(`challenge-${id}`);
    if (saved) {
      setCheckedDays(JSON.parse(saved));
    }
  }, [id]);

  // Save to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(`challenge-${id}`, JSON.stringify(checkedDays));
  }, [checkedDays, id]);

  const toggleDay = (day: number) => {
    setCheckedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  return (
    <div className="grid grid-cols-6 gap-2 mt-4">
      {Array.from({ length: end - start + 1 }, (_, i) => start + i).map((day) => (
        <button
          key={day}
          onClick={() => toggleDay(day)}
          className={`w-10 h-10 rounded-lg border transition ${
            checkedDays.includes(day)
              ? "bg-green-500 text-white"
              : "bg-white text-slate-600 hover:bg-slate-100"
          }`}
        >
          {day}
        </button>
      ))}
    </div>
  );
}

// ✅ Main page
export default function Challenges() {
  return (
    <Layout>
      <Head>
        <title>Challenges — Bogdan Arama</title>
      </Head>

      <h1 className="text-3xl font-bold mb-6">My Challenges</h1>

      {/* First challenge */}
      <div className="p-6 rounded-2xl shadow-md bg-slate-50 text-left hover:bg-blue-50 transition duration-300 mb-6">
        <h2 className="text-xl font-semibold mb-2">Daily Study Journal</h2>
        <p className="text-slate-700">
          From 13 to 30 September 2025, I will write daily about my learning at
          university, the programming concepts I study, and the tasks I complete
          in personal projects or at my internship.
        </p>

        {/* Tracker for days 13–30 */}
        <ChallengeTracker start={13} end={30} id="daily-study-journal" />
      </div>

      {/* Second challenge */}
      <div className="p-6 rounded-2xl shadow-md bg-slate-50 text-left hover:bg-blue-50 transition duration-300">
        <h2 className="text-xl font-semibold mb-2">Project Practice</h2>
        <p className="text-slate-700">
          Build at least one mini project every month using my stack: React,
          Next.js, Supabase, Strapi, Tailwind, and Shadcn.
        </p>
      </div>
    </Layout>
  );
}
