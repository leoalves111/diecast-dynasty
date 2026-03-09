import { Link } from "react-router-dom";
import type { Post } from "@/data/mockData";

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link to={`/novidades/${post.id}`} className="group">
      <div className="overflow-hidden rounded-xl border border-border bg-card card-hover">
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
          <span className="absolute left-3 top-3 rounded-full bg-primary/90 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
            {post.category}
          </span>
        </div>
        <div className="p-4 space-y-2">
          <h3 className="font-display text-sm font-bold leading-tight line-clamp-2 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          <p className="text-xs text-muted-foreground line-clamp-2">{post.excerpt}</p>
          <p className="text-xs text-muted-foreground">{new Date(post.date).toLocaleDateString("pt-BR")}</p>
        </div>
      </div>
    </Link>
  );
}
