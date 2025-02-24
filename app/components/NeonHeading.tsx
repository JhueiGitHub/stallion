// File: components/NeonHeading.tsx
import React from "react";

interface NeonHeadingProps {
  text: string;
}

const NeonHeading: React.FC<NeonHeadingProps> = ({ text }) => {
  return (
    <h2
      className="
      text-[3.3rem] font-extralight italic text-white
      py-[12px] px-[30px] my-3
      border-[0.16rem] border-white rounded-[12px]
      uppercase
      animate-[flicker_1.5s_infinite_alternate]
      neon-glow mb-[90px] opacity-90
    "
    >
      {text}
    </h2>
  );
};

export default NeonHeading;
