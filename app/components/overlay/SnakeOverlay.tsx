"use client";

import { useEffect, useState } from "react";

const GRID_SIZE = 20; // Pixelgröße der Bewegung
const WIDTH = 200; // Anzahl der Spalten (Breite des Spielfelds)
const HEIGHT = 100; // Anzahl der Reihen (Höhe des Spielfelds)
const INITIAL_SNAKE = [{ x: 50, y: 20 }]; // Startposition

export default function SnakeOverlay({
  children,
}: {
  children: React.ReactNode;
}) {
  const [snake, setSnake] = useState(INITIAL_SNAKE);

  // Zufällige Bewegungen: Oben, Unten, Links, Rechts
  const getRandomDirection = (currentHead: { x: number; y: number }) => {
    const directions = [
      { x: 5, y: 0 }, // Rechts
      { x: -5, y: 0 }, // Links
      { x: 0, y: 5 }, // Unten
      { x: 0, y: -5 }, // Oben
    ];

    // Filtere nur gültige Richtungen, damit die Schlange nicht rausgeht
    const validDirections = directions.filter((dir) => {
      const newX = currentHead.x + dir.x;
      const newY = currentHead.y + dir.y;
      return newX >= 0 && newX < WIDTH && newY >= 0 && newY < HEIGHT;
    });

    return validDirections[Math.floor(Math.random() * validDirections.length)];
  };

  useEffect(() => {
    const moveSnake = () => {
      setSnake((prevSnake) => {
        const newDirection = getRandomDirection(prevSnake[0]);
        const newHead = {
          x: prevSnake[0].x + newDirection.x,
          y: prevSnake[0].y + newDirection.y,
        };

        return [newHead, ...prevSnake.slice(0, -1)]; // Bewegung aktualisieren
      });
    };

    const interval = setInterval(moveSnake, 500); // Bewegungsgeschwindigkeit
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-[-5]">
      {children}
      <div className="absolute inset-0">
        {snake.map((segment, index) => (
          <div
            key={index}
            className="w-[3vw] h-[5vh] bg-[#004f79] border-2 border-[#0070ad] absolute"
            style={{
              left: `${segment.x * GRID_SIZE}px`,
              top: `${segment.y * GRID_SIZE}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
