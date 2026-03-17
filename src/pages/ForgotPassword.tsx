import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Layout from "@/components/layout/Layout";

export default function ForgotPassword() {
  return (
    <Layout>
      <section className="flex min-h-[80vh] items-center justify-center py-12">
        <div className="w-full max-w-md space-y-6 px-6">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
              <span className="text-xl font-black text-primary-foreground">C</span>
            </div>
            <h1 className="text-2xl font-black uppercase italic tracking-tighter">Recuperar Senha</h1>
            <p className="mt-1 text-sm text-muted-foreground">Enviaremos um link para redefinir sua senha</p>
          </div>

          <div className="rounded-xl border border-border/40 bg-card p-6 space-y-4">
            <div className="space-y-2">
              <Label className="text-[10px] uppercase tracking-widest font-bold">Email</Label>
              <Input type="email" placeholder="seu@email.com" className="bg-background border-border" />
            </div>
            <Button className="w-full neon-button text-xs">Enviar link</Button>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            <Link to="/login" className="text-primary hover:underline font-bold">Voltar ao login</Link>
          </p>
        </div>
      </section>
    </Layout>
  );
}
