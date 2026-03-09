import { useParams, Link } from "react-router-dom";
import { ChevronRight, CalendarDays } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PostCard from "@/components/cards/PostCard";
import { mockPosts } from "@/data/mockData";

export default function PostDetail() {
  const { id } = useParams();
  const post = mockPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="font-display text-2xl font-bold">Post não encontrado</h1>
          <Link to="/novidades" className="mt-4 inline-block text-primary hover:underline">Voltar às novidades</Link>
        </div>
      </Layout>
    );
  }

  const others = mockPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <Layout>
      <article className="py-8 md:py-12">
        <div className="container">
          <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Início</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/novidades" className="hover:text-foreground">Novidades</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground line-clamp-1">{post.title}</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="aspect-[16/8] overflow-hidden rounded-xl border border-border mb-6">
                <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
              </div>
              <span className="inline-block rounded-full bg-primary/90 px-3 py-0.5 text-xs font-bold text-primary-foreground uppercase">{post.category}</span>
              <h1 className="mt-3 font-display text-2xl font-bold md:text-4xl">{post.title}</h1>
              <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" /> {new Date(post.date).toLocaleDateString("pt-BR")}</span>
                <span>{post.author}</span>
              </div>
              <div className="mt-8 text-muted-foreground leading-relaxed space-y-4">
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
                <h3 className="font-display text-lg font-bold mb-4">Outras Novidades</h3>
                <div className="space-y-4">
                  {others.map((p) => (
                    <Link key={p.id} to={`/novidades/${p.id}`} className="flex gap-3 group">
                      <img src={p.image} alt={p.title} className="h-16 w-24 rounded-lg object-cover shrink-0" />
                      <div>
                        <p className="text-sm font-medium leading-tight line-clamp-2 group-hover:text-primary transition-colors">{p.title}</p>
                        <p className="text-xs text-muted-foreground mt-1">{new Date(p.date).toLocaleDateString("pt-BR")}</p>
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
