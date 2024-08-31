// File: app/page.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import NavBar from "./components/NavBar";
import ProjectCarousel from "./components/ProjectCarousel";
import TechStack from "./components/TechStack";
import NeonHeading from "./components/NeonHeading";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/media/bg.png"
          alt="Background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <NavBar />
      </motion.div>
      <motion.div
        className="z-10 mt-[168px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <ProjectCarousel />
      </motion.div>
      <div className="z-10 mt-24 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <NeonHeading text="Tech Stack" />
        </motion.div>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <TechStack />
        </motion.div>
      </div>
    </main>
  );
}
