import Layout from "@/components/layout/Layout";

export default function Terms() {
  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="container max-w-3xl">
          <h1 className="font-display text-3xl font-bold mb-6">Termos de Uso</h1>
          <div className="prose prose-invert max-w-none space-y-4 text-muted-foreground leading-relaxed text-sm">
            <p>Ao utilizar a plataforma CollectorsHub, você concorda com os seguintes termos e condições. Leia atentamente antes de usar nossos serviços.</p>
            <h2 className="font-display text-lg font-bold text-foreground mt-6">1. Aceitação dos Termos</h2>
            <p>Ao acessar e usar este site, você aceita e concorda em estar vinculado a estes Termos de Uso.</p>
            <h2 className="font-display text-lg font-bold text-foreground mt-6">2. Descrição do Serviço</h2>
            <p>A CollectorsHub é uma plataforma que conecta colecionadores de miniaturas, oferecendo eventos, marketplace e conteúdo editorial.</p>
            <h2 className="font-display text-lg font-bold text-foreground mt-6">3. Eventos</h2>
            <p>A participação em eventos está sujeita ao pagamento da taxa indicada. A taxa não garante contemplação. Os eventos só serão realizados quando atingirem o número mínimo de participantes.</p>
            <h2 className="font-display text-lg font-bold text-foreground mt-6">4. Marketplace</h2>
            <p>A CollectorsHub não intermedia pagamentos entre compradores e vendedores. Todas as negociações são realizadas diretamente entre as partes envolvidas.</p>
            <h2 className="font-display text-lg font-bold text-foreground mt-6">5. Responsabilidades</h2>
            <p>Os usuários são responsáveis pela veracidade das informações fornecidas e pelo conteúdo publicado em seus anúncios.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
