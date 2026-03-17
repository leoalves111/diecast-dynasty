import Layout from "@/components/layout/Layout";

export default function Privacy() {
  return (
    <Layout>
      <section className="py-8 md:py-12">
        <div className="container max-w-3xl mx-auto px-6">
          <div className="mb-8 border-l-4 border-primary pl-4">
            <h1 className="text-2xl font-black italic uppercase tracking-tighter">Política de Privacidade</h1>
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
            <p>A CollectorsHub respeita sua privacidade. Esta política descreve como coletamos, usamos e protegemos suas informações.</p>
            <h2 className="text-lg font-black uppercase tracking-wide text-foreground mt-6">1. Informações Coletadas</h2>
            <p>Coletamos nome, email, telefone, cidade e estado durante o cadastro.</p>
            <h2 className="text-lg font-black uppercase tracking-wide text-foreground mt-6">2. Uso das Informações</h2>
            <p>Utilizamos seus dados para fornecer e melhorar nossos serviços.</p>
            <h2 className="text-lg font-black uppercase tracking-wide text-foreground mt-6">3. Compartilhamento</h2>
            <p>Não vendemos suas informações pessoais.</p>
            <h2 className="text-lg font-black uppercase tracking-wide text-foreground mt-6">4. Segurança</h2>
            <p>Implementamos medidas de segurança para proteger suas informações.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
