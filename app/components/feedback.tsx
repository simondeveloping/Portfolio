"use client";
import { Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { database, ref, set, get } from "@/lib/firebase";
import { useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Feedback() {
  const [rating, setRating] = useState(4);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [wisdom, setWisdom] = useState("");
  type FeedbackItem = {
    rating: number;
    name: string;
    message: string;
    wisdom: string;
  };

  const [feedback, setFeedback] = useState<FeedbackItem[]>([]);
  const submit = () => {
    const timestamp = new Date();
    const finalName = name === "" ? "Anonymous" : name;
    const feedbackRef = ref(database, `feedback/${timestamp.toString()}`);

    set(feedbackRef, {
      rating: rating,
      name: finalName,
      message: message,
      wisdom: wisdom,
    });
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value); // Den Wert des Inputs im State aktualisieren
  };
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value); // Den Wert des Inputs im State aktualisieren
  };
  const handleWisdomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWisdom(e.target.value); // Den Wert des Inputs im State aktualisieren
  };
  const getFeedback = () => {
    get(ref(database, "feedback/")).then((snapshot) => {
      if (snapshot.exists()) {
        const feedback = snapshot.val();
        setFeedback(Object.values(feedback));
      }
    });
  };
  useEffect(() => {
    getFeedback();
  }, []);
  return (
    <div>
      <div className=" w-full h-auto flex flex-col lg:flex-row p-10 gap-10">
        <div className="w-full lg:w-[40vw] max-h-[65vh] p-5 border-2 border-white rounded-3xl flex flex-col gap-2 dark:shadow-[9px_9px_0px_0px_#ffffff] shadow-[9px_9px_0px_0px_#000000]">
          <div className="flex flex-row gap-2">
            {[1, 2, 3, 4, 5].map((num) => (
              <Star
                key={num}
                size={30}
                color={rating >= num ? "yellow" : "gray"}
                onClick={() => setRating(num)}
              />
            ))}
          </div>
          <Input placeholder="Name" value={name} onChange={handleNameChange} />
          <Textarea
            placeholder="Your message here"
            className="min-h-[20vh]"
            value={message}
            onChange={handleMessageChange}
          ></Textarea>
          <Input
            placeholder="Spit Some Wisdom"
            value={wisdom}
            onChange={handleWisdomChange}
          />
          <Button
            onClick={() => {
              toast("Thank you for your feedback!", {
                description: "Your feedback is valuable to me.",
              });
              submit(); // submit-Funktion ausführen
            }}
          >
            Submit Feedback
          </Button>
        </div>
        <div className="w-full">
          <div className="flex gap-5 justify-center items-center flex-col">
            <button
              onClick={getFeedback}
              className="bg-blay dark:bg-white text-white dark:text-blay rounded-xl  p-2 hover:scale-105"
            >
              Refresh
            </button>

            <ScrollArea className="h-[70vh] w-full lg:w-3/4">
              {feedback.map((feedback, index) => (
                <div
                  key={index}
                  className="flex flex-col max-w-[75vw] flex-wrap border border-white rounded-md p-2 dark:shadow-[2px_2px_0px_0px_#ffffff] shadow-[2px_2px_0px_0px_#000000] gap-2 mt-5"
                >
                  <div className="flex flex-row gap-2">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <Star
                        key={num}
                        size={15}
                        color={feedback.rating >= num ? "yellow" : "gray"}
                      />
                    ))}
                  </div>

                  <div className="">{feedback.message}</div>
                  <div className="">
                    <span className="text-red-400">From: </span> {feedback.name}
                  </div>

                  <div className="">
                    {feedback.wisdom && (
                      <span className="text-blue-300">Wisdom: </span>
                    )}
                    {feedback.wisdom === "" ? "" : feedback.wisdom}
                  </div>
                </div>
              ))}
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  );
}
