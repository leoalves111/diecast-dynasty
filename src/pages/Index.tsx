import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Trophy, Newspaper, ShieldCheck, Users, BarChart3, Target, Eye, ChevronRight, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import EventCard from "@/components/cards/EventCard";
import AdCard from "@/components/cards/AdCard";
import PostCard from "@/components/cards/PostCard";
import Layout from "@/components/layout/Layout";
import { mockEvents, mockAds, mockPosts, stats } from "@/data/mockData";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const steps = [
  { icon: Eye, title: "Escolha um evento", desc: "Explore os eventos disponíveis e encontre a miniatura dos seus sonhos." },
  { icon: Target, title: "Veja os detalhes", desc: "Confira regras, item, taxa de participação e andamento do evento." },
  { icon: Zap, title: "Participe", desc: "Garanta sua participação com a taxa indicada e acompanhe o progresso." },
  { icon: Trophy, title: "Acompanhe o resultado", desc: "Quando atingir o mínimo necessário, o evento encerra e o resultado é divulgado." },
];

const benefits = [
  { icon: Trophy, title: "Eventos Especiais", desc: "Participe de eventos exclusivos para conquistar miniaturas raras." },
  { icon: ShieldCheck, title: "Marketplace Confiável", desc: "Compre e venda entre colecionadores com perfis verificados." },
  { icon: Newspaper, title: "Novidades do Nicho", desc: "Fique por dentro dos lançamentos e tendências do mundo die-cast." },
  { icon: BarChart3, title: "Anúncios Organizados", desc: "Encontre o que procura com filtros avançados e categorias claras." },
  { icon: Zap, title: "Experiência Premium", desc: "Interface moderna, escura e projetada para quem leva o hobby a sério." },
  { icon: Users, title: "Comunidade Forte", desc: "Conecte-se com milhares de colecionadores apaixonados." },
];

export default function Index() {
  const featuredEvents = mockEvents.filter(e => e.status !== "completed").slice(0, 3);
  const featuredAds = mockAds.filter(a => a.featured).slice(0, 3);

  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(18_100%_55%/0.08),transparent_60%)]" />
        <div className="container relative py-20 md:py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-3xl text-center"
          >
            <motion.div variants={fadeUp} custom={0} className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur-sm">
              <Flame className="h-3 w-3 text-primary" />
              Plataforma #1 para colecionadores de miniaturas
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="font-display text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Participe de eventos, descubra{" "}
              <span className="text-gradient-primary">raridades</span> e conecte-se ao universo dos{" "}
              <span className="text-gradient-primary">colecionadores</span>.
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="mt-6 text-lg text-muted-foreground md:text-xl leading-relaxed">
              Uma plataforma completa para explorar carrinhos colecionáveis, participar de eventos especiais, anunciar no marketplace e acompanhar as novidades do mundo die-cast.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link to="/eventos">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-base px-8">
                  Explorar Eventos <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/marketplace">
                <Button size="lg" variant="outline" className="border-border text-base px-8 hover:border-primary hover:text-primary">
                  Acessar Marketplace
                </Button>
              </Link>
            </motion.div>
            <motion.div variants={fadeUp} custom={4} className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { value: `${stats.totalEvents}+`, label: "Eventos ativos" },
                { value: `${stats.activeUsers.toLocaleString("pt-BR")}+`, label: "Colecionadores" },
                { value: `${stats.publishedAds.toLocaleString("pt-BR")}+`, label: "Anúncios" },
                { value: `${stats.weeklyNews}+`, label: "Novidades/semana" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-lg border border-border/50 bg-card/40 p-3 backdrop-blur-sm">
                  <p className="font-display text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FEATURED EVENTS */}
      <section className="border-t border-border bg-card/30 py-16 md:py-20">
        <div className="container">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="font-display text-3xl font-bold">Eventos em Destaque</h2>
              <p className="mt-2 text-muted-foreground">Participe e conquiste miniaturas exclusivas.</p>
            </div>
            <Link to="/eventos" className="hidden items-center gap-1 text-sm text-primary hover:underline md:flex">
              Ver todos <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          <div className="mt-6 text-center md:hidden">
            <Link to="/eventos">
              <Button variant="outline" className="border-border">Ver todos os eventos</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold">Como Funciona</h2>
            <p className="mt-2 text-muted-foreground">Participe em poucos passos.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div key={step.title} className="relative rounded-xl border border-border bg-card p-6 text-center card-hover">
                <span className="absolute -top-3 left-4 rounded-full bg-gradient-primary px-2.5 py-0.5 text-xs font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <step.icon className="mx-auto mb-4 h-10 w-10 text-primary" />
                <h3 className="font-display text-base font-bold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARKETPLACE */}
      <section className="border-t border-border bg-card/30 py-16 md:py-20">
        <div className="container">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="font-display text-3xl font-bold">Marketplace em Destaque</h2>
              <p className="mt-2 text-muted-foreground">Anúncios recentes de colecionadores.</p>
            </div>
            <Link to="/marketplace" className="hidden items-center gap-1 text-sm text-primary hover:underline md:flex">
              Ver todos <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredAds.map((ad) => (
              <AdCard key={ad.id} ad={ad} />
            ))}
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="font-display text-3xl font-bold">Novidades e Conteúdo</h2>
              <p className="mt-2 text-muted-foreground">Fique por dentro do mundo die-cast.</p>
            </div>
            <Link to="/novidades" className="hidden items-center gap-1 text-sm text-primary hover:underline md:flex">
              Ver todas <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {mockPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="border-t border-border bg-card/30 py-16 md:py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold">Por que a CollectorsHub?</h2>
            <p className="mt-2 text-muted-foreground">Tudo que um colecionador precisa, em um só lugar.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-xl border border-border bg-card p-6 card-hover">
                <b.icon className="mb-4 h-8 w-8 text-primary" />
                <h3 className="font-display text-base font-bold">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: `${stats.completedEvents}+`, label: "Eventos concluídos", icon: Trophy },
              { value: `${stats.activeUsers.toLocaleString("pt-BR")}+`, label: "Usuários cadastrados", icon: Users },
              { value: `${stats.publishedAds.toLocaleString("pt-BR")}+`, label: "Anúncios publicados", icon: BarChart3 },
              { value: `${stats.categories}+`, label: "Categorias disponíveis", icon: Target },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-border bg-card p-6 text-center card-hover">
                <s.icon className="mx-auto mb-3 h-8 w-8 text-primary" />
                <p className="font-display text-3xl font-black text-gradient-primary">{s.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-border">
        <div className="container py-20 text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              Entre para a plataforma e viva o colecionismo de{" "}
              <span className="text-gradient-primary">outro nível</span>.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Crie sua conta gratuitamente e comece a explorar eventos, marketplace e novidades.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link to="/cadastro">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-base px-8">
                  Criar conta gratuita
                </Button>
              </Link>
              <Link to="/eventos">
                <Button size="lg" variant="outline" className="border-border text-base px-8 hover:border-primary hover:text-primary">
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
