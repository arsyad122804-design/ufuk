const cards = [
  { emoji: "🏭", title: "Database Perusahaan Mitra", desc: "Jaringan perusahaan dan vendor PLTS yang aktif membutuhkan tenaga bersertifikat BNSP." },
  { emoji: "📋", title: "Profil Peserta Disalurkan", desc: "Data kompetensi dan sertifikat peserta dikirimkan ke mitra industri yang relevan." },
  { emoji: "🤝", title: "Koneksi Langsung", desc: "Tidak hanya job board — kami berperan aktif menghubungkan peserta ke pemberi kerja." },
  { emoji: "🌐", title: "Jaringan se-Indonesia", desc: "Sertifikat BNSP diakui nasional. Peluang kerja tidak terbatas di Jateng saja." },
];

const PenyaluranSection = () => (
  <section className="py-16 sm:py-20 px-4 text-center text-white" style={{ background: "linear-gradient(135deg, #0A4A2A, #1B6B3A)" }}>
    <div className="max-w-5xl mx-auto">
      <span className="inline-block mb-4 text-[11px] sm:text-xs font-semibold uppercase tracking-wider" style={{ color: "#F6C90E" }}>
        KEUNGGULAN UTAMA YANG TIDAK ADA DI TEMPAT LAIN
      </span>

      <h2 className="font-black mb-4 leading-tight" style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)" }}>
        Bukan Sekadar Sertifikat.
        <br />
        <span style={{ color: "#F6C90E" }}>Kami Sambungkan Kamu ke Industri.</span>
      </h2>

      <p className="mx-auto mb-10 text-sm sm:text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.85)", maxWidth: 600 }}>
        Setelah lulus ujian kompetensi BNSP, peserta TUK Ufuk Hijau masuk ke jaringan penyaluran kerja kami — dihubungkan langsung ke perusahaan, vendor EPC, dan kontraktor PLTS yang aktif mencari tenaga bersertifikat.
      </p>

      <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
        {cards.map((c) => (
          <div
            key={c.title}
            className="rounded-2xl p-6 text-left"
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
          >
            <span className="text-3xl">{c.emoji}</span>
            <h3 className="font-bold mt-3 mb-2 text-sm sm:text-base">{c.title}</h3>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>{c.desc}</p>
          </div>
        ))}
      </div>

      <p className="mt-8 italic text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
        * Program penyaluran kerja adalah layanan tambahan. Sertifikasi berjalan terpisah dari status penempatan kerja.
      </p>
    </div>
  </section>
);

export default PenyaluranSection;
