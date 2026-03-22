import { Trophy, Users, ShoppingBag, Newspaper } from "lucide-react";
import Layout from "@/components/layout/Layout";

export default function About() {
  return (
    <Layout>
      <section className="py-8 md:py-16">
        <div className="px-6 max-w-3xl">
          <div className="text-center mb-12">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary">
              <span className="text-2xl font-black text-primary-foreground">C</span>
            </div>
            <h1 className="text-3xl font-black italic uppercase tracking-tighter md:text-4xl">Sobre a CollectorsHub</h1>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Somos a plataforma premium para quem vive e respira colecionismo de miniaturas.
            </p>
          </div>

          <div className="space-y-8 text-muted-foreground leading-relaxed text-sm">
            <p>
              A CollectorsHub nasceu da paixão por miniaturas e do desejo de criar um espaço digno para a comunidade de colecionadores brasileiros. Acreditamos que colecionar vai muito além de acumular peças — é sobre descobrir raridades, compartilhar histórias e fazer parte de algo maior.
            </p>
            <p>
              Nossa plataforma reúne tudo que um colecionador precisa: eventos exclusivos para conquistar peças raras, um marketplace confiável para comprar e vender entre entusiastas, e um hub de conteúdo com novidades, lançamentos e tendências do mundo die-cast.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Trophy, title: "Eventos Exclusivos", desc: "Participe de eventos curados para conquistar peças raras e cobiçadas." },
                { icon: ShoppingBag, title: "Marketplace", desc: "Compre e venda entre colecionadores com confiança e transparência." },
                { icon: Newspaper, title: "Novidades", desc: "Fique por dentro dos lançamentos e tendências do universo die-cast." },
                { icon: Users, title: "Comunidade", desc: "Conecte-se com milhares de colecionadores apaixonados no Brasil." },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-border/40 bg-card p-5 card-hover">
                  <item.icon className="mb-3 h-7 w-7 text-primary" />
                  <h3 className="text-sm font-black uppercase tracking-wide text-foreground">{item.title}</h3>
                  <p className="mt-1 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>

            <p>
              Cada detalhe da CollectorsHub foi pensado para oferecer uma experiência premium — da interface escura e elegante até a curadoria dos eventos. Aqui, o colecionismo é tratado com a seriedade e paixão que merece.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
