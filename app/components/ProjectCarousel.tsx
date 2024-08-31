// File: components/ProjectCarousel.js
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    src: "/media/port1.png",
    alt: "Project 1",
    link: "https://www.stallionarchitecture.co.uk",
  },
  {
    id: 2,
    src: "/media/port2.png",
    alt: "Project 2",
    link: "https://sonutrition.framer.ai",
  },
];

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  return (
    <div className="relative w-[919px] h-[597px] opacity-87">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full"
      >
        <Link
          href={projects[currentIndex].link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={projects[currentIndex].src}
            alt={projects[currentIndex].alt}
            fill
            style={{ objectFit: "cover" }}
          />
        </Link>
      </motion.div>
      <button
        onClick={prevSlide}
        className="absolute left-[-60px] top-1/2 transform -translate-y-1/2 text-green-500 hover:text-green-400 transition-colors"
        aria-label="Previous project"
      >
        <ChevronLeft size={48} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-[-60px] top-1/2 transform -translate-y-1/2 text-green-500 hover:text-green-400 transition-colors"
        aria-label="Next project"
      >
        <ChevronRight size={48} />
      </button>
    </div>
  );
}
