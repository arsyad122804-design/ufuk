const FooterSection = () => (
  <footer className="py-12 px-4" style={{ backgroundColor: "#0A4A2A" }}>
    <div className="max-w-5xl mx-auto">
      <div className="grid sm:grid-cols-3 gap-8 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
        <div>
          <p className="text-white font-bold mb-1">TUK Ufuk Hijau</p>
          <p>Tempat Uji Kompetensi Resmi BNSP</p>
          <p>LSP Energi Terbarukan</p>
          <p>Surakarta, Jawa Tengah</p>
        </div>
        <div>
          <p className="text-white font-bold mb-1">Kontak</p>
          <p>WhatsApp: +62 85X-XXXX-XXXX</p>
          <p>Email: info@ufukhijau.id</p>
        </div>
        <div>
          <p className="text-white font-bold mb-1">Legalitas</p>
          <p>TUK Resmi LSP Energi Terbarukan</p>
          <p>Terakreditasi BNSP</p>
          <p>SK TUK tersedia atas permintaan</p>
        </div>
      </div>
      <div className="mt-8 pt-6 text-center text-xs" style={{ borderTop: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.5)" }}>
        © 2026 TUK Ufuk Hijau. Semua hak dilindungi.
      </div>
    </div>
  </footer>
);

export default FooterSection;
