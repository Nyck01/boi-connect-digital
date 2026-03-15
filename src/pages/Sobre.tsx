import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "O Problema do Mercado",
    text: "O mercado de compra e venda de gado no Brasil é fragmentado, com negociações feitas por telefone ou WhatsApp, dependência de corretores locais, pouca transparência de preços e baixa liquidez.",
  },
  {
    title: "Como a Conect Boi Resolve",
    text: "A Conect Boi é uma plataforma digital que conecta produtores, compradores e corretores de gado, transformando o mercado tradicional e offline em um marketplace digital de alta liquidez.",
  },
  {
    title: "Para Produtores",
    text: "Mais compradores, melhores preços e negociações mais rápidas. Cadastre seus lotes e alcance compradores em todo o Brasil.",
  },
  {
    title: "Para Compradores",
    text: "Acesso a mais lotes, comparação de ofertas e menor custo de busca. Encontre exatamente o que precisa com filtros por região, raça e peso.",
  },
  {
    title: "Para Corretores",
    text: "Ampliação de mercado, mais transações e mais comissões. Transforme-se de intermediário local em broker digital nacional, inspirado no modelo QuintoAndar.",
  },
];

const Sobre = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1 max-w-3xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-semibold tracking-tighter mb-2">Sobre a Conect Boi</h1>
        <p className="text-muted-foreground text-sm mb-12">O mercado de gado, agora conectado.</p>

        <div className="space-y-10">
          {sections.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <h2 className="text-lg font-semibold mb-2">{s.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
    <Footer />
  </div>
);

export default Sobre;
