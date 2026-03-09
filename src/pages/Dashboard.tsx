import { useState } from "react";
import { Link } from "react-router-dom";
import { User, FileText, PlusCircle, Trophy, Heart, Settings, BarChart3, Eye, Pencil, Trash2 } from "lucide-react";
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

  return (
    <Layout>
      <section className="py-8 md:py-12">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
            {/* Sidebar */}
            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  {tab.label}
                </button>
              ))}
            </nav>

            {/* Content */}
            <div className="min-w-0">
              {activeTab === "overview" && (
                <div className="space-y-6">
                  <h1 className="font-display text-2xl font-bold">Olá, {user.name}! 👋</h1>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-xl border border-border bg-card p-5">
                      <p className="text-xs text-muted-foreground">Anúncios ativos</p>
                      <p className="mt-1 font-display text-2xl font-bold text-primary">{user.activeAds}</p>
                    </div>
                    <div className="rounded-xl border border-border bg-card p-5">
                      <p className="text-xs text-muted-foreground">Eventos participados</p>
                      <p className="mt-1 font-display text-2xl font-bold text-primary">5</p>
                    </div>
                    <div className="rounded-xl border border-border bg-card p-5">
                      <p className="text-xs text-muted-foreground">Favoritos</p>
                      <p className="mt-1 font-display text-2xl font-bold text-primary">12</p>
                    </div>
                  </div>
                  <div>
                    <h2 className="font-display text-lg font-bold mb-3">Seus Anúncios Recentes</h2>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {userAds.slice(0, 2).map((ad) => (
                        <AdCard key={ad.id} ad={ad} />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "profile" && (
                <div className="space-y-6">
                  <h1 className="font-display text-2xl font-bold">Meu Perfil</h1>
                  <div className="rounded-xl border border-border bg-card p-6 space-y-4 max-w-lg">
                    <div className="space-y-2"><Label>Nome</Label><Input defaultValue={user.name} className="bg-background border-border" /></div>
                    <div className="space-y-2"><Label>Email</Label><Input defaultValue={user.email} className="bg-background border-border" /></div>
                    <div className="space-y-2"><Label>WhatsApp</Label><Input defaultValue={user.phone} className="bg-background border-border" /></div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-2"><Label>Cidade</Label><Input defaultValue={user.city} className="bg-background border-border" /></div>
                      <div className="space-y-2"><Label>Estado</Label><Input defaultValue={user.state} className="bg-background border-border" /></div>
                    </div>
                    <div className="space-y-2"><Label>Bio</Label><Textarea defaultValue={user.bio} className="bg-background border-border" /></div>
                    <Button className="bg-gradient-primary hover:opacity-90">Salvar alterações</Button>
                  </div>
                </div>
              )}

              {activeTab === "ads" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h1 className="font-display text-2xl font-bold">Meus Anúncios</h1>
                    <Button size="sm" className="bg-gradient-primary" onClick={() => setActiveTab("create")}>
                      <PlusCircle className="mr-2 h-4 w-4" /> Novo Anúncio
                    </Button>
                  </div>
                  <div className="space-y-3">
                    {userAds.map((ad) => (
                      <div key={ad.id} className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
                        <img src={ad.images[0]} alt={ad.title} className="h-16 w-20 rounded-lg object-cover" />
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm truncate">{ad.title}</p>
                          <p className="text-xs text-muted-foreground">R$ {ad.price.toFixed(2).replace(".", ",")} · {ad.views} visualizações</p>
                        </div>
                        <Badge variant="outline" className="shrink-0 text-xs">{ad.status === "active" ? "Ativo" : ad.status}</Badge>
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
                  <h1 className="font-display text-2xl font-bold">Criar Anúncio</h1>
                  <div className="rounded-xl border border-border bg-card p-6 space-y-4 max-w-lg">
                    <div className="space-y-2"><Label>Nome do item</Label><Input placeholder="Ex: Hot Wheels Skyline GT-R" className="bg-background border-border" /></div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-2"><Label>Marca</Label><Input placeholder="Hot Wheels" className="bg-background border-border" /></div>
                      <div className="space-y-2"><Label>Categoria</Label><Input placeholder="Super Treasure Hunt" className="bg-background border-border" /></div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-2"><Label>Condição</Label><Input placeholder="Lacrado" className="bg-background border-border" /></div>
                      <div className="space-y-2"><Label>Preço (R$)</Label><Input type="number" placeholder="0,00" className="bg-background border-border" /></div>
                    </div>
                    <div className="space-y-2"><Label>Descrição</Label><Textarea placeholder="Descreva seu item..." className="bg-background border-border" rows={4} /></div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-2"><Label>Cidade</Label><Input placeholder="Cidade" className="bg-background border-border" /></div>
                      <div className="space-y-2"><Label>Estado</Label><Input placeholder="UF" className="bg-background border-border" /></div>
                    </div>
                    <div className="space-y-2"><Label>WhatsApp para contato</Label><Input placeholder="(00) 00000-0000" className="bg-background border-border" /></div>
                    <Button className="bg-gradient-primary hover:opacity-90">Publicar Anúncio</Button>
                  </div>
                </div>
              )}

              {activeTab === "events" && (
                <div className="space-y-6">
                  <h1 className="font-display text-2xl font-bold">Eventos Participados</h1>
                  <div className="grid gap-6 sm:grid-cols-2">
                    {mockEvents.slice(0, 4).map((e) => (
                      <EventCard key={e.id} event={e} />
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "favorites" && (
                <div className="space-y-6">
                  <h1 className="font-display text-2xl font-bold">Favoritos</h1>
                  <div className="grid gap-6 sm:grid-cols-2">
                    {mockAds.slice(0, 4).map((ad) => (
                      <AdCard key={ad.id} ad={ad} />
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "settings" && (
                <div className="space-y-6">
                  <h1 className="font-display text-2xl font-bold">Configurações</h1>
                  <div className="rounded-xl border border-border bg-card p-6 space-y-4 max-w-lg">
                    <div className="space-y-2"><Label>Alterar senha</Label><Input type="password" placeholder="Nova senha" className="bg-background border-border" /></div>
                    <div className="space-y-2"><Label>Confirmar senha</Label><Input type="password" placeholder="Confirmar nova senha" className="bg-background border-border" /></div>
                    <Button className="bg-gradient-primary hover:opacity-90">Atualizar senha</Button>
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
