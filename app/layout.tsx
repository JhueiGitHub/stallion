import "./globals.css";
import NavBar from "./components/NavBar";
import { DocsProvider } from "./components/DocsContext";

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
    <html lang="en">
      <body>
        <DocsProvider>
          <NavBar />
          {children}
        </DocsProvider>
      </body>
    </html>
  );
}
