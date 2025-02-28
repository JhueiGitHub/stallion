import { motion } from "framer-motion";
import Image from "next/image";
import NavBar from "./NavBar";
import NeonHeading from "./NeonHeading";
import TechStack from "./TechStack";

export default function Documentation() {
  return (
    <div className="inset-0 bg-red-500 text-[#CCCCCC] z-50 min-h-screen w-full">
      <main className="min-h-screen w-full flex flex-col items-center justify-center bg-red-500">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/media/bgdocs.png"
            alt="Background"
            fill
            className="object-fill object-top"
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
        <div className="absolute top-0 z-10 mt-[270px] flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <NeonHeading text="DOCS" />
          </motion.div>
        </div>
      </main>
    </div>
  );
}
