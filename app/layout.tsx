import "./globals.css";
import NavBar from "./components/NavBar";
import { DocsProvider } from "./components/DocsContext";
import OTPWrapper from "./components/custom-otp-input";

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
    <html lang="en" className="bg-black">
      <body>
        <DocsProvider>
          <NavBar />
          <OTPWrapper>{children}</OTPWrapper>
        </DocsProvider>
      </body>
    </html>
  );
}
