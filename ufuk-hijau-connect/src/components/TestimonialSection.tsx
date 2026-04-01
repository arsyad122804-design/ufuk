const testimonials = [
  {
    quote: "Prosesnya profesional, asesor menguji dengan fair sesuai kompetensi nyata. Tidak perlu hafalan — yang dinilai adalah kemampuan praktis. Sertifikat keluar tepat waktu.",
    initials: "AR", name: "Ahmad R.", meta: "Semarang · Operator Senior PLTS On-Grid",
  },
  {
    quote: "Saya dari Jogja, fasilitas akomodasi tersedia jadi tidak perlu repot cari penginapan. Ujiannya serius tapi terstruktur. Setelah lulus langsung ada info dari TUK soal perusahaan yang butuh teknisi.",
    initials: "DS", name: "Dewi S.", meta: "Yogyakarta · Pemasangan PLTS Rooftop",
  },
  {
    quote: "Ambil 2 skema sekaligus lebih efisien. PJU dan Rooftop selesai dalam 2 hari. Sekarang bisa handle lebih banyak jenis proyek. Worth it.",
    initials: "BW", name: "Budi W.", meta: "Solo · Pemasangan PLTS PJU + Rooftop",
  },
];

const TestimonialSection = () => (
  <section className="py-16 sm:py-20 px-4" style={{ backgroundColor: "#F9FAFB" }}>
    <div className="max-w-5xl mx-auto text-center">
      <span className="inline-block mb-4 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-primary">KATA PESERTA</span>
      <h2 className="font-black mb-10 text-foreground" style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)" }}>
        Sudah Dibuktikan Peserta dari Berbagai Kota
      </h2>

      <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))" }}>
        {testimonials.map((t) => (
          <div key={t.initials} className="bg-white border border-border rounded-2xl p-6 text-left">
            <div className="flex gap-0.5 mb-3">
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: "#F6C90E" }}>★</span>
              ))}
            </div>
            <p className="italic text-sm text-foreground leading-relaxed mb-4">"{t.quote}"</p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold" style={{ backgroundColor: "#E6F5EC", color: "#0A4A2A" }}>
                {t.initials}
              </div>
              <div>
                <p className="font-bold text-sm text-foreground">{t.name}</p>
                <p className="text-xs text-muted">{t.meta}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialSection;
