import React, { type ReactNode } from "react";
import { MagicParticles } from "@/components/magic-particles";

interface LayoutProps {
  children: ReactNode;
  title: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-900 via-purple-900 to-slate-900 text-white flex flex-col items-center p-4">
      <MagicParticles />

      <header className="w-full max-w-md text-center py-6 z-10">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-pink-500 tracking-widest uppercase drop-shadow-lg">
          {title}
        </h1>
        <div className="h-1 w-24 bg-yellow-500 mx-auto mt-2 rounded-full opacity-50" />
      </header>

      <main className="w-full max-w-md md:max-w-[calc(100vw-2rem)] flex-1 flex flex-col items-center justify-center gap-8">
        {children}
      </main>

      <footer className="py-6 text-xs text-purple-400 opacity-60">
        Andrzejki 2025
      </footer>
    </div>
  );
};
