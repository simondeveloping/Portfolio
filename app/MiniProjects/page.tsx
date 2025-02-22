"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
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
      link: "/MiniProjects",
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
      tags: ["Private", "Just for fun"],
      link: "/MiniProjects",
    },
    {
      id: "6",
      name: "test",
      description: "This is for testing purposes",
      pic: "/notyet.webp",
      tags: ["Private", "Just for fun"],
      link: "/MiniProjects",
    },
  ];
  const tags = [
    {
      id: "1",
      tags: "JustForFun",
      color: "bg-blue-200",
    },
    { id: "2", tags: "Private", color: "bg-red-200" },
    { id: "3", tags: "Useful", color: "bg-orange-400" },
    { id: "4", tags: "Attached", color: "bg-red-400" },
    { id: "5", tags: "InProgress", color: "bg-yellow-400" },
    { id: "6", tags: "Done", color: "bg-green-200" },
  ];
  const tagsColor: { [key: string]: string } = {
    "Just for fun": "border-blue-200",
    Private: "border-red-200",
    Useful: "border-orange-400",
  };
  const toggletagsSelection = (tags: string) => {
    setSelectedtags((prev) => ({
      ...prev,
      [tags]: !prev[tags],
    }));
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e.target.value);
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
      <div className="flex flex-row justify-around">
        <div className="w-2/4 h-auto relative">
          <div className="sticky top-20 flex flex-col gap-10 justify-start items-center left:0">
            <div className="">
              <h1 className="text-lg flex flex-row gap-1">
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
                  className="lucide lucide-search"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>{" "}
                Search for project
              </h1>
              <input
                onChange={handleChange}
                value={search}
                className="text-black dark:text-white border-2 border-violet-500 rounded-xl h-10 w-64 p-4 focus:outline-none focus:ring-4 focus:ring-violet-500 focus:border-violet-500"
                type="text"
                placeholder="Search"
              ></input>
            </div>
            <div className="gap-3 flex flex-col">
              <h1 className="text-xl">Select tags</h1>
              {tags.map((tags) => (
                <div
                  key={tags.id}
                  className={`flex flex-row gap-2 p-2 text-black text-sm ${tags.color} rounded-xl`}
                >
                  <input
                    type="checkbox"
                    checked={selectedtags[tags.tags]}
                    onChange={() => toggletagsSelection(tags.tags)}
                    className=""
                  ></input>
                  <h1>{tags.tags}</h1>
                </div>
              ))}
              <button
                className="border rounded-xl hover:scale-105 shadow-sm shadow-white"
                onClick={clearAll}
              >
                Clear all
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 justify-start items-center p-4">
          {filteredBoxes.map((box) => (
            <Link key={box.id} className="w-full h-auto" href={box.link}>
              <div
                className={`cursor-pointer border-2 ${
                  tagsColor[box.tags[0]]
                } rounded-xl duration-300 hover:shadow-md hover:shadow-white hover:scale-105`}
              >
                <div className="2xl:w-[40vw] 2xl:h-[30vh] xl:w-[50vw] xl:h-[45vh] w-[50vw] h-[30vh] p-6 flex flex-row max-h-screen-lg">
                  <div className="w-1/2 flex gap-5 flex-col justify-around">
                    <h1 className="2xl:text-3xl text-2xl">{box.name}</h1>
                    <p className="2xl:text-xl xl:text-base sm:text-sm">
                      {box.description}
                    </p>
                    <div className="flex justify-start items-start w-full gap-2 flex-wrap">
                      <h1 className="">Tags: </h1>
                      {box.tags.map((tag) => {
                        const tagColor = tags.find(
                          (t) => t.tags === tag
                        )?.color;
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

                  <div className="w-1/2 bg-cover bg-no-repeat overflow-hidden relative flex justify-center items-center flex flex-col gap-4">
                    <Image
                      src={box.pic}
                      width={400}
                      height={500}
                      alt="Test"
                      className="hover:scale-110 transform transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="relative w-2/4 justify-center">
          <div className=" flex sticky top-20 flex-col gap-4 items-center">
            <h1 className="text-3xl">
              <u>Overview</u>
            </h1>
            <h1 className="text-base">
              Total projects:{" "}
              <span className="text-blue-500">{boxes.length}</span>
            </h1>
            <h1 className="text-base">
              Projects shown:{" "}
              <span className="text-blue-500">{filteredBoxes.length}</span>
            </h1>
            <h1 className="text-lg">Tags: Number of projects</h1>
            <ul className="text-white bg-white bg-opacity-10 p-4 rounded-xl flex gap-2 flex-col p-10">
              {tags.map((tag) => (
                <li key={tag.id} className="flex flex-row gap-2">
                  <div
                    className={`flex gap-2 ${tag.color} text-black rounded-xl p-1 text-sm`}
                  >
                    {tag.tags}
                  </div>
                  <h1>
                    :{" "}
                    {boxes.filter((box) => box.tags.includes(tag.tags)).length}
                  </h1>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
