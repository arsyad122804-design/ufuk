const cards = [
  { emoji: "🚫", title: "Ditolak Masuk Proyek", desc: "Proyek PLTS pemerintah dan perusahaan besar hanya menerima teknisi yang bisa menunjukkan sertifikat BNSP. Tanpa itu, pengalaman bertahun-tahun pun tidak dihitung." },
  { emoji: "⚖️", title: "Risiko Legal Perusahaan", desc: "Regulasi pengurangan emisi karbon mewajibkan setiap perusahaan memiliki tenaga ahli PLTS tersertifikasi BNSP. Gagal audit = sanksi operasional." },
  { emoji: "📉", title: "Kalah Tender Terus", desc: "Vendor PLTS tanpa tenaga bersertifikat tidak bisa mengikuti tender EPC dan proyek pemerintah — kalah bahkan sebelum dokumen teknis dievaluasi." },
];

const ProblemSection = () => (
  <section className="py-16 sm:py-20 px-4" style={{ backgroundColor: "#F9FAFB" }}>
    <div className="max-w-5xl mx-auto text-center">
      <span className="inline-block mb-4 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-primary">
        KENAPA INI MENDESAK
      </span>
      <h2 className="font-black mb-10 leading-tight text-foreground" style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)" }}>
        Tanpa Sertifikat BNSP, Karier di PLTS Tertutup Sebelum Dimulai
      </h2>

      <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
        {cards.map((c) => (
          <div key={c.title} className="bg-white rounded-2xl p-6 text-left border border-border" style={{ borderLeft: "4px solid #DC2626" }}>
            <span className="text-3xl">{c.emoji}</span>
            <h3 className="font-bold mt-3 mb-2 text-foreground">{c.title}</h3>
            <p className="text-sm leading-relaxed text-muted">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
