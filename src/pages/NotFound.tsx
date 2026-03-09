import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  return (
    <Layout>
      <div className="flex min-h-[70vh] items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-6xl font-black text-gradient-primary">404</h1>
          <p className="mt-4 text-xl font-medium">Página não encontrada</p>
          <p className="mt-2 text-muted-foreground">A página que você procura não existe ou foi removida.</p>
          <Link to="/" className="mt-6 inline-block">
            <Button className="bg-gradient-primary hover:opacity-90">Voltar ao início</Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
