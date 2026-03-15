import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Lote } from "@/data/lotes";

const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { ease: [0.25, 0.1, 0.25, 1] as const, duration: 0.3 } },
};

const LoteCard = ({ lote }: { lote: Lote }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      variants={item}
      className="card-shadow bg-card rounded-lg overflow-hidden hover:-translate-y-0.5 hover:card-shadow-hover transition-all duration-200 cursor-pointer group"
      onClick={() => navigate(`/lote/${lote.id}`)}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={lote.imagem}
          alt={lote.titulo}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-3 left-3 bg-foreground/80 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-sm uppercase tracking-wider">
          LOTE #{String(lote.id).padStart(3, "0")}
        </span>
      </div>

      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium tabular-nums">{lote.quantidade} Cabeças</span>
          <span className="text-muted-foreground tabular-nums">Peso médio: {lote.peso_medio} kg</span>
        </div>

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>{lote.tipo} {lote.raca}</span>
          <span>•</span>
          <span>{lote.localizacao}</span>
        </div>

        <div className="flex items-center gap-2 pt-1">
          <Button
            size="sm"
            className="flex-1 rounded-md text-xs font-semibold uppercase tracking-wider"
            onClick={(e) => { e.stopPropagation(); navigate(`/lote/${lote.id}`); }}
          >
            Analisar Lote
          </Button>
          <ShieldCheck className="h-5 w-5 text-muted-foreground" />
        </div>
      </div>
    </motion.div>
  );
};

export default LoteCard;
