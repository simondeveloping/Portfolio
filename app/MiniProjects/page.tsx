"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Search } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import Overlay from "../components/overlay";

export default function MiniProjects() {
  const [search, setSearch] = useState("");
  const [selectedtags, setSelectedtags] = useState<{
    [key: string]: boolean;
  }>({
    JustForFun: true,
    Private: false,
    Useful: true,
    Attached: false,
    InProgress: false,
    Done: false,
  });

  const boxes = [
    {
      id: "1",
      name: "Email Reminder",
      description:
        "The project is an email reminder that sends an email to the user with a predefined text on a specific date. This ensures that important reminders are never forgotten.",
      pic: "/reminder.webp",
      tags: ["Useful", "Attached", "InProgress"],
      link: "/MiniProjects/EmailReminder",
    },
    {
      id: "2",
      name: "Pinguin",
      description:
        "This is for people who want to approach someone but don't know how :)",
      pic: "/pinguin.jpg",
      tags: ["JustForFun", "Private", "InProgress", "Useful"],
      link: "https://simonp.one/pinguin/pinguin",
    },
    {
      id: "3",
      name: "Yes Or No",
      description: "This is for people with decision-making problems",
      pic: "/notyet.webp",
      tags: ["JustForFun", "InProgress"],
      link: "/MiniProjects",
    },
    {
      id: "4",
      name: "Christmas Timer",
      description: "How many days left till christmas?",
      pic: "/notyet.webp",
      tags: ["JustForFun", "InProgress"],
      link: "/MiniProjects",
    },
    {
      id: "5",
      name: "test",
      description: "This is for testing purposes",
      pic: "/notyet.webp",
      tags: ["Private", "JustForFun"],
      link: "/MiniProjects",
    },
    {
      id: "6",
      name: "test",
      description: "This is for testing purposes",
      pic: "/notyet.webp",
      tags: ["Private", "JustForFun"],
      link: "/MiniProjects",
    },
  ];
  const tags = [
    {
      id: "1",
      tag: "JustForFun",
      bgColor: "bg-blue-200",
      borderColor: "border-blue-200",
    },
    {
      id: "2",
      tag: "Private",
      bgColor: "bg-violet-200",
      borderColor: "border-violet-200",
    },
    {
      id: "3",
      tag: "Useful",
      bgColor: "bg-orange-200",
      borderColor: "border-orange-200",
    },
    {
      id: "4",
      tag: "Attached",
      bgColor: "bg-red-200",
      borderColor: "border-red-200",
    },
    {
      id: "5",
      tag: "InProgress",
      bgColor: "bg-yellow-200",
      borderColor: "border-yellow-200",
    },
    {
      id: "6",
      tag: "Done",
      bgColor: "bg-green-200",
      borderColor: "border-green-200",
    },
  ];
  const toggletagsSelection = (tags: string) => {
    setSelectedtags((prev) => ({
      ...prev,
      [tags]: !prev[tags],
    }));
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const clearAll = () => {
    setSelectedtags((prevTags) => {
      const updatedTags = Object.keys(prevTags).reduce((acc, tag) => {
        acc[tag] = false;
        return acc;
      }, {} as { [key: string]: boolean });
      return updatedTags;
    });
  };
  const highlightText = (text: string, search: string) => {
    if (!search) return text;
    const parts = text.split(new RegExp(`(${search})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === search.toLowerCase() ? (
        <span key={index} className="bg-yellow-600">
          {part}
        </span>
      ) : (
        part
      )
    );
  };
  const filteredBoxes = boxes.filter((box) => {
    return (
      (box.name.toLowerCase().includes(search.toLowerCase()) ||
        box.description.toLowerCase().includes(search.toLowerCase()) ||
        box.tags.some((tag) =>
          tag.toLowerCase().includes(search.toLowerCase())
        )) &&
      box.tags.some(
        (tag) =>
          selectedtags[tag] || !Object.values(selectedtags).includes(true)
      )
    );
  });
  if (filteredBoxes.length === 0) {
    filteredBoxes.push({
      id: "0",
      name: "No projects found",
      description: "No projects found",
      pic: "/sad.png",
      tags: ["Useful"],
      link: "/MiniProjects",
    });
  }
  return (
    <div>
      <Overlay />

      <div className="dark:bg-blay">
        <div className="flex lg:flex-row flex-col justify-around">
          <div className="lg:w-2/4 w-full h-auto relative">
            <div className="sticky top-20 flex flex-col gap-10 justify-start items-center left:0">
              <div className="">
                <h1 className="text-lg flex flex-row gap-1 text-black dark:text-white">
                  <Search />
                  Search for project
                </h1>
                <input
                  onChange={handleChange}
                  value={search}
                  className="text-black dark:text-white border-2 border-violet-500 rounded-xl h-10 w-64 p-4 focus:outline-none focus:ring-1 focus:ring-violet-500 focus:border-violet-500"
                  type="text"
                  placeholder="Search"
                ></input>
              </div>
              <div className="gap-3 flex flex-col hidden lg:flex">
                <h1 className="text-xl text-black dark:text-white">
                  Select tags
                </h1>
                {tags.map((tags) => (
                  <div
                    key={tags.id}
                    className={`flex flex-row gap-2 p-2 text-black text-sm ${tags.bgColor} rounded-xl shadow-black shadow-sm`}
                  >
                    <Switch
                      checked={selectedtags[tags.tag]}
                      onCheckedChange={() => toggletagsSelection(tags.tag)}
                      className="data-[state=checked]:bg-gray-700 data-[state=unchecked]:bg-gray-400"
                    ></Switch>
                    <h1>{tags.tag}</h1>
                  </div>
                ))}
                <button
                  className="border rounded-xl hover:scale-105 shadow-sm dark:shadow-white text-black dark:text-white shadow-black"
                  onClick={clearAll}
                >
                  Clear all
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:gap-10 gap-4 justify-start items-center p-4">
            {filteredBoxes.map((box) => {
              const borderColor = tags.find(
                (t) => t.tag === box.tags[0]
              )?.borderColor;
              return (
                <Link key={box.id} className="w-full h-auto" href={box.link}>
                  <div
                    className={`cursor-pointer border-2 ${borderColor} rounded-xl duration-300 hover:shadow-md dark:hover:shadow-white hover:scale-105 hover:shadow-black shadow-xl`}
                  >
                    <div className="2xl:w-[40vw]  xl:w-[50vw]  lg:w-[50vw] w-full h-auto p-6 flex flex-row max-h-screen-lg">
                      <div className="lg:w-1/2 w-full flex gap-5 flex-col justify-around">
                        <h1 className="2xl:text-3xl text-2xl text-black dark:text-white">
                          {highlightText(box.name, search)}
                        </h1>
                        <p className="2xl:text-xl xl:text-base sm:text-sm text-black dark:text-white">
                          {highlightText(box.description, search)}
                        </p>
                        <div className="flex justify-start items-start w-full gap-2 flex-wrap">
                          <h1 className="text-black dark:text-white">Tags: </h1>
                          {box.tags.map((tag) => {
                            const tagColor = tags.find(
                              (t) => t.tag === tag
                            )?.bgColor;
                            return (
                              <div
                                key={tag}
                                className={`flex gap-2 ${tagColor} text-black rounded-xl p-0.5 text-sm`}
                              >
                                {tag}
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div className="w-1/2 bg-cover bg-no-repeat overflow-hidden relative lg:flex justify-center items-center  flex-col gap-4 hidden">
                        <Image
                          src={box.pic}
                          width={400}
                          height={500}
                          alt="Test"
                          className="lg:w-full lg:h-full lg:max-h-[500px] lg:max-w-[500px] max-h-[200px] max-w-[200px] object-cover hover:scale-110 transform transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="relative w-2/4 justify-center ">
            <div className=" flex sticky top-20 flex-col gap-4 items-center hidden lg:flex">
              <h1 className="text-3xl text-black dark:text-white">
                <u>Overview</u>
              </h1>
              <h1 className="text-base text-black dark:text-white">
                Total projects:{" "}
                <span className="text-blue-500">{boxes.length}</span>
              </h1>
              <h1 className="text-base text-black dark:text-white">
                Projects shown:{" "}
                <span className="text-blue-500">{filteredBoxes.length}</span>
              </h1>
              <h1 className="text-lg text-black dark:text-white">
                Tags: Number of projects
              </h1>
              <ul className="text-black bg-black dark:text-white dark:bg-gray-500 bg-opacity-10 p-4 rounded-xl flex gap-2 flex-col p-10">
                {tags.map((tag) => (
                  <li key={tag.id} className="flex flex-row gap-2">
                    <div
                      className={`flex gap-2 ${tag.bgColor} text-black rounded-xl p-1 text-sm`}
                    >
                      {tag.tag}
                    </div>
                    <h1 className="text-black dark:text-white">
                      :{" "}
                      {boxes.filter((box) => box.tags.includes(tag.tag)).length}
                    </h1>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
