import { Link } from "react-router-dom";
import { Clock, Users, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import type { Event } from "@/data/mockData";

const tagColors: Record<string, string> = {
  "Raro": "bg-accent text-accent-foreground",
  "Premium": "bg-primary text-primary-foreground",
  "Encerrando": "bg-destructive text-destructive-foreground",
  "Novo": "bg-emerald-600 text-white",
  "Concluído": "bg-muted text-muted-foreground",
};

export default function EventCard({ event }: { event: Event }) {
  const progress = Math.round((event.currentParticipants / event.minParticipants) * 100);
  const daysLeft = Math.max(0, Math.ceil((new Date(event.endDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24)));

  return (
    <div className="group overflow-hidden rounded-xl border border-border bg-card card-hover">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {event.tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${tagColors[tag] || "bg-secondary text-secondary-foreground"}`}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="absolute bottom-3 left-3 right-3">
          <p className="text-xs text-muted-foreground">{event.brand} · {event.category}</p>
          <h3 className="mt-1 font-display text-lg font-bold leading-tight line-clamp-2">
            {event.title}
          </h3>
        </div>
      </div>

      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Taxa de participação</span>
          <span className="font-display font-bold text-primary">
            R$ {event.participationFee.toFixed(2).replace(".", ",")}
          </span>
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              {event.currentParticipants}/{event.minParticipants}
            </span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="h-1.5 bg-secondary [&>div]:bg-gradient-primary" />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            {event.status === "completed" ? "Encerrado" : `${daysLeft} dias restantes`}
          </div>
          <Link to={`/eventos/${event.id}`}>
            <Button size="sm" variant="outline" className="h-8 text-xs border-border hover:border-primary hover:text-primary">
              Ver Detalhes
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
