// File: app/page.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import NavBar from "./components/NavBar";
import ProjectCarousel from "./components/ProjectCarousel";
import TechStack from "./components/TechStack";
import NeonHeading from "./components/NeonHeading";
import ServiceCard from "./components/ServiceCard";
import Documentation from "./components/Documentation";
import { useDocs } from "./components/DocsContext";

export default function Home() {
  const { showDocs } = useDocs() || { showDocs: false };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/media/bg.png"
          alt="Background"
          fill
          className="object-cover object-top"
          sizes="100vw"
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
        className="z-10 mt-[168px] pb-48"
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
          className="mt-8 pb-72"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <TechStack />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <NeonHeading text="Services" />
        </motion.div>
        <motion.div
          className="mt-8 flex flex-row justify-center space-x-8 w-full px-4 pb-72 h-439"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <ServiceCard title="Catalyst Package" price="£349" />
          <ServiceCard title="Stallion Package" price="£999" />
          <ServiceCard title="Empire Package" price="£2499" />
        </motion.div>
      </div>
      {showDocs && <Documentation />}
    </main>
  );
}
