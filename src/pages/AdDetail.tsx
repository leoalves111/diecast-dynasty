import { useParams, Link } from "react-router-dom";
import { MapPin, ChevronRight, MessageCircle, User, Clock, Eye, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AdCard from "@/components/cards/AdCard";
import Layout from "@/components/layout/Layout";
import { mockAds, mockUsers } from "@/data/mockData";
import { useState } from "react";

export default function AdDetail() {
  const { id } = useParams();
  const ad = mockAds.find((a) => a.id === id);
  const [mainImage, setMainImage] = useState(0);

  if (!ad) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="font-display text-2xl font-bold">Anúncio não encontrado</h1>
          <Link to="/marketplace" className="mt-4 inline-block text-primary hover:underline">Voltar ao marketplace</Link>
        </div>
      </Layout>
    );
  }

  const seller = mockUsers.find((u) => u.id === ad.userId);
  const related = mockAds.filter((a) => a.id !== ad.id).slice(0, 3);

  return (
    <Layout>
      <section className="py-8 md:py-12">
        <div className="container">
          <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Início</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/marketplace" className="hover:text-foreground">Marketplace</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground line-clamp-1">{ad.title}</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              <div className="aspect-[16/10] overflow-hidden rounded-xl border border-border">
                <img src={ad.images[mainImage]} alt={ad.title} className="h-full w-full object-cover" />
              </div>

              <div>
                <p className="text-sm text-muted-foreground">{ad.brand} · {ad.category} · {ad.condition}</p>
                <h1 className="mt-2 font-display text-2xl font-bold md:text-3xl">{ad.title}</h1>
                <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" /> {ad.city}, {ad.state}
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <h2 className="font-display text-lg font-bold mb-3">Descrição</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{ad.description}</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Marca", value: ad.brand },
                  { label: "Categoria", value: ad.category },
                  { label: "Condição", value: ad.condition },
                ].map((info) => (
                  <div key={info.label} className="rounded-lg border border-border bg-card p-4">
                    <p className="text-xs text-muted-foreground">{info.label}</p>
                    <p className="text-sm font-medium">{info.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="sticky top-20 space-y-4">
                <div className="rounded-xl border border-border bg-card p-6 space-y-5">
                  <div>
                    <p className="text-xs text-muted-foreground">Preço</p>
                    <p className="font-display text-3xl font-black text-primary">
                      R$ {ad.price.toFixed(2).replace(".", ",")}
                    </p>
                  </div>

                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-base" size="lg">
                    <MessageCircle className="mr-2 h-5 w-5" /> Falar no WhatsApp
                  </Button>

                  <p className="text-[11px] text-muted-foreground text-center leading-relaxed">
                    A negociação e pagamento são combinados diretamente entre comprador e vendedor.
                  </p>
                </div>

                {seller && (
                  <div className="rounded-xl border border-border bg-card p-6 space-y-4">
                    <h3 className="font-display text-sm font-bold">Vendedor</h3>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                        <User className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{seller.name}</p>
                        <p className="text-xs text-muted-foreground">{seller.city}, {seller.state}</p>
                      </div>
                    </div>
                    <div className="flex gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> Membro desde {new Date(seller.memberSince).getFullYear()}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{seller.activeAds} anúncios ativos</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="mb-6 font-display text-2xl font-bold">Anúncios Relacionados</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((a) => (
                  <AdCard key={a.id} ad={a} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
