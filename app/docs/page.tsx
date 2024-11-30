"use client";

import { AppSidebar } from "../components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useState } from "react";
import Introduction from "../components/docs/introduction";
import ProjectStructure from "../components/docs/project-structure";
import DataFetching from "../components/docs/data-fetching";
import Routing from "../components/docs/routing";
import FileConventions from "../components/docs/file-conventions";
import Components from "../components/docs/components";

const componentMap = {
  Introduction,
  ProjectStructure,
  DataFetching,
  Routing,
  FileConventions,
  Components,
};

type ComponentName = keyof typeof componentMap;

export default function Docs() {
  const [activeComponent, setActiveComponent] = useState<ComponentName>("Introduction");
  const ActiveComponent = componentMap[activeComponent];

  return (
    <SidebarProvider>
      <div className="flex">
        <AppSidebar setActiveComponent={setActiveComponent} />
        <main className="min-h-screen flex flex-col items-center justify-center relative flex-1">
          <h1 className="text-4xl font-bold mt-10">Documentation</h1>
          <ActiveComponent />
          <p className="mt-4">
            Welcome to the documentation page. Here you will find all the
            necessary information.
          </p>
        </main>
      </div>
    </SidebarProvider>
  );
}
