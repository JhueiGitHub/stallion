import "./globals.css";
import NavBar from "./components/NavBar";
import { DocsProvider } from "./components/DocsContext";
import OTPWrapper from "./components/custom-otp-input";
import { ProcessProvider } from "./components/ProcessContext";

export const metadata = {
  title: "My Portfolio",
  description: "Welcome to my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black h-screen w-screen">
      <body>
        <DocsProvider>
          <ProcessProvider>
            <NavBar />
            {/* <OTPWrapper> */}
            {children}
            {/* </OTPWrapper> */}
          </ProcessProvider>
        </DocsProvider>
      </body>
    </html>
  );
}
