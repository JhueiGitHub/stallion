"use client";

import React, { createContext, useContext, useState } from "react";

// Define the context value type
interface DocsContextType {
  showDocs: boolean;
  setShowDocs: React.Dispatch<React.SetStateAction<boolean>>;
}

// Update the createContext with the correct type
const DocsContext = createContext<DocsContextType | null>(null);

export const DocsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [showDocs, setShowDocs] = useState(false);

  return (
    <DocsContext.Provider value={{ showDocs, setShowDocs }}>
      {children}
    </DocsContext.Provider>
  );
};

export const useDocs = () => {
  return useContext(DocsContext);
};
