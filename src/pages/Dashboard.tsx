import { useState, useRef } from "react";
import { User, FileText, PlusCircle, Trophy, Heart, Settings, BarChart3, Pencil, Trash2, Upload, ImagePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/Layout";
import EventCard from "@/components/cards/EventCard";
import AdCard from "@/components/cards/AdCard";
import { mockEvents, mockAds, mockUsers } from "@/data/mockData";

const tabs = [
  { id: "overview", label: "Visão Geral", icon: BarChart3 },
  { id: "profile", label: "Meu Perfil", icon: User },
  { id: "ads", label: "Meus Anúncios", icon: FileText },
  { id: "create", label: "Criar Anúncio", icon: PlusCircle },
  { id: "events", label: "Eventos", icon: Trophy },
  { id: "favorites", label: "Favoritos", icon: Heart },
  { id: "settings", label: "Configurações", icon: Settings },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const user = mockUsers[0];
  const userAds = mockAds.filter((a) => a.userId === user.id);

  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [adCoverPreview, setAdCoverPreview] = useState<string | null>(null);
  const [adGalleryPreviews, setAdGalleryPreviews] = useState<string[]>([]);
  const avatarRef = useRef<HTMLInputElement>(null);
  const coverRef = useRef<HTMLInputElement>(null);
  const galleryRef = useRef<HTMLInputElement>(null);

  const handleFilePreview = (e: React.ChangeEvent<HTMLInputElement>, setter: (v: string | null) => void) => {
    const file = e.target.files?.[0];
    if (file) setter(URL.createObjectURL(file));
  };

  const handleGallery = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const urls = Array.from(files).map((f) => URL.createObjectURL(f));
      setAdGalleryPreviews((prev) => [...prev, ...urls]);
    }
  };

  return (
    <Layout>
      <section className="py-8 md:py-12">
        <div className="container max-w-[1600px] mx-auto px-6">
          <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-xs font-bold uppercase tracking-wide transition-colors ${
                    activeTab === tab.id
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  {tab.label}
                </button>
              ))}
            </nav>

            <div className="min-w-0">
              {activeTab === "overview" && (
                <div className="space-y-6">
                  <h1 className="text-2xl font-black uppercase italic tracking-tighter">Olá, {user.name}! 👋</h1>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {[
                      { label: "ANÚNCIOS ATIVOS", value: user.activeAds },
                      { label: "EVENTOS PARTICIPADOS", value: 5 },
                      { label: "FAVORITOS", value: 12 },
                    ].map((stat) => (
                      <div key={stat.label} className="rounded-xl border border-border/40 bg-card p-5">
                        <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">{stat.label}</p>
                        <p className="mt-1 text-2xl font-black text-primary">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                  <div>
                    <h2 className="text-sm font-black uppercase tracking-wide mb-3 border-l-4 border-primary pl-3">Seus Anúncios Recentes</h2>
                    <div className="grid gap-4 grid-cols-2">
                      {userAds.slice(0, 2).map((ad) => (
                        <AdCard key={ad.id} ad={ad} />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "profile" && (
                <div className="space-y-6">
                  <h1 className="text-2xl font-black uppercase italic tracking-tighter">Meu Perfil</h1>
                  <div className="rounded-xl border border-border/40 bg-card p-6 space-y-4 max-w-lg">
                    <div className="space-y-2">
                      <Label className="text-[10px] uppercase tracking-widest font-bold">Foto de perfil</Label>
                      <div className="flex items-center gap-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary border-2 border-border overflow-hidden cursor-pointer hover:border-primary transition-colors" onClick={() => avatarRef.current?.click()}>
                          {avatarPreview ? <img src={avatarPreview} alt="Avatar" className="h-full w-full object-cover" /> : <User className="h-6 w-6 text-muted-foreground" />}
                        </div>
                        <Button variant="outline" size="sm" className="border-border text-xs font-bold" onClick={() => avatarRef.current?.click()}>
                          <Upload className="mr-2 h-3.5 w-3.5" /> Alterar foto
                        </Button>
                        <input ref={avatarRef} type="file" accept="image/*" className="hidden" onChange={(e) => handleFilePreview(e, setAvatarPreview)} />
                      </div>
                    </div>
                    <div className="space-y-2"><Label className="text-[10px] uppercase tracking-widest font-bold">Nome</Label><Input defaultValue={user.name} className="bg-background border-border" /></div>
                    <div className="space-y-2"><Label className="text-[10px] uppercase tracking-widest font-bold">Email</Label><Input defaultValue={user.email} className="bg-background border-border" /></div>
                    <div className="space-y-2"><Label className="text-[10px] uppercase tracking-widest font-bold">WhatsApp</Label><Input defaultValue={user.phone} className="bg-background border-border" /></div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-2"><Label className="text-[10px] uppercase tracking-widest font-bold">Cidade</Label><Input defaultValue={user.city} className="bg-background border-border" /></div>
                      <div className="space-y-2"><Label className="text-[10px] uppercase tracking-widest font-bold">Estado</Label><Input defaultValue={user.state} className="bg-background border-border" /></div>
                    </div>
                    <div className="space-y-2"><Label className="text-[10px] uppercase tracking-widest font-bold">Bio</Label><Textarea defaultValue={user.bio} className="bg-background border-border" /></div>
                    <Button className="neon-button text-xs px-6">Salvar alterações</Button>
                  </div>
                </div>
              )}

              {activeTab === "ads" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-black uppercase italic tracking-tighter">Meus Anúncios</h1>
                    <Button size="sm" className="neon-button text-xs" onClick={() => setActiveTab("create")}>
                      <PlusCircle className="mr-2 h-4 w-4" /> Novo Anúncio
                    </Button>
                  </div>
                  <div className="space-y-3">
                    {userAds.map((ad) => (
                      <div key={ad.id} className="flex items-center gap-4 rounded-xl border border-border/40 bg-card p-4">
                        <img src={ad.images[0]} alt={ad.title} className="h-16 w-20 rounded-lg object-cover" />
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-sm truncate">{ad.title}</p>
                          <p className="text-xs text-muted-foreground">R$ {ad.price.toFixed(2).replace(".", ",")} · {ad.views} views</p>
                        </div>
                        <Badge variant="outline" className="shrink-0 text-[9px] font-bold uppercase">{ad.status === "active" ? "Ativo" : ad.status}</Badge>
                        <div className="flex gap-1">
                          <Button size="icon" variant="ghost" className="h-8 w-8"><Pencil className="h-3.5 w-3.5" /></Button>
                          <Button size="icon" variant="ghost" className="h-8 w-8 text-destructive"><Trash2 className="h-3.5 w-3.5" /></Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "create" && (
                <div className="space-y-6">
                  <h1 className="text-2xl font-black uppercase italic tracking-tighter">Criar Anúncio</h1>
                  <div className="rounded-xl border border-border/40 bg-card p-6 space-y-4 max-w-lg">
                    <div className="space-y-2">
                      <Label className="text-[10px] uppercase tracking-widest font-bold">Foto de capa</Label>
                      <div className="flex h-40 w-full items-center justify-center rounded-xl border-2 border-dashed border-border bg-background cursor-pointer hover:border-primary transition-colors overflow-hidden" onClick={() => coverRef.current?.click()}>
                        {adCoverPreview ? <img src={adCoverPreview} alt="Capa" className="h-full w-full object-cover" /> : (
                          <div className="text-center text-muted-foreground">
                            <ImagePlus className="mx-auto h-8 w-8 mb-2" />
                            <p className="text-xs">Clique para adicionar foto de capa</p>
                          </div>
                        )}
                      </div>
                      <input ref={coverRef} type="file" accept="image/*" className="hidden" onChange={(e) => handleFilePreview(e, setAdCoverPreview)} />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-[10px] uppercase tracking-widest font-bold">Galeria de fotos</Label>
                      <div className="flex flex-wrap gap-2">
                        {adGalleryPreviews.map((url, i) => (
                          <div key={i} className="h-20 w-24 overflow-hidden rounded-lg border border-border"><img src={url} alt="" className="h-full w-full object-cover" /></div>
                        ))}
                        <div className="flex h-20 w-24 items-center justify-center rounded-lg border-2 border-dashed border-border bg-background cursor-pointer hover:border-primary transition-colors" onClick={() => galleryRef.current?.click()}>
                          <ImagePlus className="h-5 w-5 text-muted-foreground" />
                        </div>
                      </div>
                      <input ref={galleryRef} type="file" accept="image/*" multiple className="hidden" onChange={handleGallery} />
                    </div>
                    <div className="space-y-2"><Label className="text-[10px] uppercase tracking-widest font-bold">Nome do item</Label><Input placeholder="Ex: Hot Wheels Skyline GT-R" className="bg-background border-border" /></div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-2"><Label className="text-[10px] uppercase tracking-widest font-bold">Marca</Label><Input placeholder="Hot Wheels" className="bg-background border-border" /></div>
                      <div className="space-y-2"><Label className="text-[10px] uppercase tracking-widest font-bold">Categoria</Label><Input placeholder="Super Treasure Hunt" className="bg-background border-border" /></div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-2"><Label className="text-[10px] uppercase tracking-widest font-bold">Condição</Label><Input placeholder="Lacrado" className="bg-background border-border" /></div>
                      <div className="space-y-2"><Label className="text-[10px] uppercase tracking-widest font-bold">Preço (R$)</Label><Input type="number" placeholder="0,00" className="bg-background border-border" /></div>
                    </div>
                    <div className="space-y-2"><Label className="text-[10px] uppercase tracking-widest font-bold">Descrição</Label><Textarea placeholder="Descreva seu item..." className="bg-background border-border" rows={4} /></div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-2"><Label className="text-[10px] uppercase tracking-widest font-bold">Cidade</Label><Input placeholder="Cidade" className="bg-background border-border" /></div>
                      <div className="space-y-2"><Label className="text-[10px] uppercase tracking-widest font-bold">Estado</Label><Input placeholder="UF" className="bg-background border-border" /></div>
                    </div>
                    <div className="space-y-2"><Label className="text-[10px] uppercase tracking-widest font-bold">WhatsApp</Label><Input placeholder="(00) 00000-0000" className="bg-background border-border" /></div>
                    <Button className="neon-button text-xs px-6">Publicar Anúncio</Button>
                  </div>
                </div>
              )}

              {activeTab === "events" && (
                <div className="space-y-6">
                  <h1 className="text-2xl font-black uppercase italic tracking-tighter">Eventos Participados</h1>
                  <div className="grid gap-4 grid-cols-2">
                    {mockEvents.slice(0, 4).map((e) => (
                      <EventCard key={e.id} event={e} />
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "favorites" && (
                <div className="space-y-6">
                  <h1 className="text-2xl font-black uppercase italic tracking-tighter">Favoritos</h1>
                  <div className="grid gap-4 grid-cols-2">
                    {mockAds.slice(0, 4).map((ad) => (
                      <AdCard key={ad.id} ad={ad} />
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "settings" && (
                <div className="space-y-6">
                  <h1 className="text-2xl font-black uppercase italic tracking-tighter">Configurações</h1>
                  <div className="rounded-xl border border-border/40 bg-card p-6 space-y-4 max-w-lg">
                    <div className="space-y-2"><Label className="text-[10px] uppercase tracking-widest font-bold">Alterar senha</Label><Input type="password" placeholder="Nova senha" className="bg-background border-border" /></div>
                    <div className="space-y-2"><Label className="text-[10px] uppercase tracking-widest font-bold">Confirmar senha</Label><Input type="password" placeholder="Confirmar nova senha" className="bg-background border-border" /></div>
                    <Button className="neon-button text-xs px-6">Atualizar senha</Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
