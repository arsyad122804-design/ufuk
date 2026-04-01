const tiers = [
  { title: "Jenjang 2 — Entry Level", desc: "Operator Junior & Pelaksana Junior Pemeliharaan PLTS", price: "Mulai Rp 3.000.000" },
  { title: "Jenjang 3 — Pelaksana & Operator Senior", desc: "Pemasangan PJU, Rooftop, SHS, Kelistrikan, Konstruksi Sipil, Operator Senior On/Off-Grid", price: "Mulai Rp 3.500.000" },
  { title: "Jenjang 5–7 — Inspektur, Surveyor & Engineer", desc: "Inspektur Muda & Madya, Surveyor, Engineer Perencanaan, Senior Engineer", price: "Mulai Rp 4.500.000" },
];

const SkemaSection = () => (
  <section id="skema" className="py-16 sm:py-20 px-4" style={{ backgroundColor: "#F9FAFB" }}>
    <div className="max-w-4xl mx-auto text-center">
      <span className="inline-block mb-4 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-primary">SKEMA & HARGA</span>
      <h2 className="font-black mb-3 leading-tight text-foreground" style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)" }}>
        Skema Sertifikasi BNSP PLTS
      </h2>
      <p className="text-muted mb-10 text-sm sm:text-base max-w-xl mx-auto">
        Tersedia untuk semua jenjang — dari operator pemula hingga senior engineer. Hubungi kami untuk rekomendasi skema yang tepat sesuai latar belakang Anda.
      </p>

      <div className="grid sm:grid-cols-3 gap-5">
        {tiers.map((t) => (
          <div key={t.title} className="bg-white border border-border rounded-2xl p-5 sm:p-6 text-left">
            <h3 className="font-bold text-foreground text-sm sm:text-base mb-2">{t.title}</h3>
            <p className="text-xs sm:text-sm text-muted leading-relaxed mb-4">{t.desc}</p>
            <p className="font-bold text-primary text-base sm:text-lg">{t.price}</p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-xs italic text-muted">
        Total 19 skema tersedia. Hubungi kami untuk daftar lengkap dan rekomendasi sesuai kebutuhan Anda.
      </p>
    </div>
  </section>
);

export default SkemaSection;
