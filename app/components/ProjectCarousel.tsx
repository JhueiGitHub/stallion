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
    src: "/media/orion.png",
    alt: "Project 1",
    link: "https://orionos.net",
  },
  {
    id: 2,
    src: "/media/so.png",
    alt: "Project 2",
    link: "https://sonutrition.co.uk",
  },
  {
    id: 3,
    src: "/media/dopa.png",
    alt: "Project 3",
    link: "",
  },
  {
    id: 4,
    src: "/media/darkrun.png",
    alt: "Project 4",
    link: "",
  },
  {
    id: 5,
    src: "/media/ares.png",
    alt: "Project 5",
    link: "https://matthewsheehan.wixsite.com/aresmc",
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
    <div className="relative w-[919px] h-[597px] opacity-100">
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
            className="opacity-80"
          />
        </Link>
      </motion.div>
      <button
        onClick={prevSlide}
        className="absolute left-[-60px] top-1/2 transform -translate-y-1/2 text-[#152020]  hover:text-[#4C4F69]/45 transition-colors"
        aria-label="Previous project"
      >
        <ChevronLeft size={48} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-[-60px] top-1/2 transform -translate-y-1/2 text-[#152020]  hover:text-[#4C4F69]/45  transition-colors"
        aria-label="Next project"
      >
        <ChevronRight size={48} />
      </button>
    </div>
  );
}
