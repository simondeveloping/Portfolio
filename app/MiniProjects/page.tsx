"use client";
import Image from "next/image";
import { useState } from "react";
export default function MiniProjects() {
  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState<{ [key: string]: boolean }>({
    "Just for fun": false,
    Private: false,
    Useful: false,
  });

  const boxes = [
    {
      id: "1",
      name: "Email Reminder",
      description:
        "The project is an email reminder that sends an email to the user with a predefined text on a specific date. This ensures that important reminders are never forgotten.",
      pic: "/test.jpg",
      tag: "Useful",
    },
    {
      id: "2",
      name: "Pinguin",
      description:
        "This is for people who want to approach someone but don't know how :)",
      pic: "/test.jpg",
      tag: "Just for fun",
    },
    {
      id: "3",
      name: "Yes Or No",
      description: "This is for people with decision-making problems",
      pic: "/test.jpg",
      tag: "Just for fun",
    },
    {
      id: "4",
      name: "Christmas Timer",
      description: "How many days left till christmas?",
      pic: "/test.jpg",
      tag: "Just for fun",
    },
    {
      id: "5",
      name: "test",
      description: "test",
      pic: "/test.jpg",
      tag: "Private",
    },
  ];
  const tags = [
    {
      id: "1",
      tag: "Just for fun",
      color: "bg-blue-200",
    },
    { id: "2", tag: "Private", color: "bg-red-200" },
    { id: "3", tag: "Useful", color: "bg-orange-400" },
  ];
  const tagColor: { [key: string]: string } = {
    "Just for fun": "border-blue-200",
    Private: "border-red-200",
    Useful: "border-orange-400",
  };
  const toggleTagSelection = (tag: string) => {
    setSelectedTags((prev) => ({
      ...prev,
      [tag]: !prev[tag],
    }));
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };
  const filteredBoxes = boxes.filter((box) => {
    return (
      (box.name.toLowerCase().includes(search.toLowerCase()) ||
        box.description.toLowerCase().includes(search.toLowerCase()) ||
        box.tag.toLowerCase().includes(search.toLowerCase())) &&
      (selectedTags[box.tag] || !Object.values(selectedTags).includes(true))
    );
  });

  return (
    <div>
      <div className="flex flex-row justify-around">
        <div className="w-2/4 h-auto relative">
          <div className="sticky top-20 flex flex-col gap-3 justify-start items-center">
            <h1 className="text-lg">Search for project</h1>
            <input
              onChange={handleChange}
              value={search}
              className="text-black border-2 border-violet-500 rounded-xl h-10 w-64 p-4 focus:outline-none focus:ring-4 focus:ring-violet-500 focus:border-violet-500"
              type="text"
              placeholder="Search"
            ></input>
            <div className="h-[20vh]">
              <div className="flex flex-col justify-center items-center gap-2 text-black">
                <h1 className="text-white text-xl">Tags</h1>
                {tags.map((tag) => (
                  <div key={tag.id} className={`p-2 rounded-xl ${tag.color}`}>
                    {tag.tag}
                  </div>
                ))}
              </div>
            </div>
            <h1 className="text-xl">Select Tags</h1>
            {tags.map((tag) => (
              <div
                key={tag.id}
                className={`flex flex-row gap-2 p-2 text-black text-sm ${tag.color} rounded-xl`}
              >
                <input
                  type="checkbox"
                  checked={selectedTags[tag.tag]}
                  onChange={() => toggleTagSelection(tag.tag)}
                ></input>
                <h1>{tag.tag}</h1>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-10 justify-start items-center w-[80vw] h-auto p-4">
          {filteredBoxes.map((box) => (
            <div key={box.id} className="w-full h-auto">
              <div
                className={`cursor-pointer border-2 ${
                  tagColor[box.tag]
                } rounded-xl duration-300 hover:shadow-md hover:shadow-white hover:scale-105`}
              >
                <div className="w-[45vw] h-[30vh] p-6 flex flex-row">
                  <div className="w-1/2 flex gap-5 flex-col">
                    <h1 className="text-3xl">{box.name}</h1>
                    <p className="text-xl ">{box.description}</p>
                  </div>
                  <div className="w-1/2 bg-cover bg-no-repeat overflow-hidden relative flex justify-center items-center">
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
            </div>
          ))}
        </div>
        <div className="w-2/4"></div>
      </div>
    </div>
  );
}
