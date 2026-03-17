import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Layout from "@/components/layout/Layout";

export default function Register() {
  return (
    <Layout>
      <section className="flex min-h-[80vh] items-center justify-center py-12">
        <div className="w-full max-w-md space-y-6 px-6">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
              <span className="text-xl font-black text-primary-foreground">C</span>
            </div>
            <h1 className="text-2xl font-black uppercase italic tracking-tighter">Criar Conta</h1>
            <p className="mt-1 text-sm text-muted-foreground">Junte-se à comunidade de colecionadores</p>
          </div>

          <div className="rounded-xl border border-border/40 bg-card p-6 space-y-4">
            <div className="space-y-2"><Label className="text-[10px] uppercase tracking-widest font-bold">Nome completo</Label><Input placeholder="Seu nome" className="bg-background border-border" /></div>
            <div className="space-y-2"><Label className="text-[10px] uppercase tracking-widest font-bold">Email</Label><Input type="email" placeholder="seu@email.com" className="bg-background border-border" /></div>
            <div className="space-y-2"><Label className="text-[10px] uppercase tracking-widest font-bold">Senha</Label><Input type="password" placeholder="••••••••" className="bg-background border-border" /></div>
            <div className="space-y-2"><Label className="text-[10px] uppercase tracking-widest font-bold">WhatsApp</Label><Input placeholder="(00) 00000-0000" className="bg-background border-border" /></div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2"><Label className="text-[10px] uppercase tracking-widest font-bold">Cidade</Label><Input placeholder="Cidade" className="bg-background border-border" /></div>
              <div className="space-y-2"><Label className="text-[10px] uppercase tracking-widest font-bold">Estado</Label><Input placeholder="UF" className="bg-background border-border" /></div>
            </div>
            <Button className="w-full neon-button text-xs">Criar conta</Button>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            Já tem uma conta?{" "}
            <Link to="/login" className="text-primary hover:underline font-bold">Entrar</Link>
          </p>
        </div>
      </section>
    </Layout>
  );
}
