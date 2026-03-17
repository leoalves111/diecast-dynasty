import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Layout from "@/components/layout/Layout";

export default function Login() {
  return (
    <Layout>
      <section className="flex min-h-[80vh] items-center justify-center py-12">
        <div className="w-full max-w-md space-y-6 px-6">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
              <span className="text-xl font-black text-primary-foreground">C</span>
            </div>
            <h1 className="text-2xl font-black uppercase italic tracking-tighter">Entrar na CollectorsHub</h1>
            <p className="mt-1 text-sm text-muted-foreground">Acesse sua conta de colecionador</p>
          </div>

          <div className="rounded-xl border border-border/40 bg-card p-6 space-y-4">
            <div className="space-y-2">
              <Label className="text-[10px] uppercase tracking-widest font-bold">Email</Label>
              <Input type="email" placeholder="seu@email.com" className="bg-background border-border" />
            </div>
            <div className="space-y-2">
              <Label className="text-[10px] uppercase tracking-widest font-bold">Senha</Label>
              <Input type="password" placeholder="••••••••" className="bg-background border-border" />
            </div>
            <Button className="w-full neon-button text-xs">Entrar</Button>
            <div className="text-center text-sm text-muted-foreground">
              <Link to="/recuperar-senha" className="text-primary hover:underline font-bold text-xs">Esqueceu a senha?</Link>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            Não tem uma conta?{" "}
            <Link to="/cadastro" className="text-primary hover:underline font-bold">Criar conta</Link>
          </p>
        </div>
      </section>
    </Layout>
  );
}
