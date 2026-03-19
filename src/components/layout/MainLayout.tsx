import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";
import Footer from "./Footer";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex bg-background min-h-screen font-sans text-foreground">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 ml-20">
        <Navbar />
        <main className="flex-1 overflow-y-auto overflow-x-hidden">
          {children}
          <Footer />
        </main>
      </div>
    </div>
  );
};
