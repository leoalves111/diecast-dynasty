import { useParams, Link } from "react-router-dom";
import { Clock, Users, Share2, ShieldCheck, ChevronRight, Box, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import EventCard from "@/components/cards/EventCard";
import Layout from "@/components/layout/Layout";
import { mockEvents } from "@/data/mockData";
import { useState } from "react";

export default function EventDetail() {
  const { id } = useParams();
  const event = mockEvents.find((e) => e.id === id);
  const [mainImage, setMainImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!event) {
    return (
      <Layout>
        <div className="px-6 py-20 text-center">
          <h1 className="text-2xl font-black uppercase">Evento não encontrado</h1>
          <Link to="/eventos" className="mt-4 inline-block text-primary hover:underline font-bold text-sm">Voltar aos eventos</Link>
        </div>
      </Layout>
    );
  }

  const progress = Math.round((event.currentParticipants / event.minParticipants) * 100);
  const daysLeft = Math.max(0, Math.ceil((new Date(event.endDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24)));
  const related = mockEvents.filter((e) => e.id !== event.id && e.status !== "completed").slice(0, 3);

  const rules = [
    "A participação está vinculada ao pagamento da taxa indicada.",
    "A taxa não garante contemplação — trata-se de uma participação no evento.",
    "O evento só será realizado quando atingir o número mínimo de participantes.",
    "O resultado e andamento devem ser acompanhados diretamente pela plataforma.",
    "Demais condições estão descritas no regulamento completo do evento.",
  ];

  const faqs = [
    { q: "Como funciona a participação?", a: "Você garante sua vaga pagando a taxa indicada. Quando o evento atinge o mínimo necessário, ele é encerrado e o resultado é divulgado." },
    { q: "Posso cancelar minha participação?", a: "Consulte as regras específicas de cada evento. Em geral, cancelamentos são possíveis enquanto o evento está ativo." },
    { q: "Como sei se fui contemplado?", a: "Você será notificado pela plataforma e poderá acompanhar o resultado na página do evento." },
  ];

  return (
    <Layout>
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-4xl border-border bg-card p-2">
          <DialogTitle className="sr-only">Visualizar imagem</DialogTitle>
          <img src={event.gallery[mainImage]} alt={event.title} className="w-full rounded-lg object-contain max-h-[80vh]" />
        </DialogContent>
      </Dialog>

      <section className="py-8 md:py-12">
        <div className="px-6">
          <div className="mb-6 flex items-center gap-2 text-xs text-muted-foreground font-bold uppercase tracking-wider">
            <Link to="/" className="hover:text-foreground">Início</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/eventos" className="hover:text-foreground">Eventos</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground normal-case">{event.title}</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-3">
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border/40 cursor-pointer group" onClick={() => setLightboxOpen(true)}>
                  <img src={event.gallery[mainImage]} alt={event.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
                    {event.tags.map((tag) => (
                      <Badge key={tag} className="bg-primary text-primary-foreground text-[9px] font-black uppercase">{tag}</Badge>
                    ))}
                  </div>
                </div>
                {event.gallery.length > 1 && (
                  <div className="flex gap-2">
                    {event.gallery.map((img, i) => (
                      <button key={i} onClick={() => setMainImage(i)}
                        className={`h-16 w-20 overflow-hidden rounded-lg border-2 transition-colors ${i === mainImage ? "border-primary" : "border-border hover:border-muted-foreground"}`}>
                        <img src={img} alt="" className="h-full w-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold">{event.brand} · {event.category}</p>
                <h1 className="mt-2 text-2xl font-black uppercase italic tracking-tighter md:text-3xl">{event.title}</h1>
                <p className="mt-4 text-muted-foreground leading-relaxed text-sm">{event.description}</p>
              </div>

              <div className="rounded-xl border border-border/40 bg-card p-6 space-y-4">
                <h2 className="text-lg font-black uppercase tracking-wide flex items-center gap-2">
                  <Box className="h-5 w-5 text-primary" /> Sobre o Item
                </h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    { label: "Nome", value: event.item.name },
                    { label: "Coleção", value: event.item.collection },
                    { label: "Edição", value: event.item.edition },
                    { label: "Condição", value: event.item.condition },
                    { label: "Raridade", value: event.item.rarity },
                  ].map((info) => (
                    <div key={info.label}>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold">{info.label}</p>
                      <p className="text-sm font-medium">{info.value}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{event.item.details}</p>
              </div>

              <div className="rounded-xl border border-border/40 bg-card p-6 space-y-4">
                <h2 className="text-lg font-black uppercase tracking-wide flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-primary" /> Regras do Evento
                </h2>
                <ul className="space-y-2">
                  {rules.map((rule, i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-border/40 bg-card p-6 space-y-4">
                <h2 className="text-lg font-black uppercase tracking-wide">Perguntas Frequentes</h2>
                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <div key={i}>
                      <h3 className="text-sm font-bold">{faq.q}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="sticky top-20 space-y-4">
                <div className="rounded-xl border border-border/40 bg-card p-6 space-y-5">
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold">Taxa de participação</p>
                    <p className="text-3xl font-black text-primary">
                      R$ {event.participationFee.toFixed(2).replace(".", ",")}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground flex items-center gap-1"><Users className="h-3.5 w-3.5" /> Participantes</span>
                      <span className="font-bold">{event.currentParticipants}/{event.minParticipants}</span>
                    </div>
                    <Progress value={progress} className="h-2 bg-secondary [&>div]:bg-primary" />
                    <p className="text-xs text-muted-foreground text-right">{progress}% preenchido</p>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {event.status === "completed" ? "Evento encerrado" : `${daysLeft} dias restantes`}
                  </div>

                  <Button className="w-full neon-button h-12 text-sm" size="lg" disabled={event.status === "completed"}>
                    {event.status === "completed" ? "Encerrado" : "Participar do Evento"}
                  </Button>

                  <Button variant="outline" className="w-full border-border" size="sm">
                    <Share2 className="mr-2 h-4 w-4" /> Compartilhar
                  </Button>

                  <p className="text-[10px] text-muted-foreground text-center leading-relaxed">
                    Evento transparente — acompanhe o progresso e resultado em tempo real.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="mb-6 text-xl font-black italic uppercase tracking-tighter border-l-4 border-primary pl-4">Eventos Relacionados</h2>
              <div className="grid gap-4 grid-cols-2 lg:grid-cols-3">
                {related.map((e) => (
                  <EventCard key={e.id} event={e} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
