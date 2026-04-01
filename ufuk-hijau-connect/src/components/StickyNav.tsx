import { useState, useEffect } from "react";

const StickyNav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-[60px] flex items-center justify-between px-4 sm:px-6 transition-shadow"
      style={{
        backgroundColor: "#0A4A2A",
        boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.3)" : "none",
      }}
    >
      <div>
        <span className="text-white font-bold text-base sm:text-lg">TUK Ufuk Hijau</span>
        <span className="block text-[11px] font-medium" style={{ color: "#F6C90E" }}>
          TUK BNSP Resmi · Surakarta
        </span>
      </div>
      <span />
    </nav>
  );
};

export default StickyNav;
