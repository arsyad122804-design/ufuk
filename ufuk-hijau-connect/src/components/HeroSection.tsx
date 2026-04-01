const badges = [
  "✓ BNSP Resmi", "✓ 19 Skema Tersedia", "✓ Penyaluran Kerja",
  "✓ Jenjang 2–7", "✓ Surakarta, Jateng & DIY",
];

const HeroSection = () => (
  <section
    className="py-16 sm:py-24 px-4 text-center text-white"
    style={{ background: "linear-gradient(180deg, #0A4A2A 0%, #1a5c30 50%, #0f3d20 100%)" }}
  >
    <div className="max-w-3xl mx-auto">
      <span
        className="inline-block mb-6 px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-wider"
        style={{ background: "rgba(246,201,14,0.15)", border: "1px solid rgba(246,201,14,0.4)", color: "#F6C90E" }}
      >
        TUK BNSP Resmi · LSP Energi Terbarukan · Surakarta
      </span>

      <h1
        className="font-black leading-[1.1] mb-6"
        style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)" }}
      >
        Lulus Sertifikasi BNSP Teknisi PLTS.
        <br />
        <span style={{ color: "#F6C90E" }}>Bisa langsung kerja?</span>
        <br />
        <br />
        <span style={{ color: "#F6C90E" }}>Di sini tempatnya.</span>
      </h1>

      <div className="mx-auto mb-8 overflow-hidden rounded-2xl shadow-2xl" style={{ maxWidth: 320, maxHeight: 420 }}>
        <img
          src="/gallery/WhatsApp Image 2026-04-01 at 8.00.00 PM (2).jpeg"
          alt="Dokumentasi Open Lab Energi Mandiri"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 15%" }}
          loading="eager"
        />
      </div>

      <p className="mx-auto mb-8 text-sm sm:text-base leading-relaxed" style={{ maxWidth: 600, color: "rgba(255,255,255,0.85)" }}>
        Satu-satunya TUK di Jateng &amp; DIY yang tidak hanya memberikan sertifikat BNSP — tapi juga menghubungkan peserta yang lolos langsung ke job connecting.
      </p>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {badges.map((b) => (
          <span
            key={b}
            className="px-3 py-1.5 rounded-full text-xs text-white"
            style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
          >
            {b}
          </span>
        ))}
      </div>

      <p className="italic text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
        {"\n"}
      </p>
    </div>
  </section>
);

export default HeroSection;
