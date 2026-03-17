import { Link } from "react-router-dom";
import { Clock, Users } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import type { Event } from "@/data/mockData";

const tagColors: Record<string, string> = {
  "Raro": "bg-gold text-primary-foreground",
  "Premium": "bg-primary text-primary-foreground",
  "Encerrando": "bg-destructive text-destructive-foreground",
  "Novo": "bg-emerald-600 text-white",
  "Concluído": "bg-muted text-muted-foreground",
};

export default function EventCard({ event }: { event: Event }) {
  const progress = Math.round((event.currentParticipants / event.minParticipants) * 100);
  const daysLeft = Math.max(0, Math.ceil((new Date(event.endDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24)));

  return (
    <Link
      to={`/eventos/${event.id}`}
      className="group relative flex flex-col w-full bg-card hover:bg-card/80 border border-border/40 hover:border-primary/50 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

        {/* Price Tag */}
        <div className="absolute top-2 right-2 z-10">
          <div className="bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 shadow-sm group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
            <span className="text-xs font-bold text-primary group-hover:text-primary-foreground">
              R$ {event.participationFee.toFixed(2).replace(".", ",")}
            </span>
          </div>
        </div>

        {/* Tags */}
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {event.tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-full px-2 py-0.5 text-[9px] font-black uppercase tracking-wider ${tagColors[tag] || "bg-secondary text-secondary-foreground"}`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom info on image */}
        <div className="absolute bottom-3 left-3 right-3">
          <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold">{event.brand} · {event.category}</p>
        </div>

        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Info */}
      <div className="p-3 bg-card border-t border-border/40 space-y-2">
        <h3 className="text-sm font-bold text-foreground uppercase tracking-wide group-hover:text-primary transition-colors line-clamp-2 text-center">
          {event.title}
        </h3>

        <div className="space-y-1">
          <div className="flex items-center justify-between text-[10px] text-muted-foreground">
            <span className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              {event.currentParticipants}/{event.minParticipants}
            </span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="h-1 bg-secondary [&>div]:bg-primary" />
        </div>

        <div className="flex items-center justify-between text-[10px]">
          <span className="flex items-center gap-1 text-muted-foreground">
            <Clock className="h-3 w-3" />
            {event.status === "completed" ? "Encerrado" : `${daysLeft}d restantes`}
          </span>
          <span className="text-primary font-bold uppercase text-[9px]">Ver detalhes →</span>
        </div>
      </div>
    </Link>
  );
}
