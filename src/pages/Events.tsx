import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import EventCard from "@/components/cards/EventCard";
import Layout from "@/components/layout/Layout";
import { mockEvents } from "@/data/mockData";

const filters = ["Todos", "Destaques", "Ativos", "Novos", "Encerrando", "Concluídos"];
const brands = ["Todas", "Hot Wheels", "Matchbox", "Tomica", "Majorette"];
const categories = ["Todas", ...Array.from(new Set(mockEvents.map((e) => e.category)))];

export default function Events() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [activeBrand, setActiveBrand] = useState("Todas");
  const [activeCategory, setActiveCategory] = useState("Todas");
  const [search, setSearch] = useState("");
  const [priceRange, setPriceRange] = useState([0]);
  const maxPrice = Math.max(...mockEvents.map((e) => e.participationFee));

  const filtered = mockEvents.filter((e) => {
    if (activeFilter === "Destaques" && !e.tags.some((t) => t === "Premium" || t === "Raro")) return false;
    if (activeFilter === "Ativos" && e.status !== "active") return false;
    if (activeFilter === "Novos" && e.status !== "new") return false;
    if (activeFilter === "Encerrando" && e.status !== "closing") return false;
    if (activeFilter === "Concluídos" && e.status !== "completed") return false;
    if (activeBrand !== "Todas" && e.brand !== activeBrand) return false;
    if (activeCategory !== "Todas" && e.category !== activeCategory) return false;
    if (priceRange[0] > 0 && e.participationFee < priceRange[0]) return false;
    if (search && !e.title.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <Layout>
      <section className="py-8 md:py-12">
        <div className="px-6">
          <div className="mb-8 border-l-4 border-primary pl-4">
            <h1 className="text-2xl font-black italic uppercase tracking-tighter md:text-3xl">Eventos</h1>
            <p className="mt-1 text-sm text-muted-foreground">Explore eventos e conquiste miniaturas exclusivas.</p>
          </div>

          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Buscar eventos..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10 bg-card border-border/50" />
            </div>
          </div>

          <div className="mb-4 flex flex-wrap gap-2">
            {filters.map((f) => (
              <Button key={f} size="sm" variant={activeFilter === f ? "default" : "outline"}
                className={activeFilter === f ? "neon-button text-xs" : "border-border hover:border-primary hover:text-primary text-xs"}
                onClick={() => setActiveFilter(f)}>{f}</Button>
            ))}
          </div>

          <div className="mb-4 flex flex-wrap gap-2">
            {brands.map((b) => (
              <Button key={b} size="sm" variant={activeBrand === b ? "secondary" : "ghost"} className="text-xs font-bold" onClick={() => setActiveBrand(b)}>{b}</Button>
            ))}
          </div>

          <div className="mb-4 flex flex-wrap gap-2">
            {categories.map((c) => (
              <Button key={c} size="sm" variant={activeCategory === c ? "secondary" : "ghost"} className="text-xs font-bold" onClick={() => setActiveCategory(c)}>{c}</Button>
            ))}
          </div>

          <div className="mb-8 max-w-xs space-y-2">
            <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider">Valor mínimo: R$ {priceRange[0].toFixed(2).replace(".", ",")}</p>
            <Slider value={priceRange} onValueChange={setPriceRange} max={Math.ceil(maxPrice)} step={5} className="[&>span>span]:bg-primary" />
          </div>

          {filtered.length > 0 ? (
            <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {filtered.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center text-muted-foreground">
              <p className="text-lg font-bold">Nenhum evento encontrado.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
