const steps = [
  { num: "1", title: "Chat WhatsApp", desc: "Ceritakan latar belakang dan tujuan Anda. Tim kami rekomendasikan skema yang paling tepat — gratis, tanpa tekanan." },
  { num: "2", title: "Konfirmasi & Bayar DP", desc: "Pilih batch yang sesuai jadwal Anda, bayar DP untuk amankan kursi. Briefing pra-asesmen disediakan sebelum hari ujian." },
  { num: "3", title: "Ujian & Tersalurkan", desc: "Ikuti ujian kompetensi BNSP di TUK Ufuk Hijau. Setelah lulus, masuk program penyaluran kerja ke mitra industri kami." },
];

const ProcessSection = () => (
  <section className="py-16 sm:py-20 px-4 bg-white">
    <div className="max-w-4xl mx-auto text-center">
      <span className="inline-block mb-4 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-primary">CARA DAFTAR</span>
      <h2 className="font-black mb-10 text-foreground" style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)" }}>
        3 Langkah Mudah
      </h2>

      <div className="grid gap-8" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
        {steps.map((s) => (
          <div key={s.num} className="flex flex-col items-center">
            <div className="w-[52px] h-[52px] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4" style={{ backgroundColor: "#1B6B3A" }}>
              {s.num}
            </div>
            <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
