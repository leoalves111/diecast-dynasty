import PostCard from "@/components/cards/PostCard";
import Layout from "@/components/layout/Layout";
import { mockPosts } from "@/data/mockData";

export default function News() {
  return (
    <Layout>
      <section className="py-8 md:py-12">
        <div className="container max-w-[1600px] mx-auto px-6">
          <div className="mb-8 border-l-4 border-primary pl-4">
            <h1 className="text-2xl font-black italic uppercase tracking-tighter md:text-3xl">Novidades</h1>
            <p className="mt-1 text-sm text-muted-foreground">Fique por dentro do mundo die-cast e colecionismo.</p>
          </div>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {mockPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
