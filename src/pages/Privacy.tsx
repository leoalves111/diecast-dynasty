import Layout from "@/components/layout/Layout";

export default function Privacy() {
  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="container max-w-3xl">
          <h1 className="font-display text-3xl font-bold mb-6">Política de Privacidade</h1>
          <div className="prose prose-invert max-w-none space-y-4 text-muted-foreground leading-relaxed text-sm">
            <p>A CollectorsHub respeita sua privacidade. Esta política descreve como coletamos, usamos e protegemos suas informações.</p>
            <h2 className="font-display text-lg font-bold text-foreground mt-6">1. Informações Coletadas</h2>
            <p>Coletamos nome, email, telefone, cidade e estado durante o cadastro. Também podemos coletar dados de navegação.</p>
            <h2 className="font-display text-lg font-bold text-foreground mt-6">2. Uso das Informações</h2>
            <p>Utilizamos seus dados para fornecer e melhorar nossos serviços, comunicar atualizações e personalizar sua experiência.</p>
            <h2 className="font-display text-lg font-bold text-foreground mt-6">3. Compartilhamento</h2>
            <p>Não vendemos suas informações pessoais. Dados podem ser compartilhados com prestadores de serviços essenciais para o funcionamento da plataforma.</p>
            <h2 className="font-display text-lg font-bold text-foreground mt-6">4. Segurança</h2>
            <p>Implementamos medidas de segurança para proteger suas informações contra acesso não autorizado.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
