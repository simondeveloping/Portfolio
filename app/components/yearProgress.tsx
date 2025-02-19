"use client";
import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
export default function YearProgress() {
  const [percentage, setPercentage] = useState(0);
  const [daysOver, setDaysOver] = useState(0);
  const [maxDays, setMaxDays] = useState(0);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    function calculatePercentage() {
      const firstDayInYear = new Date(currentYear, 0, 1);
      const currentDay = new Date();
      const isLeapYear =
        (currentYear % 4 === 0 && currentYear % 100 !== 0) ||
        currentYear % 400 === 0;
      const maxNumberOfDays = isLeapYear ? 366 : 365;
      const daysOverThisYear = Math.floor(
        (currentDay.getTime() - firstDayInYear.getTime()) / 86400000
      );
      setDaysOver(daysOverThisYear);
      setMaxDays(maxNumberOfDays);
      return (daysOverThisYear / maxNumberOfDays) * 100;
    }
    setPercentage(calculatePercentage());
  }, [currentYear]);

  return (
    <div>
      <div className="rounded-xl flex flex-col items-center gap-5 text-black text-base p-4">
        <h1 className="flex flex-row gap-2 text-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-calendar-range"
          >
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M16 2v4" />
            <path d="M3 10h18" />
            <path d="M8 2v4" />
            <path d="M17 14h-6" />
            <path d="M13 18H7" />
            <path d="M7 14h.01" />
            <path d="M17 18h.01" />
          </svg>
          Year: {currentYear}
        </h1>
        <Progress value={percentage} className="w-[20vw]" />
        <h2>
          {percentage.toFixed(2)}% ({daysOver} of {maxDays} days)
        </h2>
      </div>
    </div>
  );
}
