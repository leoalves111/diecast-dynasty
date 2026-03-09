import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AdCard from "@/components/cards/AdCard";
import Layout from "@/components/layout/Layout";
import { mockAds } from "@/data/mockData";

const brands = ["Todas", "Hot Wheels", "Matchbox", "Tomica"];
const conditions = ["Todas", "Lacrado", "Aberto", "Usado"];
const sortOptions = ["Mais recentes", "Maior preço", "Menor preço", "Destaques"];

export default function Marketplace() {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("Todas");
  const [condition, setCondition] = useState("Todas");
  const [sort, setSort] = useState("Mais recentes");

  let filtered = mockAds.filter((a) => {
    if (brand !== "Todas" && a.brand !== brand) return false;
    if (condition !== "Todas" && a.condition !== condition) return false;
    if (search && !a.title.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  if (sort === "Maior preço") filtered.sort((a, b) => b.price - a.price);
  if (sort === "Menor preço") filtered.sort((a, b) => a.price - b.price);
  if (sort === "Destaques") filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="mb-8">
            <h1 className="font-display text-3xl font-bold md:text-4xl">Marketplace</h1>
            <p className="mt-2 text-muted-foreground">Encontre e anuncie miniaturas colecionáveis.</p>
          </div>

          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Buscar anúncios..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10 bg-card border-border" />
            </div>
          </div>

          <div className="mb-4 flex flex-wrap gap-2">
            {brands.map((b) => (
              <Button key={b} size="sm" variant={brand === b ? "default" : "outline"} className={brand === b ? "bg-gradient-primary" : "border-border"} onClick={() => setBrand(b)}>{b}</Button>
            ))}
          </div>
          <div className="mb-4 flex flex-wrap gap-2">
            {conditions.map((c) => (
              <Button key={c} size="sm" variant={condition === c ? "secondary" : "ghost"} className="text-xs" onClick={() => setCondition(c)}>{c}</Button>
            ))}
          </div>
          <div className="mb-8 flex flex-wrap gap-2">
            {sortOptions.map((s) => (
              <Button key={s} size="sm" variant={sort === s ? "secondary" : "ghost"} className="text-xs" onClick={() => setSort(s)}>{s}</Button>
            ))}
          </div>

          {filtered.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((ad) => (
                <AdCard key={ad.id} ad={ad} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center text-muted-foreground">
              <p className="text-lg">Nenhum anúncio encontrado.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
