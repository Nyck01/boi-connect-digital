import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoteCard from "@/components/LoteCard";
import { lotes } from "@/data/lotes";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.04 } },
};

const Marketplace = () => {
  const [searchParams] = useSearchParams();
  const regiao = searchParams.get("regiao") || "";

  const filtered = useMemo(() => {
    if (!regiao) return lotes;
    return lotes.filter((l) => l.localizacao.toLowerCase().includes(regiao.toLowerCase()));
  }, [regiao]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold tracking-tighter">Lotes Disponíveis</h1>
          {regiao && (
            <p className="text-sm text-muted-foreground mt-1">
              Resultados para: <span className="font-medium text-foreground">{regiao}</span>
            </p>
          )}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-lg text-muted-foreground mb-2">Nenhum lote encontrado nesta região.</p>
            <p className="text-sm text-muted-foreground">Tente buscar por outra região.</p>
          </div>
        ) : (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filtered.map((lote) => (
              <LoteCard key={lote.id} lote={lote} />
            ))}
          </motion.div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Marketplace;
