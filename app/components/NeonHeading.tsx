// File: components/NeonHeading.tsx
import React from "react";

interface NeonHeadingProps {
  text: string;
}

const NeonHeading: React.FC<NeonHeadingProps> = ({ text }) => {
  return (
    <h2
      className="
      text-[5.2rem] font-extralight italic text-white
      py-6 px-10 my-3
      border-[0.16rem] border-white rounded-[0.8rem]
      uppercase
      animate-[flicker_1.5s_infinite_alternate]
      neon-glow
    "
    >
      {text}
    </h2>
  );
};

export default NeonHeading;
