// File: components/NavBar.tsx
"use client";

import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { useDocs } from "./DocsContext"; // Import the context
import { useProcess } from "./ProcessContext"; // Import the context

export default function NavBar() {
  const { setShowDocs } = useDocs() || { setShowDocs: () => {} }; // Provide a default function
  const { setShowProcess } = useProcess() || { setShowProcess: () => {} }; // Provide a default function
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 w-full h-[104px] bg-black bg-opacity-30 flex justify-center items-center z-50 gap-[60px]"
    >
      <div className="ml-4">
        <button
          className="text-[#223D3D] hover:text-[#4C4F69]/45 text-[24px] font-exemplar-pro font-normal"
          onClick={() => setShowDocs(true)} // Pass the required argument
        >
          Studio
        </button>
      </div>
      <div
        className="relative w-[126px] h-[87px] translate-y-1 ml-4"
        onClick={() => window.location.reload()}
      >
        <Image
          src="/media/logo.png"
          alt="Logo"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>
      <div className="ml-4">
        <button
          className="text-[#223D3D] hover:text-[#4C4F69]/45 text-[24px] font-exemplar-pro font-normal"
          onClick={() => setShowProcess(true)} // Pass the required argument
        >
          Process
        </button>
      </div>
    </motion.nav>
  );
}
