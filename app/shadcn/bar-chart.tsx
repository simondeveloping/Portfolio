"use client";

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";
import { database, ref, get, set } from "@/lib/firebase";
import { useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useEffect } from "react";

const chartConfig = {
  Visitors: {
    label: "Visitors",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export function VisitorChart() {
  const currentMonth = new Date().getMonth();
  const visitorStatsRef = ref(database, `visitorStats/`);

  // Initialisiere den State, um die geladenen Daten zu speichern
  const [chartData, setChartData] = useState([
    { month: "January", Visitors: 0 },
    { month: "February", Visitors: 0 },
    { month: "March", Visitors: 0 },
    { month: "April", Visitors: 0 },
    { month: "May", Visitors: 0 },
    { month: "June", Visitors: 0 },
    { month: "July", Visitors: 0 },
    { month: "August", Visitors: 0 },
    { month: "September", Visitors: 0 },
    { month: "October", Visitors: 0 },
    { month: "November", Visitors: 0 },
    { month: "December", Visitors: 0 },
  ]);

  useEffect(() => {
    get(visitorStatsRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const updatedChartData = chartData.map((monthData, index) => {
            const monthKey = monthData.month.toLowerCase(); // Monat als Schlüssel
            const visitor = data[monthKey] ? data[monthKey] : 0;
            if (index === currentMonth) {
              set(visitorStatsRef, {
                ...data,
                [monthKey]: visitor + 1,
              });
            }
            return { ...monthData, Visitors: visitor };
          });
          setChartData(updatedChartData);
        }
      })
      .catch((error) => {
        console.error("Error loading data:", error);
      });
  }, []);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Visitor Stats</CardTitle>
        <CardDescription>January - December 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="Visitors" fill="var(--color-Visitors)" radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          <div className="flex items-center">
            These are the visitors for each month
          </div>
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
            className="lucide lucide-eye"
          >
            <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the whole year
        </div>
      </CardFooter>
    </Card>
  );
}
