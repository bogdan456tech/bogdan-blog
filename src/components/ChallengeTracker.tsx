import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

interface ChallengeTrackerProps {
  start: number;
  end: number;
  challengeName: string;
}

type ChallengeRow = {
  date: string;
  done: string; // "done" | "missed" | ""
};

export default function ChallengeTracker({
  start,
  end,
  challengeName,
}: ChallengeTrackerProps) {
  const [statuses, setStatuses] = useState<Record<number, string>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProgress = async () => {
      const { data, error } = await supabase
        .from("challenges")
        .select("date, done")
        .eq("challenge_name", challengeName);

      if (error) {
        console.error("Error fetching progress:", error);
        setLoading(false);
        return;
      }

      const map: Record<number, string> = {};
      data.forEach((row: ChallengeRow) => {
        const day = parseInt(row.date.slice(8, 10), 10);
        map[day] = row.done || ""; // empty = not reached yet
      });

      setStatuses(map);
      setLoading(false);
    };

    fetchProgress();
  }, [challengeName]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-6 gap-2 mt-4">
      {Array.from({ length: end - start + 1 }, (_, i) => start + i).map(
        (day) => {
          const status = statuses[day] || "";
          let classes = "bg-white text-slate-600"; // default = future
          if (status === "done") classes = "bg-green-500 text-white";
          if (status === "missed") classes = "bg-red-500 text-white";

          return (
            <div
              key={day}
              className={`flex items-center justify-center w-10 h-10 rounded-lg border transition ${classes}`}
            >
              {day}
            </div>
          );
        }
      )}
    </div>
  );
}
