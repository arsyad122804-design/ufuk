const cards = [
  { emoji: "🏆", title: "Open Lab Energi", desc: "Satu-satunya TUK resmi LSP Energi Terbarukan di wilayah Jateng & DIY yang memiliki Open Lab Energi Mandiri" },
  { emoji: "💼", title: "Langsung Terhubung ke Industri", desc: "Setelah lulus, profil Anda masuk ke database mitra perusahaan dan vendor PLTS yang aktif rekrut tenaga bersertifikat." },
  { emoji: "📋", title: "19 Skema Tersedia", desc: "Dari Junior Operator jenjang 2 sampai Senior Engineer jenjang 7. Semua kebutuhan profil PLTS ada di satu tempat." },
  { emoji: "🏠", title: "Fasilitas Lengkap untuk Peserta Luar Kota", desc: "Ruang ujian standar industri, akomodasi tersedia, konsumsi included. Datang, fokus ujian, pulang bawa sertifikat." },
  { emoji: "📅", title: "Batch Bulanan", desc: "Tidak perlu antre lama. Batch berjalan rutin setiap bulan — jadwal bisa disesuaikan untuk rombongan perusahaan." },
  { emoji: "✅", title: "Berlaku Nasional", desc: "Sertifikat dari LSP Energi Terbarukan diakui secara nasional oleh BNSP. Bisa digunakan untuk proyek di seluruh Indonesia." },
];

const UspSection = () => (
  <section className="py-16 sm:py-20 px-4 bg-white">
    <div className="max-w-5xl mx-auto text-center">
      <span className="inline-block mb-4 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-primary">KENAPA TUK UFUK HIJAU</span>
      <h2 className="font-black mb-3 leading-tight text-foreground" style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)" }}>
        Satu-satunya TUK di Indonesia yang Memiliki Open Lab Energi Mandiri
      </h2>
      <p className="text-muted mb-10 text-sm sm:text-base">Bukan sekadar tempat ujian. Kami adalah ekosistem — dari sertifikasi sampai pekerjaan.</p>

      <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
        {cards.map((c) => (
          <div key={c.title} className="bg-white border border-border rounded-2xl p-6 text-left">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-3" style={{ backgroundColor: "#E6F5EC" }}>
              {c.emoji}
            </div>
            <h3 className="font-bold mb-2 text-foreground text-sm sm:text-base">{c.title}</h3>
            <p className="text-xs sm:text-sm leading-relaxed text-muted">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default UspSection;
