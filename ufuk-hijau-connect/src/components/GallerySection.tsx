// Tambahkan gambar kunjungan di: /public/gallery/kunjungan/
const kunjunganItems = [
  { src: "/gallery/WhatsApp Image 2026-04-01 at 7.57.06 PM.jpeg", caption: "Dokumentasi Kunjungan Open Lab" },
  { src: "/gallery/WhatsApp Image 2026-04-01 at 7.55.16 PM.jpeg", caption: "Dokumentasi Kunjungan Open Lab" },
  { src: "/gallery/WhatsApp Image 2026-04-01 at 7.54.50 PM.jpeg", caption: "Dokumentasi Kunjungan Open Lab" },
];

// Tambahkan gambar open lab di: /public/gallery/open-lab/
const openLabItems: { src: string; caption: string }[] = [];

type GalleryItem = { src: string; caption: string };

const GalleryGrid = ({ items }: { items: GalleryItem[] }) => (
  <div
    className="grid gap-3 sm:gap-4"
    style={{ gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}
  >
    {items.map((item, i) => (
      <div
        key={i}
        className="group relative overflow-hidden rounded-2xl border border-border bg-card aspect-[4/3]"
      >
        <img
          src={item.src}
          alt={item.caption}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder.svg"; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <p className="text-white text-sm font-medium text-left">{item.caption}</p>
        </div>
      </div>
    ))}
  </div>
);

const GallerySection = () => (
  <section className="py-16 sm:py-20 px-4 bg-muted/30">
    <div className="max-w-5xl mx-auto text-center">
      <span className="inline-block mb-4 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-primary">
        GALLERY OPEN LAB
      </span>
      <h2
        className="font-black mb-4 text-foreground"
        style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)" }}
      >
        Dokumentasi Kunjungan & Kegiatan Open Lab
      </h2>
      <p className="text-muted-foreground text-sm sm:text-base mb-10 max-w-2xl mx-auto">
        Open Lab Energi Mandiri telah dikunjungi berbagai tokoh, delegasi industri, dan peserta dari seluruh Indonesia.
      </p>

      {/* Kunjungan */}
      {kunjunganItems.length > 0 && (
        <>
          <h3 className="text-left font-bold text-lg mb-4 text-foreground">Dokumentasi Kunjungan</h3>
          <GalleryGrid items={kunjunganItems} />
        </>
      )}

      {/* Open Lab */}
      {openLabItems.length > 0 && (
        <>
          <h3 className="text-left font-bold text-lg mt-10 mb-4 text-foreground">Kegiatan Open Lab</h3>
          <GalleryGrid items={openLabItems} />
        </>
      )}
    </div>
  </section>
);

export default GallerySection;
