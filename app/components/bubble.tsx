import { motion } from "framer-motion";

export default function Bubble({
  color1,
  color2,
  top,
  left,
}: {
  color1: string;
  color2: string;
  top: number;
  left: number;
}) {
  return (
    <div className="absolute w-full">
      <motion.div
        className={`absolute ${color1} h-[20vh] w-[20vh] left-${left} top-${top}  z-10 rounded-3xl`}
        animate={{
          scaleX: [1, 1.1, 1.1, 1],
          scaleY: [1, 0.9, 1.2, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
        }}
      ></motion.div>

      <motion.div
        className={`absolute ${color2} h-[20vh] w-[20vh] left-${
          left + 10
        } top-${top + 10}
       
         z-10 rounded-3xl`}
        animate={{
          scaleX: [1, 1.1, 1.2, 1],
          scaleY: [1, 1.1, 0.9, 1],
          rotate: [0, -5, 5, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
        }}
      ></motion.div>
    </div>
  );
}
