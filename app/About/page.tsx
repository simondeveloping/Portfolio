import Overlay from "../components/overlay";
import { Progress } from "@/components/ui/progress";
export default function Portfolio() {
  const currentDate = new Date();
  const startDate = new Date("2023-09-01");
  const endDate = new Date("2026-07-01");
  const progress =
    ((currentDate.getTime() - startDate.getTime()) /
      (endDate.getTime() - startDate.getTime())) *
    100;
  return (
    <div>
      <Overlay color1={"bg-[#e8005f]"} color2={"bg-[#a20043]"} />
      <div className="flex h-screen justify-center gap-3 p-10 lg:gap-5 lg:p-20 flex-wrap">
        <h1 className="text-4xl lg:text-8xl font-bold">Hello </h1>
        <h1 className="text-4xl lg:text-8xl font-bold">I'm </h1>
        <h1 className="text-4xl lg:text-8xl font-bold">Simon</h1>
      </div>
      <h1 className="text-4xl lg:text-8xl font-bold text-center p-20">
        Experience
      </h1>
      <div className="flex justify-center w-full mb-40">
        <div className="w-[70vw] lg:w-[40vw] gap-5 flex flex-col">
          <h1 className="text-base lg:text-2xl">
            Matse - Mathematics and Computer Science
          </h1>
          <p className="text-gray-400 text-xl">(2023 - 2026) | RWTH Aachen</p>
          <Progress value={progress} />
        </div>
      </div>
      <h1 className="text-4xl lg:text-8xl font-bold text-center p-20">
        Education
      </h1>
      <div className="flex justify-center w-full mb-40">
        <div className="w-[70vw] lg:w-[40vw] gap-5 flex flex-col">
          <h1 className="text-base lg:text-2xl">
            Bachelor of Science in 'Applied Mathematics and Computer Science'
          </h1>
          <p className="text-gray-400 text-xl">(2023 - 2026) | University</p>
          <Progress value={progress} />
        </div>
      </div>
      <h1 className="text-4xl lg:text-8xl font-bold text-center p-20">
        Tech Stack
      </h1>
      <div className="flex justify-center w-full "></div>
    </div>
  );
}
