import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

interface ChallengeTrackerProps {
  start: number;
  end: number;
  challengeName: string;
}

export default function ChallengeTracker({ start, end, challengeName }: ChallengeTrackerProps) {
  const [checkedDays, setCheckedDays] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);

  // Load from Supabase
  useEffect(() => {
    const fetchProgress = async () => {
      const { data, error } = await supabase
        .from("challenges")
        .select("date, done")
        .eq("challenge_name", challengeName);

      if (!error && data) {
        const completed = data
          .filter((d) => d.done)
          .map((d) => new Date(d.date).getDate());
        setCheckedDays(completed);
      }
      setLoading(false);
    };

    fetchProgress();
  }, [challengeName]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-6 gap-2 mt-4">
      {Array.from({ length: end - start + 1 }, (_, i) => start + i).map((day) => (
        <div
          key={day}
          className={`flex items-center justify-center w-10 h-10 rounded-lg border transition ${
            checkedDays.includes(day)
              ? "bg-green-500 text-white"
              : "bg-white text-slate-600"
          }`}
        >
          {day}
        </div>
      ))}
    </div>
  );
}
