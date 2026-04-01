import { Shield, Building, FileText, Users, MapPin, CalendarDays } from "lucide-react";

const items = [
  { icon: Shield, label: "TUK BNSP Resmi" },
  { icon: Building, label: "LSP Energi Terbarukan" },
  { icon: FileText, label: "19 Skema Sertifikasi" },
  { icon: Users, label: "Penyaluran Kerja" },
  { icon: MapPin, label: "Surakarta, Jateng & DIY" },
  { icon: CalendarDays, label: "Batch Setiap Bulan" },
];

const TrustBar = () => (
  <section className="bg-white py-6 px-4 border-b border-border">
    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 max-w-5xl mx-auto">
      {items.map(({ icon: Icon, label }) => (
        <div key={label} className="flex items-center gap-2">
          <Icon className="w-5 h-5 text-primary" strokeWidth={1.8} />
          <span className="text-xs sm:text-sm font-bold" style={{ color: "#0A4A2A" }}>{label}</span>
        </div>
      ))}
    </div>
  </section>
);

export default TrustBar;
