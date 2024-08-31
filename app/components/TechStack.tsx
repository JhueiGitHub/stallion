// File: components/TechStack.tsx
import { motion } from "framer-motion";
import Image from "next/image";

const techIcons = [
  { src: "/icons/next.png", left: 190, top: 0 },
  { src: "/icons/framer.png", left: 0, top: 113 },
  { src: "/icons/tailwind.png", left: 190, top: 226 },
  { src: "/icons/figma.png", left: 380, top: 113 },
  { src: "/icons/webGl.png", left: 570, top: 0 },
  { src: "/icons/react.png", left: 570, top: 226 },
  { src: "/icons/midjourney.png", left: 760, top: 113 },
];

export default function TechStack() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-[935px] h-[377px] flex justify-center items-center"
    >
      <div className="relative w-full h-full">
        {techIcons.map((icon, index) => (
          <div
            key={index}
            className="absolute w-[175px] h-[151px]"
            style={{ left: `${icon.left}px`, top: `${icon.top}px` }}
          >
            <Image
              src={icon.src}
              alt={`Tech ${index + 1}`}
              width={175}
              height={151}
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
