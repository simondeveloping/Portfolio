"use client";
import ReactConfetti from "react-confetti";
import { useState } from "react";
import { useWindowSize } from "react-use";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { database } from "@/lib/firebase";
import { ref, runTransaction, set } from "firebase/database";

export default function Pinguin() {
  const [isConfetti, setIsConfetti] = useState(false);
  const [isDialog, setIsDialog] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { width, height } = useWindowSize();
  const [suggestionText, setSuggestionText] = useState("");
  const [title, setTitle] = useState("You wanna go on a date with me?");
  const [swtichGif, setSwitchGif] = useState(true);

  const yesRef = ref(database, "pinguin/yesCounter");
  const noRef = ref(database, "pinguin/noCounter");
  const gegenvorschlag = ref(database, "pinguin/gegenvorschlag");
  const terminBestätigt = ref(database, "pinguin/terminBestätigt");

  function handleYes() {
    setIsConfetti(true);
    runTransaction(yesRef, (counter) => (!counter ? 1 : counter + 1));
    setIsOpen(true);
    setSwitchGif(true);
    setTitle("Ich freue mich! :)");
  }
  function handleNo() {
    runTransaction(noRef, (counter) => (!counter ? 1 : counter + 1));
    setTitle("Das bist du! Fuk you :(");
    setSwitchGif(false);
  }

  function handleDialog() {
    setIsDialog(true);
  }

  function handleSendGegenvorschlag() {
    if (suggestionText.trim() === "") return;

    set(gegenvorschlag, suggestionText).then(() => {
      setIsDialog(false);
      setIsOpen(false);
      setSuggestionText("");
      alert("Gegenvorschlag gesendet!");
      setTitle("Ich freue mich! :)");
    });
  }

  function submitVorschlag() {
    setIsOpen(false);
    setTitle("Ich freue mich! :)");
    set(terminBestätigt, true);
    alert("Termin bestätigt!");
  }
  return (
    <div className="w-screen h-screen bg-blue-200 flex flex-col items-center justify-center">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <div className="text-center flex w-full items-center justify-center">
                Terminplanung
              </div>
            </DialogTitle>
            <DialogDescription>
              <div>
                <div className="gap-4 flex flex-col mb-4 border-2 border-black p-4 rounded-xl mt-4">
                  <h1>
                    <span className="font-bold">Wann?:</span> Samstag oder
                    Sonntag / 13 Uhr
                  </h1>
                  <h1>
                    {" "}
                    <span className="font-bold">Wo?:</span> Bei mir zuhause
                  </h1>
                  <h1>
                    {" "}
                    <span className="font-bold">Was?:</span> Tier Dokumentation
                    über Fledermäuse schauen
                  </h1>
                  <h1>
                    {" "}
                    <span className="font-bold">Wer?:</span> Wir beide
                  </h1>
                  <h1>
                    {" "}
                    <span className="font-bold">Wie?:</span> Ich hole dich ab
                  </h1>
                </div>

                <div className="flex flex-row gap-4 justify-center">
                  <button
                    className="rounded-xl border-2 border-black p-2 hover:scale-105 transition-all  hover:bg-green-400"
                    onClick={submitVorschlag}
                  >
                    Termin bestätigen
                  </button>
                  <button
                    className="rounded-xl border-2 border-black p-2 hover:scale-105 transition-all hover:bg-blue-400"
                    onClick={handleDialog}
                  >
                    Gegenvorschlag machen
                  </button>
                </div>
                {isDialog && (
                  <div className="mt-4 gap-4 flex flex-col">
                    <label className="font-bold">Dein Gegenvorschlag:</label>
                    <input
                      type="text"
                      value={suggestionText}
                      onChange={(e) => setSuggestionText(e.target.value)}
                      className="border-2 border-black rounded-xl p-2 w-full"
                    />
                    <button
                      className="rounded-xl border-2 border-black p-2 hover:scale-105 transition-all hover:bg-blue-400"
                      onClick={handleSendGegenvorschlag}
                    >
                      Abschicken
                    </button>
                  </div>
                )}
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {isConfetti && <ReactConfetti width={width} height={height} />}

      <div className="text-center flex justify-center items-center flex-col ">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        {swtichGif && (
          <img src="/goOutWithMe.gif" className="max-w-[300px] max-h-[300px]" />
        )}
        {!swtichGif && (
          <img
            src="/grinch.gif"
            className="max-w-[500px] max-h-[500px] h-[80vh]"
          />
        )}
        <div className="flex flex-row gap-4">
          <button
            onClick={handleYes}
            className="px-6 py-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-all text-black"
          >
            Yes!
          </button>
          <button
            className="px-6 py-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-all text-black"
            onClick={handleNo}
          >
            No!
          </button>
        </div>
      </div>
    </div>
  );
}
