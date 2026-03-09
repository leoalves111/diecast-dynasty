import { Link } from "react-router-dom";
import { MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Ad } from "@/data/mockData";

export default function AdCard({ ad }: { ad: Ad }) {
  return (
    <div className="group overflow-hidden rounded-xl border border-border bg-card card-hover">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={ad.images[0]}
          alt={ad.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        {ad.featured && (
          <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent-foreground">
            <Star className="h-3 w-3" /> Destaque
          </span>
        )}
      </div>
      <div className="p-4 space-y-2">
        <p className="text-xs text-muted-foreground">{ad.brand} · {ad.condition}</p>
        <h3 className="font-display text-sm font-bold leading-tight line-clamp-2">{ad.title}</h3>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <MapPin className="h-3 w-3" />
          {ad.city}, {ad.state}
        </div>
        <div className="flex items-center justify-between pt-1">
          <span className="font-display text-lg font-bold text-primary">
            R$ {ad.price.toFixed(2).replace(".", ",")}
          </span>
          <Link to={`/marketplace/${ad.id}`}>
            <Button size="sm" variant="outline" className="h-8 text-xs border-border hover:border-primary hover:text-primary">
              Ver anúncio
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
