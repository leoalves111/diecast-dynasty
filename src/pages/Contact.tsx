import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/layout/Layout";

export default function Contact() {
  return (
    <Layout>
      <section className="py-8 md:py-12">
        <div className="container max-w-lg mx-auto px-6">
          <div className="mb-8 border-l-4 border-primary pl-4">
            <h1 className="text-2xl font-black italic uppercase tracking-tighter">Contato</h1>
            <p className="mt-1 text-sm text-muted-foreground">Envie uma mensagem e responderemos em breve.</p>
          </div>
          <div className="rounded-xl border border-border/40 bg-card p-6 space-y-4">
            <div className="space-y-2"><Label className="text-[10px] uppercase tracking-widest font-bold">Nome</Label><Input placeholder="Seu nome" className="bg-background border-border" /></div>
            <div className="space-y-2"><Label className="text-[10px] uppercase tracking-widest font-bold">Email</Label><Input type="email" placeholder="seu@email.com" className="bg-background border-border" /></div>
            <div className="space-y-2"><Label className="text-[10px] uppercase tracking-widest font-bold">Assunto</Label><Input placeholder="Assunto da mensagem" className="bg-background border-border" /></div>
            <div className="space-y-2"><Label className="text-[10px] uppercase tracking-widest font-bold">Mensagem</Label><Textarea placeholder="Sua mensagem..." className="bg-background border-border" rows={5} /></div>
            <Button className="w-full neon-button text-xs">Enviar mensagem</Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
