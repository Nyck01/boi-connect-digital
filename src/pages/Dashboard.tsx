import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageSquare, FileText, BarChart3, CreditCard, FolderOpen, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import LoteCard from "@/components/LoteCard";
import { lotes, mensagens } from "@/data/lotes";

const sidebarItems = [
  { icon: FileText, label: "Contratos" },
  { icon: BarChart3, label: "Análises Estatísticas" },
  { icon: CreditCard, label: "Pagamentos" },
  { icon: FolderOpen, label: "Documentação" },
];

const msgCategories = [
  { key: "corretores", label: "Corretores" },
  { key: "produtores", label: "Produtores" },
  { key: "transporte", label: "Transporte" },
] as const;

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("corretores");

  useEffect(() => {
    const u = localStorage.getItem("cb_user");
    if (!u) { navigate("/login"); return; }
    setUser(u);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("cb_user");
    navigate("/");
  };

  const filteredMsgs = mensagens.filter((m) => m.tipo === activeCategory);
  const myLotes = lotes.slice(0, 2);

  if (!user) return null;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar user={user} />

      <div className="flex-1 flex">
        {/* Main */}
        <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {/* Messages */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold tracking-tighter mb-4">Mensagens</h2>
              <div className="flex gap-3 mb-4">
                {msgCategories.map((cat) => (
                  <Button
                    key={cat.key}
                    variant={activeCategory === cat.key ? "default" : "secondary"}
                    size="sm"
                    onClick={() => setActiveCategory(cat.key)}
                    className="rounded-full text-xs uppercase tracking-wider"
                  >
                    {cat.label}
                  </Button>
                ))}
              </div>
              <div className="space-y-2">
                {filteredMsgs.length === 0 ? (
                  <p className="text-sm text-muted-foreground py-4">Nenhuma mensagem.</p>
                ) : (
                  filteredMsgs.map((msg) => (
                    <div key={msg.id} className="card-shadow bg-card rounded-md p-4 flex items-start gap-3">
                      <MessageSquare className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-medium">{msg.remetente}</p>
                        <p className="text-xs text-muted-foreground">{msg.mensagem}</p>
                        <p className="text-[10px] text-muted-foreground mt-1">{msg.data}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </section>

            {/* My Lots */}
            <section>
              <h2 className="text-xl font-semibold tracking-tighter mb-4">Meus Lotes</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {myLotes.map((lote) => (
                  <LoteCard key={lote.id} lote={lote} />
                ))}
              </div>
            </section>
          </motion.div>
        </main>

        {/* Sidebar */}
        <aside className="hidden lg:flex flex-col w-64 border-l bg-card/50 backdrop-blur-md p-6">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Visualizar</h3>
          <div className="space-y-2 flex-1">
            {sidebarItems.map((item) => (
              <button
                key={item.label}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </button>
            ))}
          </div>
          <Button variant="secondary" onClick={handleLogout} className="gap-2 mt-4">
            <LogOut className="h-4 w-4" />
            Sair
          </Button>
        </aside>
      </div>
    </div>
  );
};

export default Dashboard;
