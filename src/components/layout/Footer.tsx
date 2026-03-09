import { Link } from "react-router-dom";
import { Flame } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
                <Flame className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-display text-lg font-bold">CollectorsHub</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A plataforma premium para colecionadores de miniaturas. Eventos, marketplace e conteúdo para quem vive o colecionismo.
            </p>
          </div>

          <div>
            <h4 className="mb-3 font-display text-sm font-semibold">Plataforma</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/eventos" className="hover:text-foreground transition-colors">Eventos</Link></li>
              <li><Link to="/marketplace" className="hover:text-foreground transition-colors">Marketplace</Link></li>
              <li><Link to="/novidades" className="hover:text-foreground transition-colors">Novidades</Link></li>
              <li><Link to="/sobre" className="hover:text-foreground transition-colors">Sobre</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-display text-sm font-semibold">Categorias</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Hot Wheels</li>
              <li>Matchbox</li>
              <li>Tomica</li>
              <li>Majorette</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-display text-sm font-semibold">Suporte</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/faq" className="hover:text-foreground transition-colors">Perguntas Frequentes</Link></li>
              <li><Link to="/contato" className="hover:text-foreground transition-colors">Contato</Link></li>
              <li><Link to="/termos" className="hover:text-foreground transition-colors">Termos de Uso</Link></li>
              <li><Link to="/privacidade" className="hover:text-foreground transition-colors">Política de Privacidade</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 md:flex-row">
          <p className="text-xs text-muted-foreground">
            © 2026 CollectorsHub. Todos os direitos reservados.
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <Link to="/termos" className="hover:text-foreground transition-colors">Termos</Link>
            <Link to="/privacidade" className="hover:text-foreground transition-colors">Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
