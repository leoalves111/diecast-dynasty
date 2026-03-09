import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import EventCard from "@/components/cards/EventCard";
import Layout from "@/components/layout/Layout";
import { mockEvents } from "@/data/mockData";

const filters = ["Todos", "Ativos", "Novos", "Encerrando", "Concluídos"];
const brands = ["Todas", "Hot Wheels", "Matchbox", "Tomica", "Majorette"];

export default function Events() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [activeBrand, setActiveBrand] = useState("Todas");
  const [search, setSearch] = useState("");

  const filtered = mockEvents.filter((e) => {
    if (activeFilter === "Ativos" && e.status !== "active") return false;
    if (activeFilter === "Novos" && e.status !== "new") return false;
    if (activeFilter === "Encerrando" && e.status !== "closing") return false;
    if (activeFilter === "Concluídos" && e.status !== "completed") return false;
    if (activeBrand !== "Todas" && e.brand !== activeBrand) return false;
    if (search && !e.title.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="mb-8">
            <h1 className="font-display text-3xl font-bold md:text-4xl">Eventos</h1>
            <p className="mt-2 text-muted-foreground">Explore eventos e conquiste miniaturas exclusivas.</p>
          </div>

          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Buscar eventos..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 bg-card border-border"
              />
            </div>
          </div>

          <div className="mb-4 flex flex-wrap gap-2">
            {filters.map((f) => (
              <Button
                key={f}
                size="sm"
                variant={activeFilter === f ? "default" : "outline"}
                className={activeFilter === f ? "bg-gradient-primary" : "border-border hover:border-primary hover:text-primary"}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </Button>
            ))}
          </div>
          <div className="mb-8 flex flex-wrap gap-2">
            {brands.map((b) => (
              <Button
                key={b}
                size="sm"
                variant={activeBrand === b ? "secondary" : "ghost"}
                className="text-xs"
                onClick={() => setActiveBrand(b)}
              >
                {b}
              </Button>
            ))}
          </div>

          {filtered.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center text-muted-foreground">
              <p className="text-lg">Nenhum evento encontrado.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
