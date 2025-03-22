"use client";
import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Calendar } from "lucide-react";
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
      <div className="rounded-xl flex flex-col items-center gap-5 text-base p-4">
        <h1 className="flex flex-row gap-2 text-4xl font-bold items-center text-blue-500">
          <Calendar size={32} />
          Our Year: {currentYear}
        </h1>
        <Progress value={percentage} className="w-3/4 " />
        <h2 className="text-xl font-bold">
          {percentage.toFixed(2)}% ({daysOver} of {maxDays} days)
        </h2>
      </div>
    </div>
  );
}
