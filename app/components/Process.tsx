import { motion } from "framer-motion";
import Image from "next/image";
import NavBar from "./NavBar";

export default function Documentation() {
  return (
    <div className="inset-0 bg-red-500 text-[#CCCCCC] z-50 flex min-h-screen w-full">
      <main className="min-h-screen w-full flex flex-col items-center justify-center bg-red-500">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/media/bgdemon.png"
            alt="Background"
            fill
            className="object-cover object-top"
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
        <button
          className="fixed top-[15px] right-[45px] z-100 mt-4 p-2 bg-red-500 text-white rounded"
          onClick={() => window.location.reload()} // Close the documentation
        >
          Close
        </button>
      </main>
    </div>
  );
}
