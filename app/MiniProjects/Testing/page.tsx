"use client";
import { database } from "@/lib/firebase";
import PrivateRoute from "../../PrivateRoute";
import { useState } from "react";
import ReactConfetti from "react-confetti";
import { useWindowSize } from "react-use";
import { ref, runTransaction } from "firebase/database";

export default function Testing() {
  const [heading, setHeading] = useState("Will you go out with me?");
  const [noCounter, setNoCounter] = useState(0);
  const [isConfetti, setIsConfetti] = useState(false);
  const { width, height } = useWindowSize();

  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });

  const yesRef = ref(database, "pinguin/yesCounter");

  function yes() {
    setHeading("Yay! Date time 🎉");
    setIsConfetti(true);
    runTransaction(yesRef, (counter) => (!counter ? 1 : counter + 1));
  }

  const noAnswers = [
    "Please, I'm desperate 😔",
    "Just press yes 😢",
    "I'm sorry, I'll stop bothering you 😔",
    "OKAY IT'S ENOUGH! 😭",
    "Fuk yu! 😡",
  ];

  const noRef = ref(database, "pinguin/noCounter");

  function no() {
    if (noCounter < noAnswers.length) {
      setHeading(noAnswers[noCounter]);
    } else {
      setHeading("You're mean 😭");
    }
    setNoCounter(noCounter + 1);
    runTransaction(noRef, (counter) => (!counter ? 1 : counter + 1));

    moveNoButton();
  }

  function moveNoButton() {
    const buttonWidth = 120; // Geschätzte Button-Breite
    const buttonHeight = 50; // Geschätzte Button-Höhe

    const maxX = width - buttonWidth - 200; // Verhindert Überlaufen nach rechts
    const maxY = height - buttonHeight - 200; // Verhindert Überlaufen nach unten

    const randomX = Math.max(0, Math.min(maxX, Math.random() * maxX) / 3);
    const randomY = Math.max(0, Math.min(maxY, Math.random() * maxY) / 3);

    setNoButtonPosition({ x: randomX, y: randomY });
  }

  return (
    <PrivateRoute>
      <div>
        {isConfetti && <ReactConfetti width={width} height={height} />}
        <div className="bg-[#f0d1e6] z-500 fixed inset-0 flex justify-center items-center flex-col h-screen w-screen">
          <div className="text-4xl text-black font-bold p-5">{heading}</div>
          <img src="/goOutWithMe.gif" className="max-w-[300px] max-h-[300px]" />
          <div className="relative w-[30vw] h-40 flex justify-center items-center">
            <button
              className="border-2 rounded-xl p-5 border-black hover:scale-105 absolute right-1/2"
              onClick={yes}
            >
              Yes!😃
            </button>
            <button
              className="border-2 rounded-xl p-5 border-black hover:scale-105 absolute transition-all duration-300 left-1/2"
              onClick={no}
              style={{
                transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
              }}
            >
              No 😥
            </button>
          </div>
        </div>
      </div>
    </PrivateRoute>
  );
}
