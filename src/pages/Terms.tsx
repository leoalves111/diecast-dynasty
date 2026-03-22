import Layout from "@/components/layout/Layout";

export default function Terms() {
  return (
    <Layout>
      <section className="py-8 md:py-12">
        <div className="px-6 max-w-3xl">
          <div className="mb-8 border-l-4 border-primary pl-4">
            <h1 className="text-2xl font-black italic uppercase tracking-tighter">Termos de Uso</h1>
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
            <p>Ao utilizar a plataforma CollectorsHub, você concorda com os seguintes termos e condições.</p>
            <h2 className="text-lg font-black uppercase tracking-wide text-foreground mt-6">1. Aceitação dos Termos</h2>
            <p>Ao acessar e usar este site, você aceita e concorda em estar vinculado a estes Termos de Uso.</p>
            <h2 className="text-lg font-black uppercase tracking-wide text-foreground mt-6">2. Descrição do Serviço</h2>
            <p>A CollectorsHub é uma plataforma que conecta colecionadores de miniaturas, oferecendo eventos, marketplace e conteúdo editorial.</p>
            <h2 className="text-lg font-black uppercase tracking-wide text-foreground mt-6">3. Eventos</h2>
            <p>A participação em eventos está sujeita ao pagamento da taxa indicada. A taxa não garante contemplação.</p>
            <h2 className="text-lg font-black uppercase tracking-wide text-foreground mt-6">4. Marketplace</h2>
            <p>A CollectorsHub não intermedia pagamentos entre compradores e vendedores.</p>
            <h2 className="text-lg font-black uppercase tracking-wide text-foreground mt-6">5. Responsabilidades</h2>
            <p>Os usuários são responsáveis pela veracidade das informações fornecidas e pelo conteúdo publicado.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
