import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";
import Footer from "./Footer";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex bg-background min-h-screen font-sans text-foreground overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-20 relative z-0">
        <Navbar />
        <main className="flex-1 overflow-y-auto overflow-x-hidden relative">
          <div
            className="absolute inset-0 z-[-1] opacity-20 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)',
              backgroundSize: '24px 24px',
            }}
          />
          {children}
          <Footer />
        </main>
      </div>
    </div>
  );
};
