import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/layout/Layout";

export default function Contact() {
  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="container max-w-lg">
          <h1 className="font-display text-3xl font-bold mb-2">Contato</h1>
          <p className="text-muted-foreground mb-8">Envie uma mensagem e responderemos em breve.</p>
          <div className="rounded-xl border border-border bg-card p-6 space-y-4">
            <div className="space-y-2"><Label>Nome</Label><Input placeholder="Seu nome" className="bg-background border-border" /></div>
            <div className="space-y-2"><Label>Email</Label><Input type="email" placeholder="seu@email.com" className="bg-background border-border" /></div>
            <div className="space-y-2"><Label>Assunto</Label><Input placeholder="Assunto da mensagem" className="bg-background border-border" /></div>
            <div className="space-y-2"><Label>Mensagem</Label><Textarea placeholder="Sua mensagem..." className="bg-background border-border" rows={5} /></div>
            <Button className="w-full bg-gradient-primary hover:opacity-90">Enviar mensagem</Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
