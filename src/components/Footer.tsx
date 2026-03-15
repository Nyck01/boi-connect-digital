import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t bg-card mt-auto">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-sm font-semibold mb-3">CONECT BOI</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            O mercado de gado, agora conectado. Plataforma digital para compra e venda de gado no Brasil.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Links</h4>
          <div className="space-y-2">
            <Link to="/marketplace" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Comprar</Link>
            <Link to="/sobre" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Sobre</Link>
            <Link to="/contato" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Contato</Link>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Contato</h4>
          <p className="text-sm text-muted-foreground">contato@conectboi.com.br</p>
        </div>
      </div>
      <div className="border-t mt-8 pt-6 text-center text-xs text-muted-foreground">
        © 2026 Conect Boi. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
