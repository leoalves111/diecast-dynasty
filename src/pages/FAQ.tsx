import Layout from "@/components/layout/Layout";

const faqs = [
  { q: "O que é a CollectorsHub?", a: "A CollectorsHub é uma plataforma premium para colecionadores de miniaturas, oferecendo eventos exclusivos, marketplace entre colecionadores e conteúdo editorial." },
  { q: "Como funciona a participação em eventos?", a: "Você escolhe um evento, paga a taxa de participação e acompanha o progresso. Quando o evento atinge o mínimo necessário, ele encerra e o resultado é divulgado." },
  { q: "A plataforma intermedia pagamentos no marketplace?", a: "Não. A negociação e pagamento são combinados diretamente entre comprador e vendedor via WhatsApp." },
  { q: "Posso anunciar minhas miniaturas?", a: "Sim! Crie sua conta, acesse o painel e publique anúncios com fotos, descrição, preço e informações de contato." },
  { q: "Quais marcas são aceitas?", a: "Aceitamos todas as marcas de miniaturas colecionáveis: Hot Wheels, Matchbox, Tomica, Majorette, Greenlight, Auto World, entre outras." },
  { q: "A participação em eventos garante contemplação?", a: "Não. A taxa de participação não garante contemplação — trata-se de uma participação no evento, cujas regras estão descritas na página de cada evento." },
  { q: "Como faço para criar uma conta?", a: "Clique em 'Criar conta' no header, preencha seus dados e comece a explorar a plataforma." },
  { q: "A plataforma é gratuita?", a: "A criação de conta e navegação são gratuitas. Taxas se aplicam apenas à participação em eventos." },
];

export default function FAQ() {
  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="container max-w-3xl">
          <h1 className="font-display text-3xl font-bold mb-2">Perguntas Frequentes</h1>
          <p className="text-muted-foreground mb-8">Tudo que você precisa saber sobre a CollectorsHub.</p>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-display text-sm font-bold">{faq.q}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
