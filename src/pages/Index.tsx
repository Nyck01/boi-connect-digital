import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroCattle from "@/assets/hero-cattle.jpg";
import cattlePortrait from "@/assets/cattle-portrait.jpg";

const Index = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/marketplace${search ? `?regiao=${encodeURIComponent(search)}` : ""}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img src={heroCattle} alt="Gado nelore em pastagem" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-lg bg-card/95 backdrop-blur-sm rounded-lg p-8 card-shadow"
          >
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tighter leading-tight mb-2">
              Encontre seu gado de forma fácil
            </h1>
            <div className="h-1 w-24 bg-primary rounded-full mb-6" />

            <div className="space-y-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Busque por região"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  className="pl-10 h-12 rounded-md bg-secondary border-0"
                />
              </div>
              <Button onClick={handleSearch} className="w-full h-12 rounded-md text-sm font-semibold uppercase tracking-wider">
                Buscar
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Institutional section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="card-shadow bg-card rounded-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 sm:p-12 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-semibold tracking-tighter leading-tight mb-4">
                    Comprar ou vender seu gado não precisa ser um desafio.
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                    Com a Conect Boi, você faz negócio com segurança completa da documentação e suporte especializado do início ao fim.
                  </p>
                </div>
                <div className="mt-8">
                  <Button
                    variant="outline"
                    onClick={() => navigate("/sobre")}
                    className="rounded-full gap-2 px-8 h-12 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Saiba mais
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="aspect-square md:aspect-auto">
                <img src={cattlePortrait} alt="Gado nelore" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
