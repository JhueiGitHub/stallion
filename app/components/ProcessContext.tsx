"use client";

import React, { createContext, useContext, useState } from "react";

// Define the context value type
interface ProcessContextType {
  showProcess: boolean;
  setShowProcess: React.Dispatch<React.SetStateAction<boolean>>;
}

// Update the createContext with the correct type
const ProcessContext = createContext<ProcessContextType | null>(null);

export const ProcessProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [showProcess, setShowProcess] = useState(false);

  return (
    <ProcessContext.Provider value={{ showProcess, setShowProcess }}>
      {children}
    </ProcessContext.Provider>
  );
};

export const useProcess = () => {
  return useContext(ProcessContext);
};
