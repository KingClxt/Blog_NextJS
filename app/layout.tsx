
import NavBar from "@/components/NavBar";
import "./globals.css";
import Footer from "@/components/Footer";
import clsx from "clsx";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={clsx("h-full flex flex-col bg-zinc-100")}
      >
        <NavBar />
      <div className="grow mt-[4rem] p-5">
        {children}
      </div>
      <Footer />
      </body>
    </html>
  );
}
