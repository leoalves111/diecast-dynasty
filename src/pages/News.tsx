import PostCard from "@/components/cards/PostCard";
import Layout from "@/components/layout/Layout";
import { mockPosts } from "@/data/mockData";

export default function News() {
  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="mb-8">
            <h1 className="font-display text-3xl font-bold md:text-4xl">Novidades</h1>
            <p className="mt-2 text-muted-foreground">Fique por dentro do mundo die-cast e colecionismo.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mockPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
