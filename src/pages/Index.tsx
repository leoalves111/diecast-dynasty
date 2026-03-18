import { Link } from "react-router-dom";
import { ArrowRight, Zap, Trophy, ShieldCheck, Users, BarChart3, Target, Eye, ChevronRight, Flame, Box, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import EventCard from "@/components/cards/EventCard";
import AdCard from "@/components/cards/AdCard";
import PostCard from "@/components/cards/PostCard";
import Layout from "@/components/layout/Layout";
import { mockEvents, mockAds, mockPosts, stats } from "@/data/mockData";

const steps = [
  { icon: Eye, title: "Escolha um evento", desc: "Explore os eventos disponíveis e encontre a miniatura dos seus sonhos." },
  { icon: Target, title: "Veja os detalhes", desc: "Confira regras, item, taxa de participação e andamento do evento." },
  { icon: Zap, title: "Participe", desc: "Garanta sua participação com a taxa indicada e acompanhe o progresso." },
  { icon: Trophy, title: "Resultado", desc: "Quando atingir o mínimo necessário, o evento encerra e o resultado é divulgado." },
];

const benefits = [
  { icon: Trophy, title: "Eventos Especiais", desc: "Participe de eventos exclusivos para conquistar miniaturas raras." },
  { icon: ShieldCheck, title: "Marketplace Confiável", desc: "Compre e venda entre colecionadores com perfis verificados." },
  { icon: BarChart3, title: "Anúncios Organizados", desc: "Encontre o que procura com filtros avançados e categorias claras." },
  { icon: Zap, title: "Experiência Premium", desc: "Interface moderna projetada para quem leva o hobby a sério." },
  { icon: Users, title: "Comunidade Forte", desc: "Conecte-se com milhares de colecionadores apaixonados." },
  { icon: Box, title: "Novidades Semanais", desc: "Fique por dentro dos lançamentos e tendências do mundo die-cast." },
];

// Live ticker data
const tickerItems = [
  "🔥 Skyline GT-R R34 STH — 38/50 participantes",
  "🏆 Lote JDM Legends — Encerrando em breve!",
  "⚡ Novo evento: Porsche 911 GT3 RS",
  "🎯 Ford GT40 RLC — 18/20 participantes",
  "✨ Mercedes 300 SL Tomica — Evento ativo",
];

export default function Index() {
  const featuredEvents = mockEvents.filter(e => e.status !== "completed").slice(0, 4);
  const featuredAds = mockAds.filter(a => a.featured).slice(0, 4);

  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative py-16 md:py-24 px-6">
          <div className="max-w-2xl mx-auto lg:ml-[30%]">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs text-primary font-bold uppercase tracking-wider">
              <Flame className="h-3 w-3" />
              Plataforma #1 para colecionadores
            </div>
            <h1 className="text-3xl font-black uppercase italic tracking-tighter md:text-5xl leading-[0.9]">
              Participe de eventos, descubra{" "}
              <span className="text-primary">raridades</span> e conecte-se ao universo dos{" "}
              <span className="text-primary">colecionadores</span>.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Uma plataforma completa para explorar carrinhos colecionáveis, participar de eventos especiais e acompanhar as novidades do mundo die-cast.
            </p>
            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
              <Link to="/eventos">
                <Button className="neon-button h-12 px-8 text-sm">
                  Explorar Eventos <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/marketplace">
                <Button variant="outline" className="border-border h-12 px-8 text-sm font-bold hover:border-primary hover:text-primary">
                  Acessar Marketplace
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* LIVE TICKER */}
      <section className="border-b border-border bg-card/50 py-3 overflow-hidden">
        <div className="relative">
          <div className="animate-ticker flex whitespace-nowrap gap-12">
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span key={i} className="text-xs font-bold text-muted-foreground">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="border-b border-border bg-card/30 py-6">
        <div className="container max-w-[1600px] mx-auto px-6">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { value: `${stats.totalEvents}+`, label: "EVENTOS ATIVOS" },
              { value: `${stats.activeUsers.toLocaleString("pt-BR")}+`, label: "COLECIONADORES" },
              { value: `${stats.publishedAds.toLocaleString("pt-BR")}+`, label: "ANÚNCIOS" },
              { value: `${stats.weeklyNews}+`, label: "NEWS/SEMANA" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-black text-primary">{stat.value}</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED EVENTS */}
      <section className="py-12 md:py-16">
        <div className="container max-w-[1600px] mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div className="border-l-4 border-primary pl-4">
              <h2 className="text-2xl font-black italic uppercase tracking-tighter">Eventos em Destaque</h2>
              <p className="mt-1 text-sm text-muted-foreground">Participe e conquiste miniaturas exclusivas.</p>
            </div>
            <Link to="/eventos" className="hidden items-center gap-1 text-xs text-primary hover:underline font-bold uppercase tracking-wider md:flex">
              Ver todos <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {featuredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          <div className="mt-6 text-center md:hidden">
            <Link to="/eventos">
              <Button variant="outline" className="border-border font-bold uppercase text-xs">Ver todos os eventos</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-y border-border bg-card/30 py-12 md:py-16">
        <div className="container max-w-[1600px] mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black italic uppercase tracking-tighter">Como Funciona</h2>
            <p className="mt-1 text-sm text-muted-foreground">Participe em poucos passos.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div key={step.title} className="relative rounded-xl border border-border/40 bg-card p-6 text-center card-hover">
                <span className="absolute -top-3 left-4 rounded-md bg-primary px-2.5 py-0.5 text-[10px] font-black text-primary-foreground uppercase">
                  {i + 1}
                </span>
                <step.icon className="mx-auto mb-4 h-10 w-10 text-primary" />
                <h3 className="text-sm font-black uppercase tracking-wide">{step.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARKETPLACE */}
      <section className="py-12 md:py-16">
        <div className="container max-w-[1600px] mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div className="border-l-4 border-primary pl-4">
              <h2 className="text-2xl font-black italic uppercase tracking-tighter">Marketplace em Destaque</h2>
              <p className="mt-1 text-sm text-muted-foreground">Anúncios recentes de colecionadores.</p>
            </div>
            <Link to="/marketplace" className="hidden items-center gap-1 text-xs text-primary hover:underline font-bold uppercase tracking-wider md:flex">
              Ver todos <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {featuredAds.map((ad) => (
              <AdCard key={ad.id} ad={ad} />
            ))}
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="border-y border-border bg-card/30 py-12 md:py-16">
        <div className="container max-w-[1600px] mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div className="border-l-4 border-primary pl-4">
              <h2 className="text-2xl font-black italic uppercase tracking-tighter">Novidades e Conteúdo</h2>
              <p className="mt-1 text-sm text-muted-foreground">Fique por dentro do mundo die-cast.</p>
            </div>
            <Link to="/novidades" className="hidden items-center gap-1 text-xs text-primary hover:underline font-bold uppercase tracking-wider md:flex">
              Ver todas <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {mockPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-12 md:py-16">
        <div className="container max-w-[1600px] mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black italic uppercase tracking-tighter">Por que a CollectorsHub?</h2>
            <p className="mt-1 text-sm text-muted-foreground">Tudo que um colecionador precisa, em um só lugar.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-xl border border-border/40 bg-card p-6 card-hover">
                <b.icon className="mb-4 h-8 w-8 text-primary" />
                <h3 className="text-sm font-black uppercase tracking-wide">{b.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="border-y border-border bg-card/30 py-12">
        <div className="container max-w-[1600px] mx-auto px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: `${stats.completedEvents}+`, label: "EVENTOS CONCLUÍDOS", icon: Trophy },
              { value: `${stats.activeUsers.toLocaleString("pt-BR")}+`, label: "USUÁRIOS CADASTRADOS", icon: Users },
              { value: `${stats.publishedAds.toLocaleString("pt-BR")}+`, label: "ANÚNCIOS PUBLICADOS", icon: BarChart3 },
              { value: `${stats.categories}+`, label: "CATEGORIAS", icon: Target },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-border/40 bg-card p-6 text-center card-hover">
                <s.icon className="mx-auto mb-3 h-8 w-8 text-primary" />
                <p className="text-3xl font-black text-primary">{s.value}</p>
                <p className="mt-1 text-[10px] text-muted-foreground uppercase tracking-widest font-bold">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16">
        <div className="container max-w-[1600px] mx-auto px-6 text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-black italic uppercase tracking-tighter md:text-4xl">
              Entre para a plataforma e viva o colecionismo de{" "}
              <span className="text-primary">outro nível</span>.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Crie sua conta gratuitamente e comece a explorar eventos, marketplace e novidades.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link to="/cadastro">
                <Button className="neon-button h-12 px-8 text-sm">
                  Criar conta gratuita
                </Button>
              </Link>
              <Link to="/eventos">
                <Button variant="outline" className="border-border h-12 px-8 text-sm font-bold hover:border-primary hover:text-primary">
                  Ver eventos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
