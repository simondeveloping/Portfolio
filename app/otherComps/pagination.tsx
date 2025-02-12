"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";
export function PageNavigation() {
  const [currentPage, setCurrentPage] = useState(1);

  // Beispielhafte Daten für Boxen
  const allBoxes = [
    {
      name: "Pinguin",
      link: "https://example.com/pinguin",
      description:
        "This is for people who want to approach someone but don't know how :)",
    },
    {
      name: "Incoming",
      link: "https://example.com/test2",
      description: "Not finish yet",
    },
    {
      name: "Incoming",
      link: "https://example.com/test3",
      description: "Not finish yet",
    },
    {
      name: "Incoming",
      link: "https://example.com/test4",
      description: "Not finish yet",
    },
    {
      name: "Incoming",
      link: "https://example.com/test3",
      description: "Not finish yet",
    },
    {
      name: "Incoming",
      link: "https://example.com/test4",
      description: "Not finish yet",
    },
  ];

  // Anzahl der Boxen, die pro Seite angezeigt werden sollen
  const boxesPerPage = 2;

  // Berechne die Boxen, die angezeigt werden sollen
  const indexOfLastBox = currentPage * boxesPerPage;
  const indexOfFirstBox = indexOfLastBox - boxesPerPage;
  const currentBoxes = allBoxes.slice(indexOfFirstBox, indexOfLastBox);

  // Funktion zum Wechseln zur nächsten Seite
  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    const maxPage = Math.ceil(allBoxes.length / boxesPerPage);
    if (currentPage < maxPage) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  // Funktion zum Wechseln zur vorherigen Seite
  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  // Funktion zum springen zur ersten Seite
  const handleFirst = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentPage(1);
  };
  return (
    <div>
      <div className="flex w-auto items-center justify-center gap-5 flex-col">
        <div className="gap-5 flex flex-row">
          {currentBoxes.map((box, index) => (
            <a
              key={index}
              className="p-5 h-[30vh] w-[30vh] flex rounded-xl bg-white justify-center items-center text-black text-xl flex-col gap-2 hover:scale-105 transition-transform duration-500 ease-in-out"
              href={box.link}
            >
              <div className="flex flex-row">
                {box.name} <span className="text-cyan-500 text-2xl">/</span>
              </div>
              <div className="text-base">{box.description}</div>
            </a>
          ))}
        </div>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" onClick={handlePrev} />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" onClick={handleFirst}>
                {currentPage}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" onClick={handleNext} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
