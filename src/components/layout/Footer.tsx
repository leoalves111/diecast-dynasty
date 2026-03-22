import { Link } from "react-router-dom";
import { Twitter, Instagram, Youtube, MessageCircle, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-[#050608] pt-12 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 mb-10">
          {/* Brand */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-tighter text-white">
                COLLECTORS<span className="text-primary">HUB</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-xs leading-6 max-w-xs">
              A plataforma premium para colecionadores de miniaturas. Eventos exclusivos, marketplace confiável e conteúdo para quem vive o colecionismo.
            </p>
            <div className="flex gap-2 pt-1">
              <SocialIcon icon={<Instagram size={14} />} />
              <SocialIcon icon={<Youtube size={14} />} />
              <SocialIcon icon={<Twitter size={14} />} />
              <SocialIcon icon={<Facebook size={14} />} />
              <SocialIcon icon={<MessageCircle size={14} />} />
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-1" />

          {/* Platform */}
          <div className="lg:col-span-2">
            <h4 className="font-black text-white uppercase tracking-wider mb-4 text-xs text-primary/80">Plataforma</h4>
            <ul className="space-y-2 text-xs text-muted-foreground font-medium">
              <li><Link to="/eventos" className="hover:text-primary transition-colors">Eventos</Link></li>
              <li><Link to="/marketplace" className="hover:text-primary transition-colors">Marketplace</Link></li>
              <li><Link to="/novidades" className="hover:text-primary transition-colors">Novidades</Link></li>
              <li><Link to="/sobre" className="hover:text-primary transition-colors">Sobre</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="lg:col-span-2">
            <h4 className="font-black text-white uppercase tracking-wider mb-4 text-xs text-primary/80">Suporte</h4>
            <ul className="space-y-2 text-xs text-muted-foreground font-medium">
              <li><Link to="/faq" className="hover:text-primary transition-colors">Perguntas Frequentes</Link></li>
              <li><Link to="/contato" className="hover:text-primary transition-colors">Contato</Link></li>
              <li><Link to="/termos" className="hover:text-primary transition-colors">Termos de Uso</Link></li>
              <li><Link to="/privacidade" className="hover:text-primary transition-colors">Privacidade</Link></li>
            </ul>
          </div>

          {/* Brands / Categories */}
          <div className="lg:col-span-3">
            <h4 className="font-black text-white uppercase tracking-wider mb-4 text-xs text-primary/80">Categorias</h4>
            <div className="grid grid-cols-2 gap-2">
              {['Hot Wheels', 'Matchbox', 'Tomica', 'Majorette', 'Greenlight', 'Auto World'].map((brand) => (
                <div key={brand} className="h-8 bg-white/[0.03] border border-white/[0.05] rounded flex items-center justify-center text-[9px] font-bold text-muted-foreground hover:bg-white/[0.08] hover:text-white transition-all cursor-default">
                  {brand}
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 rounded-lg bg-primary/5 border border-primary/10 flex items-start gap-3">
              <ShieldIcon />
              <div className="space-y-0.5">
                <div className="text-white text-[10px] font-bold uppercase">Plataforma Segura</div>
                <div className="text-muted-foreground text-[9px] leading-tight">Eventos transparentes com acompanhamento em tempo real.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-muted-foreground font-medium">
            © 2026 CollectorsHub. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6 text-[10px] text-muted-foreground font-medium">
            <div className="flex items-center gap-2 px-2 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-500">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
              </span>
              <span className="font-bold tracking-wide text-[9px] uppercase">Operacional</span>
            </div>
            <div className="hidden md:block">
              Hora do Servidor: <span className="text-white font-mono">{new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon }: { icon: any }) {
  return (
    <a href="#" className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:scale-110 active:scale-95 transition-all duration-300">
      {icon}
    </a>
  );
}

function ShieldIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary w-4 h-4 flex-shrink-0"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
  );
}
