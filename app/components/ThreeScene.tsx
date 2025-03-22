// components/ThreeScene.tsx
import { Canvas, useFrame } from "@react-three/fiber";
import { Box } from "@react-three/drei";

import { OrbitControls } from "@react-three/drei";
// Eine Funktion, die den Würfel animiert
const RotatingCube: React.FC = () => {
  // useFrame wird bei jedem Frame aufgerufen, um die Drehung zu aktualisieren
  useFrame((state) => {
    // Drehung auf der Y-Achse bei jedem Frame erhöhen
    state.scene.rotation.y += 0.01;
    state.scene.rotation.x += 0.01;
  });

  return (
    <Box>
      <meshStandardMaterial color="royalblue" />
    </Box>
  );
};

const ThreeScene: React.FC = () => {
  return (
    <Canvas className="w-full h-screen">
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default ThreeScene;
