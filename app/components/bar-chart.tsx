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
    color: "hsl(var(--primary))",
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
    <Card className="w-full lg:w-1/2">
      <CardHeader className="bg-cream">
        <CardTitle className="text-cookie text-2xl">Visitor Overview</CardTitle>
        <CardDescription className="text-cookie">
          January - December 2025
        </CardDescription>
      </CardHeader>
      <CardContent className="bg-cream ">
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
      <CardFooter className="flex-col items-start gap-2 text-sm bg-cream">
        <div className="flex gap-2 font-medium leading-none">
          <div className="flex items-center text-cookie">
            These are the visitors for each month
          </div>
        </div>
        <div className="leading-none text-muted-foreground text-cookie">
          Currently January has the most visitors :)
        </div>
      </CardFooter>
    </Card>
  );
}
