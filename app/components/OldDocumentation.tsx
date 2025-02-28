import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import Introduction from "./docs/introduction";
import ProjectStructure from "./docs/project-structure";
import DataFetching from "./docs/data-fetching";
import Routing from "./docs/routing";
import FileConventions from "./docs/file-conventions";
import Components from "./docs/components";

const componentMap = {
  Introduction,
  ProjectStructure,
  DataFetching,
  Routing,
  FileConventions,
  Components,
};

type ComponentName = keyof typeof componentMap;

export default function Documentation() {
  const [activeComponent, setActiveComponent] =
    useState<ComponentName>("Introduction");

  const ActiveComponent = componentMap[activeComponent];

  return (
    <SidebarProvider>
      <div className="fixed inset-0 bg-[#010203] text-[#CCCCCC] z-50 flex">
        <AppSidebar setActiveComponent={setActiveComponent} />
        <main
          className="flex-1 p-8"
          style={{
            border: "0.6px solid rgba(255, 255, 255, 0.09)",
            borderRadius: "4px",
          }}
        >
          <h1 className="text-4xl font-bold mb-4" style={{ fontWeight: 81 }}>
            Documentation
          </h1>
          <ActiveComponent />
          <button
            className="mt-4 p-2 bg-red-500 text-white rounded"
            onClick={() => window.location.reload()} // Close the documentation
          >
            Close
          </button>
        </main>
      </div>
    </SidebarProvider>
  );
}
