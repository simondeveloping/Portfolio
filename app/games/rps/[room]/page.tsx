"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  set,
  ref,
  onValue,
  get,
  update,
  onDisconnect,
} from "firebase/database";
import { useSearchParams } from "next/navigation";
import { database } from "@/lib/firebase";
export default function Room() {
  const { room } = useParams();
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "Unknown Player";
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [player1Points, setPlayer1Points] = useState(0);
  const [player2Points, setPlayer2Points] = useState(0);
  useEffect(() => {
    if (!room) {
      return;
    }
    const gameRef = ref(database, `rps/${room}`);
    get(gameRef).then((snapshot) => {
      if (!snapshot.exists()) {
        set(gameRef, {
          player1: "",
          player2: "",
          player1Points: 0,
          player2Points: 0,
          winner: "",
        });
        setPlayer1(name);
        const player1Ref = ref(database, `rps/${room}/player1`);
        onDisconnect(player1Ref).set("");
      } else {
        const data = snapshot.val();
        if (data.player1 === "") {
          update(gameRef, {
            player1: name,
          });
          setPlayer1(name);
          const player1Ref = ref(database, `rps/${room}/player1`);
          onDisconnect(player1Ref).set("");
        } else if (data.player2 === "") {
          update(gameRef, {
            player2: name,
          });
          setPlayer2(name);
          const player2Ref = ref(database, `rps/${room}/player2`);
          onDisconnect(player2Ref).set("");
        } else {
          alert("Room is full, please join another room.");
          window.location.href = "/games/rps";
        }
      }
    });
    const unsubscribe = onValue(gameRef, (snapshot) => {
      const data = snapshot.val();
      if (!data) return;
      setPlayer1(data.player1);
      setPlayer2(data.player2);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="h-screen w-screen flex">
      <div className="h-screen w-screen flex flex-row">
        <div className="w-[20vw] border-r-2 border-black border-dashed flex flex-col gap-10 p-10 items-center">
          <div className="text-3xl">Player: {player1}</div>
          <div className="text-9xl">{player1Points}</div>
        </div>
        <div className="w-[60vw] flex justify-center items-center gap-10">
          <button className="w-[10vw] h-[10vh] border-black border-2 rounded-xl hover:scale-105 font-bold">
            Rock
          </button>
          <button className="w-[10vw] h-[10vh] border-black border-2 rounded-xl hover:scale-105 font-bold">
            Paper
          </button>
          <button className="w-[10vw] h-[10vh] border-black border-2 rounded-xl hover:scale-105 font-bold">
            Scissor
          </button>
        </div>
        <div className="w-[20vw] border-l-2 border-black border-dashed flex flex-col gap-10 p-10 items-center">
          <div className="text-3xl">Player: {player2}</div>
          <div className="text-9xl">{player2Points}</div>
        </div>{" "}
      </div>
    </div>
  );
}
