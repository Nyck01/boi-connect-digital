import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const estados = ["Goiás", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "São Paulo", "Tocantins", "Bahia", "Pará"];

const Vender = () => {
  const [form, setForm] = useState({
    quantidade: "",
    pesoMedio: "",
    raca: "",
    estado: "",
    descricao: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Lote cadastrado com sucesso! Entraremos em contato em breve.");
    setForm({ quantidade: "", pesoMedio: "", raca: "", estado: "", descricao: "" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-2xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <h1 className="text-2xl font-semibold tracking-tighter mb-2">Cadastrar Lote</h1>
          <p className="text-sm text-muted-foreground mb-8">
            Preencha as informações do seu lote para anunciar na plataforma.
          </p>

          <form onSubmit={handleSubmit} className="card-shadow bg-card rounded-lg p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Quantidade de cabeças</label>
                <Input
                  type="number"
                  placeholder="Ex: 50"
                  value={form.quantidade}
                  onChange={(e) => setForm({ ...form, quantidade: e.target.value })}
                  required
                  className="bg-secondary border-0 h-11"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Peso médio (kg)</label>
                <Input
                  type="number"
                  placeholder="Ex: 190"
                  value={form.pesoMedio}
                  onChange={(e) => setForm({ ...form, pesoMedio: e.target.value })}
                  required
                  className="bg-secondary border-0 h-11"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Raça</label>
                <Input
                  placeholder="Ex: Nelore"
                  value={form.raca}
                  onChange={(e) => setForm({ ...form, raca: e.target.value })}
                  required
                  className="bg-secondary border-0 h-11"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Estado</label>
                <select
                  value={form.estado}
                  onChange={(e) => setForm({ ...form, estado: e.target.value })}
                  required
                  className="flex h-11 w-full rounded-md bg-secondary px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <option value="">Selecione</option>
                  {estados.map((e) => (
                    <option key={e} value={e}>{e}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Descrição</label>
              <Textarea
                placeholder="Descreva as características do lote, condições de criação, vacinas..."
                value={form.descricao}
                onChange={(e) => setForm({ ...form, descricao: e.target.value })}
                required
                className="bg-secondary border-0 min-h-[120px]"
              />
            </div>

            <Button type="submit" className="w-full h-12 rounded-md font-semibold uppercase tracking-wider">
              Cadastrar Lote
            </Button>
          </form>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Vender;
