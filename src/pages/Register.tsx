import { Link } from "react-router-dom";
import { Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Layout from "@/components/layout/Layout";

export default function Register() {
  return (
    <Layout>
      <section className="flex min-h-[80vh] items-center justify-center py-12">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary">
              <Flame className="h-6 w-6 text-primary-foreground" />
            </div>
            <h1 className="font-display text-2xl font-bold">Criar Conta</h1>
            <p className="mt-1 text-sm text-muted-foreground">Junte-se à comunidade de colecionadores</p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 space-y-4">
            <div className="space-y-2">
              <Label>Nome completo</Label>
              <Input placeholder="Seu nome" className="bg-background border-border" />
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input type="email" placeholder="seu@email.com" className="bg-background border-border" />
            </div>
            <div className="space-y-2">
              <Label>Senha</Label>
              <Input type="password" placeholder="••••••••" className="bg-background border-border" />
            </div>
            <div className="space-y-2">
              <Label>WhatsApp</Label>
              <Input placeholder="(00) 00000-0000" className="bg-background border-border" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label>Cidade</Label>
                <Input placeholder="Cidade" className="bg-background border-border" />
              </div>
              <div className="space-y-2">
                <Label>Estado</Label>
                <Input placeholder="UF" className="bg-background border-border" />
              </div>
            </div>
            <Button className="w-full bg-gradient-primary hover:opacity-90">Criar conta</Button>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            Já tem uma conta?{" "}
            <Link to="/login" className="text-primary hover:underline">Entrar</Link>
          </p>
        </div>
      </section>
    </Layout>
  );
}
