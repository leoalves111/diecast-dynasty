import { Link, useNavigate } from "react-router-dom";
import { Search, Bell, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-[hsl(var(--navbar-bg))]/95 backdrop-blur supports-[backdrop-filter]:bg-[hsl(var(--navbar-bg))]/60">
      <div className="flex h-16 items-center px-6 gap-4 max-w-[1600px] mx-auto w-full">
        {/* Left: Search */}
        <div className="flex-1 max-w-2xl flex items-center gap-4">
          <div className="relative group flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-foreground transition-colors" />
            <Input
              placeholder="Buscar eventos, anúncios, novidades..."
              className="pl-9 bg-secondary/50 border-border/50 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary h-10 w-full transition-all"
            />
          </div>
          <Link to="/eventos">
            <Button className="hidden md:flex neon-button h-10 px-5 text-xs gap-2">
              Participar de Eventos
            </Button>
          </Link>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3 ml-auto">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full border-2 border-background" />
          </Button>

          <div className="flex items-center gap-2">
            <Button onClick={() => navigate("/login")} variant="ghost" className="font-bold text-sm">
              Entrar
            </Button>
            <Button
              onClick={() => navigate("/dashboard")}
              variant="ghost"
              className="pl-1 pr-1 h-10 gap-2 hover:bg-secondary/50 border border-transparent hover:border-border/50 rounded-xl"
            >
              <Avatar className="h-9 w-9 border-2 border-border">
                <AvatarFallback className="bg-secondary text-muted-foreground font-bold text-xs">U</AvatarFallback>
              </Avatar>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
