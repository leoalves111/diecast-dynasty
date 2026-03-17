import { Link } from "react-router-dom";
import { MapPin, Star } from "lucide-react";
import type { Ad } from "@/data/mockData";

export default function AdCard({ ad }: { ad: Ad }) {
  return (
    <Link
      to={`/marketplace/${ad.id}`}
      className="group relative flex flex-col w-full bg-card hover:bg-card/80 border border-border/40 hover:border-primary/50 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={ad.images[0]}
          alt={ad.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />

        {/* Price Tag */}
        <div className="absolute top-2 right-2 z-10">
          <div className="bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 shadow-sm group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
            <span className="text-xs font-bold text-primary group-hover:text-primary-foreground">
              R$ {ad.price.toFixed(2).replace(".", ",")}
            </span>
          </div>
        </div>

        {ad.featured && (
          <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-gold px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-primary-foreground">
            <Star className="h-3 w-3" /> Destaque
          </span>
        )}

        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Info */}
      <div className="p-3 bg-card border-t border-border/40 space-y-1.5">
        <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold">{ad.brand} · {ad.condition}</p>
        <h3 className="text-sm font-bold text-foreground uppercase tracking-wide group-hover:text-primary transition-colors line-clamp-2 text-center">
          {ad.title}
        </h3>
        <div className="flex items-center justify-center gap-1 text-[10px] text-muted-foreground">
          <MapPin className="h-3 w-3" />
          {ad.city}, {ad.state}
        </div>
      </div>
    </Link>
  );
}
