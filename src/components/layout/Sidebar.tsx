import { Home, Box, ShoppingCart, Newspaper, Info, HelpCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const SidebarItem = ({
  icon: Icon,
  label,
  to,
  active,
}: {
  icon: any;
  label: string;
  to: string;
  active: boolean;
}) => (
  <TooltipProvider>
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <Link
          to={to}
          className={cn(
            "group relative flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl transition-all duration-200",
            active
              ? "text-primary bg-primary/10"
              : "text-muted-foreground hover:text-foreground hover:bg-sidebar-accent"
          )}
        >
          <Icon
            className={cn(
              "w-6 h-6 transition-transform duration-200 group-hover:scale-110",
              active && "drop-shadow-[0_0_8px_rgba(204,255,0,0.4)]"
            )}
          />
          <span className="text-[10px] font-bold uppercase tracking-wide opacity-80 group-hover:opacity-100">
            {label}
          </span>
          {active && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full shadow-[0_0_10px_rgba(204,255,0,0.5)]" />
          )}
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right" className="bg-popover text-popover-foreground border-border font-bold">
        <p>{label}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: "INÍCIO", to: "/" },
    { icon: Box, label: "EVENTOS", to: "/eventos" },
    { icon: ShoppingCart, label: "MARKET", to: "/marketplace" },
    { icon: Newspaper, label: "NEWS", to: "/novidades" },
    { icon: Info, label: "SOBRE", to: "/sobre" },
  ];

  const isActive = (to: string) => {
    if (to === "/") return location.pathname === "/";
    return location.pathname.startsWith(to);
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-20 bg-sidebar flex flex-col items-center py-6 border-r border-sidebar-border z-50">
      {/* Logo */}
      <div className="mb-8">
        <Link to="/" className="flex items-center justify-center w-12 h-12">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-black text-xl shadow-[0_0_15px_rgba(204,255,0,0.3)]">
            C
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col gap-3 w-full px-3">
        {navItems.map((item) => (
          <SidebarItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            to={item.to}
            active={isActive(item.to)}
          />
        ))}
      </nav>

      {/* Bottom */}
      <div className="mt-auto flex flex-col gap-4">
        <Link to="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
          <HelpCircle className="w-6 h-6" />
        </Link>
      </div>
    </aside>
  );
};
