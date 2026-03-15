import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Contato = () => {
  const [form, setForm] = useState({ nome: "", telefone: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada com sucesso!");
    setForm({ nome: "", telefone: "", mensagem: "" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-lg mx-auto w-full px-4 py-16">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-semibold tracking-tighter mb-2">Contato</h1>
          <p className="text-sm text-muted-foreground mb-8">Envie sua mensagem e entraremos em contato.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input placeholder="Nome" value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} required className="bg-secondary border-0 h-12" />
            <Input placeholder="Telefone" value={form.telefone} onChange={(e) => setForm({ ...form, telefone: e.target.value })} required className="bg-secondary border-0 h-12" />
            <Textarea placeholder="Mensagem" value={form.mensagem} onChange={(e) => setForm({ ...form, mensagem: e.target.value })} required className="bg-secondary border-0 min-h-[160px]" />
            <Button type="submit" className="w-full h-12 rounded-md font-semibold uppercase tracking-wider">
              Enviar Mensagem
            </Button>
          </form>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Contato;
