import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { lotes } from "@/data/lotes";
import { toast } from "sonner";

const LoteDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const lote = lotes.find((l) => l.id === Number(id));
  const [form, setForm] = useState({ nome: "", telefone: "", mensagem: "" });

  if (!lote) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">Lote não encontrado.</p>
        </div>
        <Footer />
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Sua solicitação foi enviada com sucesso!");
    setForm({ nome: "", telefone: "", mensagem: "" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4" /> Voltar
        </button>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          {/* Image */}
          <div className="rounded-lg overflow-hidden card-shadow mb-6">
            <img src={lote.imagem} alt={lote.titulo} className="w-full max-h-[480px] object-cover" />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-6">
            {[
              `${lote.quantidade} ${lote.tipo}s`,
              `Peso médio: ${lote.peso_medio} kg`,
              lote.raca,
              lote.localizacao,
            ].map((tag) => (
              <span
                key={tag}
                className="bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <Button
            size="lg"
            className="w-full sm:w-auto min-w-[300px] h-14 rounded-lg text-sm font-semibold uppercase tracking-wider mb-10"
            onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
          >
            Iniciar Negociação
          </Button>

          {/* Description + Contact */}
          <div className="grid md:grid-cols-2 gap-8" id="contact-form">
            <div className="card-shadow bg-card rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4">Descrição</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{lote.descricao}</p>
            </div>

            <div className="card-shadow bg-card rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-1">Entre em contato</h2>
              <p className="text-xs text-muted-foreground mb-4">
                Entre em contato conosco, faça sua proposta e tire suas dúvidas
              </p>
              <form onSubmit={handleSubmit} className="space-y-3">
                <Input
                  placeholder="Nome"
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  required
                  className="bg-secondary border-0 h-11"
                />
                <Input
                  placeholder="Telefone"
                  value={form.telefone}
                  onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                  required
                  className="bg-secondary border-0 h-11"
                />
                <Textarea
                  placeholder="Mensagem"
                  value={form.mensagem}
                  onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                  required
                  className="bg-secondary border-0 min-h-[120px]"
                />
                <Button type="submit" className="w-full h-11 rounded-md font-semibold uppercase tracking-wider">
                  Mandar Dúvida
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default LoteDetail;
