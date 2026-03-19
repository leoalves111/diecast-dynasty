import { Link } from "react-router-dom";
import { ArrowRight, Zap, Trophy, ShieldCheck, Users, BarChart3, Target, Eye, ChevronRight, Flame, Box } from "lucide-react";
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
      <section className="border-b border-border">
        <div className="py-14 md:py-20 px-6">
          <div className="max-w-lg">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] text-primary font-bold uppercase tracking-wider">
              <Flame className="h-3 w-3 shrink-0" />
              Plataforma #1 para colecionadores
            </div>
            <h1 className="text-xl font-black uppercase italic tracking-tight sm:text-2xl md:text-3xl leading-[1] text-foreground">
              Participe de eventos, descubra{" "}
              <span className="text-primary">raridades</span> e conecte-se ao universo dos{" "}
              <span className="text-primary">colecionadores</span>.
            </h1>
            <p className="mt-5 text-sm text-muted-foreground leading-relaxed max-w-md">
              Uma plataforma completa para explorar carrinhos colecionáveis, participar de eventos especiais e acompanhar as novidades do mundo die-cast.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/eventos">
                <Button className="neon-button h-11 px-6 text-xs">
                  Explorar Eventos <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/marketplace">
                <Button variant="outline" className="border-border h-11 px-6 text-xs font-bold hover:border-primary hover:text-primary">
                  Acessar Marketplace
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* LIVE TICKER */}
      <section className="border-b border-border bg-card/50 py-3 overflow-hidden">
        <div className="animate-ticker flex whitespace-nowrap gap-12">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="text-xs font-bold text-muted-foreground">
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* STATS BAR */}
      <section className="border-b border-border bg-card/30 py-5">
        <div className="px-6">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { value: `${stats.totalEvents}+`, label: "EVENTOS ATIVOS" },
              { value: `${stats.activeUsers.toLocaleString("pt-BR")}+`, label: "COLECIONADORES" },
              { value: `${stats.publishedAds.toLocaleString("pt-BR")}+`, label: "ANÚNCIOS" },
              { value: `${stats.weeklyNews}+`, label: "NEWS/SEMANA" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-xl font-black text-primary sm:text-2xl">{stat.value}</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED EVENTS */}
      <section className="py-10 md:py-14">
        <div className="px-6">
          <div className="flex items-center justify-between mb-6">
            <div className="border-l-4 border-primary pl-4">
              <h2 className="text-lg font-black italic uppercase tracking-tight sm:text-xl">Eventos em Destaque</h2>
              <p className="mt-0.5 text-xs text-muted-foreground">Participe e conquiste miniaturas exclusivas.</p>
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
      <section className="border-y border-border bg-card/30 py-10 md:py-14">
        <div className="px-6">
          <div className="mb-8">
            <h2 className="text-lg font-black italic uppercase tracking-tight sm:text-xl">Como Funciona</h2>
            <p className="mt-0.5 text-xs text-muted-foreground">Participe em poucos passos.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div key={step.title} className="relative rounded-xl border border-border/40 bg-card p-5 card-hover">
                <span className="absolute -top-3 left-4 rounded-md bg-primary px-2.5 py-0.5 text-[10px] font-black text-primary-foreground uppercase">
                  {i + 1}
                </span>
                <step.icon className="mb-3 h-8 w-8 text-primary" />
                <h3 className="text-sm font-black uppercase tracking-wide">{step.title}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARKETPLACE */}
      <section className="py-10 md:py-14">
        <div className="px-6">
          <div className="flex items-center justify-between mb-6">
            <div className="border-l-4 border-primary pl-4">
              <h2 className="text-lg font-black italic uppercase tracking-tight sm:text-xl">Marketplace em Destaque</h2>
              <p className="mt-0.5 text-xs text-muted-foreground">Anúncios recentes de colecionadores.</p>
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
      <section className="border-y border-border bg-card/30 py-10 md:py-14">
        <div className="px-6">
          <div className="flex items-center justify-between mb-6">
            <div className="border-l-4 border-primary pl-4">
              <h2 className="text-lg font-black italic uppercase tracking-tight sm:text-xl">Novidades e Conteúdo</h2>
              <p className="mt-0.5 text-xs text-muted-foreground">Fique por dentro do mundo die-cast.</p>
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
      <section className="py-10 md:py-14">
        <div className="px-6">
          <div className="mb-8">
            <h2 className="text-lg font-black italic uppercase tracking-tight sm:text-xl">Por que a CollectorsHub?</h2>
            <p className="mt-0.5 text-xs text-muted-foreground">Tudo que um colecionador precisa, em um só lugar.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-xl border border-border/40 bg-card p-5 card-hover">
                <b.icon className="mb-3 h-7 w-7 text-primary" />
                <h3 className="text-sm font-black uppercase tracking-wide">{b.title}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="border-y border-border bg-card/30 py-10">
        <div className="px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: `${stats.completedEvents}+`, label: "EVENTOS CONCLUÍDOS", icon: Trophy },
              { value: `${stats.activeUsers.toLocaleString("pt-BR")}+`, label: "USUÁRIOS CADASTRADOS", icon: Users },
              { value: `${stats.publishedAds.toLocaleString("pt-BR")}+`, label: "ANÚNCIOS PUBLICADOS", icon: BarChart3 },
              { value: `${stats.categories}+`, label: "CATEGORIAS", icon: Target },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-border/40 bg-card p-5 text-center card-hover">
                <s.icon className="mx-auto mb-2 h-7 w-7 text-primary" />
                <p className="text-2xl font-black text-primary">{s.value}</p>
                <p className="mt-1 text-[10px] text-muted-foreground uppercase tracking-widest font-bold">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-14">
        <div className="px-6">
          <div className="max-w-xl">
            <h2 className="text-xl font-black italic uppercase tracking-tight sm:text-2xl md:text-3xl">
              Entre para a plataforma e viva o colecionismo de{" "}
              <span className="text-primary">outro nível</span>.
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Crie sua conta gratuitamente e comece a explorar eventos, marketplace e novidades.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/cadastro">
                <Button className="neon-button h-11 px-6 text-xs">
                  Criar conta gratuita
                </Button>
              </Link>
              <Link to="/eventos">
                <Button variant="outline" className="border-border h-11 px-6 text-xs font-bold hover:border-primary hover:text-primary">
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
