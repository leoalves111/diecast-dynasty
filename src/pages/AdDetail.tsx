import { useParams, Link } from "react-router-dom";
import { MapPin, ChevronRight, MessageCircle, User, Clock, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import AdCard from "@/components/cards/AdCard";
import Layout from "@/components/layout/Layout";
import { mockAds, mockUsers } from "@/data/mockData";
import { useState } from "react";

export default function AdDetail() {
  const { id } = useParams();
  const ad = mockAds.find((a) => a.id === id);
  const [mainImage, setMainImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!ad) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-black uppercase">Anúncio não encontrado</h1>
          <Link to="/marketplace" className="mt-4 inline-block text-primary hover:underline font-bold text-sm">Voltar ao marketplace</Link>
        </div>
      </Layout>
    );
  }

  const seller = mockUsers.find((u) => u.id === ad.userId);
  const related = mockAds.filter((a) => a.id !== ad.id).slice(0, 3);

  return (
    <Layout>
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-4xl border-border bg-card p-2">
          <DialogTitle className="sr-only">Visualizar imagem</DialogTitle>
          <img src={ad.images[mainImage]} alt={ad.title} className="w-full rounded-lg object-contain max-h-[80vh]" />
        </DialogContent>
      </Dialog>

      <section className="py-8 md:py-12">
        <div className="px-6">
          <div className="mb-6 flex items-center gap-2 text-xs text-muted-foreground font-bold uppercase tracking-wider">
            <Link to="/" className="hover:text-foreground">Início</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/marketplace" className="hover:text-foreground">Marketplace</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground normal-case line-clamp-1">{ad.title}</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              <div className="aspect-[16/10] overflow-hidden rounded-xl border border-border/40 cursor-pointer group relative" onClick={() => setLightboxOpen(true)}>
                <img src={ad.images[mainImage]} alt={ad.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              {ad.images.length > 1 && (
                <div className="flex gap-2">
                  {ad.images.map((img, i) => (
                    <button key={i} onClick={() => setMainImage(i)}
                      className={`h-16 w-20 overflow-hidden rounded-lg border-2 transition-colors ${i === mainImage ? "border-primary" : "border-border hover:border-muted-foreground"}`}>
                      <img src={img} alt="" className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              <div>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold">{ad.brand} · {ad.category} · {ad.condition}</p>
                <h1 className="mt-2 text-2xl font-black uppercase italic tracking-tighter md:text-3xl">{ad.title}</h1>
                <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" /> {ad.city}, {ad.state}
                </p>
              </div>

              <div className="rounded-xl border border-border/40 bg-card p-6">
                <h2 className="text-lg font-black uppercase tracking-wide mb-3">Descrição</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{ad.description}</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Marca", value: ad.brand },
                  { label: "Categoria", value: ad.category },
                  { label: "Condição", value: ad.condition },
                ].map((info) => (
                  <div key={info.label} className="rounded-lg border border-border/40 bg-card p-4">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold">{info.label}</p>
                    <p className="text-sm font-medium">{info.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="sticky top-20 space-y-4">
                <div className="rounded-xl border border-border/40 bg-card p-6 space-y-5">
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold">Preço</p>
                    <p className="text-3xl font-black text-primary">
                      R$ {ad.price.toFixed(2).replace(".", ",")}
                    </p>
                  </div>

                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-base font-black uppercase" size="lg">
                    <MessageCircle className="mr-2 h-5 w-5" /> Falar no WhatsApp
                  </Button>

                  <p className="text-[10px] text-muted-foreground text-center leading-relaxed">
                    A negociação e pagamento são combinados diretamente entre comprador e vendedor.
                  </p>
                </div>

                {seller && (
                  <div className="rounded-xl border border-border/40 bg-card p-6 space-y-4">
                    <h3 className="text-sm font-black uppercase tracking-wide">Vendedor</h3>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                        <User className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="text-sm font-bold">{seller.name}</p>
                        <p className="text-xs text-muted-foreground">{seller.city}, {seller.state}</p>
                      </div>
                    </div>
                    <div className="flex gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> Membro desde {new Date(seller.memberSince).getFullYear()}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{seller.activeAds} anúncios ativos</p>
                    <Button variant="outline" size="sm" className="w-full border-border text-xs font-bold">Ver perfil</Button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="mb-6 text-xl font-black italic uppercase tracking-tighter border-l-4 border-primary pl-4">Anúncios Relacionados</h2>
              <div className="grid gap-4 grid-cols-2 lg:grid-cols-3">
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
