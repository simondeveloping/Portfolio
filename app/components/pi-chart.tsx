"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";
import { database, ref, onValue, runTransaction } from "@/lib/firebase";
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

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function PiChart() {
  const [counter, setCounter] = React.useState<{ [key: string]: number }>({
    chrome: 0,
    safari: 0,
    firefox: 0,
    edge: 0,
    other: 0,
  });

  React.useEffect(() => {
    const getBrowserName = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      if (userAgent.includes("edg")) return "edge";
      if (userAgent.includes("chrome")) return "chrome";
      if (userAgent.includes("safari") && !userAgent.includes("chrome"))
        return "safari";
      if (userAgent.includes("firefox")) return "firefox";
      return "other";
    };

    const browserName = getBrowserName();
    const visitCounter = ref(database, `visitCounter/${browserName}`);
    runTransaction(visitCounter, (currentValue) => {
      return (parseInt(currentValue, 10) || 0) + 1;
    });
    const allBrowser = ref(database, `visitCounter`);
    const unsubscribe = onValue(allBrowser, (snapshot) => {
      if (snapshot.exists()) {
        setCounter(snapshot.val());
      }
    });

    return () => unsubscribe();
  }, []);

  const chartData = [
    {
      browser: "chrome",
      visitors: counter.chrome,
      fill: "var(--color-chrome)",
    },
    {
      browser: "safari",
      visitors: counter.safari,
      fill: "var(--color-safari)",
    },
    {
      browser: "firefox",
      visitors: counter.firefox,
      fill: "var(--color-firefox)",
    },
    { browser: "edge", visitors: counter.edge, fill: "var(--color-edge)" },
    { browser: "other", visitors: counter.other, fill: "var(--color-other)" },
  ];
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, [chartData]);
  return (
    <Card className="flex flex-col ">
      <CardHeader className="items-center pb-0 bg-cream">
        <CardTitle className="text-xl text-cookie">Browser Usage</CardTitle>
        <CardDescription className="text-cookie">2024 - Today</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0 bg-cream">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="text-cookie text-3xl font-bold "
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="text-cookie"
                        >
                          Visitors
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm bg-cream">
        <div className="flex items-center gap-2 font-medium leading-none"></div>
        <div className="leading-none text-cookie">
          Currently Firefox has the most visitors :)
        </div>
      </CardFooter>
    </Card>
  );
}
