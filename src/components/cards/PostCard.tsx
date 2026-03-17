import { Link } from "react-router-dom";
import type { Post } from "@/data/mockData";

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link
      to={`/novidades/${post.id}`}
      className="group relative flex flex-col w-full bg-card hover:bg-card/80 border border-border/40 hover:border-primary/50 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
        <span className="absolute left-3 top-3 rounded-full bg-primary px-2.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-primary-foreground">
          {post.category}
        </span>
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-3 bg-card border-t border-border/40 space-y-1.5">
        <h3 className="text-sm font-bold text-foreground uppercase tracking-wide group-hover:text-primary transition-colors line-clamp-2 text-center">
          {post.title}
        </h3>
        <p className="text-[10px] text-muted-foreground text-center">
          {new Date(post.date).toLocaleDateString("pt-BR")}
        </p>
      </div>
    </Link>
  );
}
