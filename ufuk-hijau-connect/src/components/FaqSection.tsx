import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Apakah sertifikat BNSP berlaku nasional?", a: "Ya. Sertifikat yang diterbitkan LSP Energi Terbarukan diakui secara nasional oleh BNSP dan tercatat dalam sistem database BNSP. Dapat digunakan untuk proyek dan tender di seluruh Indonesia." },
  { q: "Bagaimana program penyaluran kerja bekerja?", a: "Setelah lulus ujian kompetensi, profil dan data sertifikat peserta dimasukkan ke database mitra industri kami. Kami secara aktif menghubungkan peserta ke perusahaan, vendor EPC, dan kontraktor PLTS yang sedang mencari tenaga bersertifikat. Ini layanan tambahan — penyaluran kerja tidak dijamin, namun kami berperan aktif memfasilitasi koneksi." },
  { q: "Apakah perlu pengalaman kerja untuk ikut ujian?", a: "Tidak wajib. Uji kompetensi BNSP menilai kompetensi — bukan ijazah atau pengalaman kerja formal. Jika Anda memiliki pengalaman di lapangan atau dasar teknik yang relevan, itu sudah cukup sebagai modal. Kami menyediakan briefing pra-asesmen sebelum ujian." },
  { q: "Berapa lama prosesnya sampai sertifikat keluar?", a: "Ujian berlangsung 1–2 hari tergantung skema. Sertifikat resmi BNSP keluar sekitar 2–4 minggu setelah ujian selesai dan hasil diverifikasi oleh LSP Energi Terbarukan." },
  { q: "Apa yang terjadi jika tidak lulus ujian?", a: "Anda bisa mengulang ujian. Tim kami memberikan feedback detail tentang area yang perlu diperkuat sebelum mengulang. Briefing pra-asesmen yang kami berikan dirancang untuk memaksimalkan kesiapan peserta." },
  { q: "Apakah bisa ambil lebih dari satu skema sekaligus?", a: "Bisa. Banyak peserta mengambil 2–3 skema dalam satu kunjungan untuk efisiensi waktu dan biaya. Tanyakan ke kami untuk rancangan jadwal yang optimal." },
  { q: "Apakah tersedia fasilitas untuk peserta luar kota?", a: "Ya. TUK Ufuk Hijau menyediakan fasilitas akomodasi untuk peserta yang datang dari luar Surakarta. Konsumsi selama hari ujian sudah termasuk dalam biaya sertifikasi." },
  { q: "Bagaimana cara memilih skema yang tepat?", a: "Chat WA kami dan ceritakan latar belakang Anda — posisi saat ini, pengalaman, dan tujuan karier. Tim kami akan merekomendasikan skema yang paling relevan, gratis dan tanpa tekanan untuk langsung daftar." },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-20 px-4 bg-white">
      <div className="max-w-[700px] mx-auto text-center">
        <span className="inline-block mb-4 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-primary">PERTANYAAN UMUM</span>
        <h2 className="font-black mb-10 text-foreground" style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)" }}>
          Ada yang Ingin Ditanyakan?
        </h2>

        <div className="space-y-3 text-left">
          {faqs.map((f, i) => (
            <div key={i} className="border border-border rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left font-bold text-sm hover:bg-bg-light transition-colors"
              >
                <span className="text-foreground">{f.q}</span>
                <ChevronDown
                  className="w-5 h-5 text-muted shrink-0 ml-2 transition-transform"
                  style={{ transform: openIndex === i ? "rotate(180deg)" : "rotate(0)" }}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-4 text-sm text-muted leading-relaxed">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
