import { useParams, Link } from "react-router-dom";
import { ChevronRight, CalendarDays } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { mockPosts } from "@/data/mockData";

export default function PostDetail() {
  const { id } = useParams();
  const post = mockPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-black uppercase">Post não encontrado</h1>
          <Link to="/novidades" className="mt-4 inline-block text-primary hover:underline font-bold text-sm">Voltar às novidades</Link>
        </div>
      </Layout>
    );
  }

  const others = mockPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <Layout>
      <article className="py-8 md:py-12">
        <div className="container max-w-[1600px] mx-auto px-6">
          <div className="mb-6 flex items-center gap-2 text-xs text-muted-foreground font-bold uppercase tracking-wider">
            <Link to="/" className="hover:text-foreground">Início</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/novidades" className="hover:text-foreground">Novidades</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground normal-case line-clamp-1">{post.title}</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="aspect-[16/8] overflow-hidden rounded-xl border border-border/40 mb-6">
                <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
              </div>
              <span className="inline-block rounded-full bg-primary px-3 py-0.5 text-[9px] font-black text-primary-foreground uppercase tracking-wider">{post.category}</span>
              <h1 className="mt-3 text-2xl font-black uppercase italic tracking-tighter md:text-4xl">{post.title}</h1>
              <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" /> {new Date(post.date).toLocaleDateString("pt-BR")}</span>
                <span>{post.author}</span>
              </div>
              <div className="mt-8 text-muted-foreground leading-relaxed space-y-4 text-sm">
                {post.content.split(". ").reduce((acc: string[][], sentence, i) => {
                  const idx = Math.floor(i / 3);
                  if (!acc[idx]) acc[idx] = [];
                  acc[idx].push(sentence);
                  return acc;
                }, []).map((group, i) => (
                  <p key={i}>{group.join(". ")}.</p>
                ))}
              </div>
            </div>

            <div>
              <div className="sticky top-20">
                <h3 className="text-sm font-black uppercase tracking-wide mb-4 border-l-4 border-primary pl-3">Outras Novidades</h3>
                <div className="space-y-4">
                  {others.map((p) => (
                    <Link key={p.id} to={`/novidades/${p.id}`} className="flex gap-3 group">
                      <img src={p.image} alt={p.title} className="h-16 w-24 rounded-lg object-cover shrink-0 border border-border/40" />
                      <div>
                        <p className="text-sm font-bold leading-tight line-clamp-2 group-hover:text-primary transition-colors">{p.title}</p>
                        <p className="text-[10px] text-muted-foreground mt-1">{new Date(p.date).toLocaleDateString("pt-BR")}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
