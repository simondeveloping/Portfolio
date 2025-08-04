"use client";
import { ref, onValue } from "firebase/database";
import { database } from "@/lib/firebase";
import { useState } from "react";
import { useEffect } from "react";
import { ArrowRightLeft } from "lucide-react";
import Link from "next/link";
export default function Rps() {
  const [nameInput, setNameInput] = useState("");
  const [name, setName] = useState("");
  const [roomData, setRoomData] = useState<
    Record<string, { player1?: string; player2?: string }>
  >({});
  const rooms = ["match1", "match2", "match3"];
  useEffect(() => {
    const savedName = localStorage.getItem("rpsName");
    if (savedName) {
      setName(savedName);
    }
    const unsubscribe = rooms.map((room) => {
      const roomRef = ref(database, `rps/${room}`);
      return onValue(roomRef, (snapshot) => {
        setRoomData((prevData) => ({
          ...prevData,
          [room]: snapshot.val() || {},
        }));
      });
    });
    return () => {
      unsubscribe.forEach((unsub) => unsub());
    };
  }, []);
  const handleSetName = () => {
    localStorage.setItem("rpsName", nameInput);
    setName(nameInput);
  };
  return (
    <div className="flex">
      {!name ? (
        <div className="h-screen w-screen flex bg-blue-200 items-center justify-center">
          <div className="flex justify-center items-center flex-col gap-5">
            <h1 className="text-2xl">Please enter your name</h1>
            <input
              className="rounded-xl h-[5vh] w-[15vw] p-5"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
            />
            <button onClick={handleSetName}>Submit</button>
          </div>
        </div>
      ) : (
        <div className="flex h-screen w-screen ">
          <div className="flex p-10 bg-orange-200 items-center w-[20vw] flex-col gap-10 pt-20">
            <h1 className="text-xl text-red-500">Game: Rock Paper Scissors</h1>
            <div className="text-xl">
              Player: <span className="text-red-500">{name}</span>
            </div>
            <button
              onClick={() => {
                localStorage.removeItem("rpsName");
                setName("");
              }}
              className="text-xl underline text-blue-400"
            >
              Name ändern
            </button>
          </div>
          <div className="w-[80vw] flex justify-center flex-col items-center">
            <div className="flex-col flex justify-center items-center gap-10">
              <h1 className="text-2xl">Public Servers</h1>
              <div className="flex flex-row gap-10">
                {rooms.map((room) => {
                  const data = roomData[room] || {};
                  const totalPlayers =
                    (data.player1 ? 1 : 0) + (data.player2 ? 1 : 0);
                  return (
                    <Link
                      key={room}
                      className="flex flex-row gap-10"
                      href={`/games/rps/${room}?name=${encodeURIComponent(
                        name
                      )}`}
                    >
                      <div className="h-auto w-[20vw] border border-2 border-black rounded-xl p-2 hover:scale-105">
                        <h1>{room}</h1>
                        Player: {totalPlayers} / 2
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
