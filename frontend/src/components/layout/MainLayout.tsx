
import type { ReactNode } from "react";

import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({
  children,
}: MainLayoutProps) {
  return (
    <div className="app-layout">
      <Header />
      <Navigation />

      <main className="main-content">
        {children}
      </main>

      <Footer />
    </div>
  );
}
