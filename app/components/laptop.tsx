// components/Laptop.tsx
import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const Laptop: React.FC = () => {
  const { scene } = useGLTF("/laptop.glb"); // Lade dein Modell
  const laptopRef = useRef<any>(null);

  useEffect(() => {
    if (laptopRef.current) {
      laptopRef.current.rotation.set(0, 0, 0); // X: leicht nach unten, Y: leicht nach rechts
    }
  }, []);

  return (
    <primitive
      ref={laptopRef}
      object={scene}
      scale={0.02}
      position={[-1, 0, 0]}
    />
  );
};

export default Laptop;
