import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import AdCard from "@/components/cards/AdCard";
import Layout from "@/components/layout/Layout";
import { mockAds } from "@/data/mockData";

const brands = ["Todas", "Hot Wheels", "Matchbox", "Tomica"];
const conditions = ["Todas", "Lacrado", "Aberto", "Usado"];
const sortOptions = ["Mais recentes", "Maior preço", "Menor preço", "Destaques"];
const categories = ["Todas", ...Array.from(new Set(mockAds.map((a) => a.category)))];
const cities = ["Todas", ...Array.from(new Set(mockAds.map((a) => a.city)))];
const states = ["Todos", ...Array.from(new Set(mockAds.map((a) => a.state)))];

export default function Marketplace() {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("Todas");
  const [condition, setCondition] = useState("Todas");
  const [sort, setSort] = useState("Mais recentes");
  const [category, setCategory] = useState("Todas");
  const [city, setCity] = useState("Todas");
  const [state, setState] = useState("Todos");
  const [priceRange, setPriceRange] = useState([0]);
  const maxPrice = Math.max(...mockAds.map((a) => a.price));

  let filtered = mockAds.filter((a) => {
    if (brand !== "Todas" && a.brand !== brand) return false;
    if (condition !== "Todas" && a.condition !== condition) return false;
    if (category !== "Todas" && a.category !== category) return false;
    if (city !== "Todas" && a.city !== city) return false;
    if (state !== "Todos" && a.state !== state) return false;
    if (priceRange[0] > 0 && a.price < priceRange[0]) return false;
    if (search && !a.title.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  if (sort === "Maior preço") filtered.sort((a, b) => b.price - a.price);
  if (sort === "Menor preço") filtered.sort((a, b) => a.price - b.price);
  if (sort === "Destaques") filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

  return (
    <Layout>
      <section className="py-8 md:py-12">
        <div className="px-6">
          <div className="mb-8 border-l-4 border-primary pl-4">
            <h1 className="text-2xl font-black italic uppercase tracking-tighter md:text-3xl">Marketplace</h1>
            <p className="mt-1 text-sm text-muted-foreground">Encontre e anuncie miniaturas colecionáveis.</p>
          </div>

          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Buscar anúncios..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10 bg-card border-border/50" />
            </div>
          </div>

          <div className="mb-4 flex flex-wrap gap-2">
            {brands.map((b) => (
              <Button key={b} size="sm" variant={brand === b ? "default" : "outline"}
                className={brand === b ? "neon-button text-xs" : "border-border text-xs"} onClick={() => setBrand(b)}>{b}</Button>
            ))}
          </div>

          <div className="mb-4 flex flex-wrap gap-2">
            <span className="text-[10px] text-muted-foreground self-center mr-1 font-bold uppercase tracking-wider">Categoria:</span>
            {categories.map((c) => (
              <Button key={c} size="sm" variant={category === c ? "secondary" : "ghost"} className="text-xs font-bold" onClick={() => setCategory(c)}>{c}</Button>
            ))}
          </div>

          <div className="mb-4 flex flex-wrap gap-2">
            <span className="text-[10px] text-muted-foreground self-center mr-1 font-bold uppercase tracking-wider">Condição:</span>
            {conditions.map((c) => (
              <Button key={c} size="sm" variant={condition === c ? "secondary" : "ghost"} className="text-xs font-bold" onClick={() => setCondition(c)}>{c}</Button>
            ))}
          </div>

          <div className="mb-4 flex flex-wrap gap-2">
            <span className="text-[10px] text-muted-foreground self-center mr-1 font-bold uppercase tracking-wider">Cidade:</span>
            {cities.map((c) => (
              <Button key={c} size="sm" variant={city === c ? "secondary" : "ghost"} className="text-xs font-bold" onClick={() => setCity(c)}>{c}</Button>
            ))}
            <span className="text-[10px] text-muted-foreground self-center ml-3 mr-1 font-bold uppercase tracking-wider">Estado:</span>
            {states.map((s) => (
              <Button key={s} size="sm" variant={state === s ? "secondary" : "ghost"} className="text-xs font-bold" onClick={() => setState(s)}>{s}</Button>
            ))}
          </div>

          <div className="mb-4 max-w-xs space-y-2">
            <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider">Preço mínimo: R$ {priceRange[0].toFixed(2).replace(".", ",")}</p>
            <Slider value={priceRange} onValueChange={setPriceRange} max={Math.ceil(maxPrice)} step={10} className="[&>span>span]:bg-primary" />
          </div>

          <div className="mb-8 flex flex-wrap gap-2">
            <span className="text-[10px] text-muted-foreground self-center mr-1 font-bold uppercase tracking-wider">Ordenar:</span>
            {sortOptions.map((s) => (
              <Button key={s} size="sm" variant={sort === s ? "secondary" : "ghost"} className="text-xs font-bold" onClick={() => setSort(s)}>{s}</Button>
            ))}
          </div>

          {filtered.length > 0 ? (
            <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {filtered.map((ad) => (
                <AdCard key={ad.id} ad={ad} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center text-muted-foreground">
              <p className="text-lg font-bold">Nenhum anúncio encontrado.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
