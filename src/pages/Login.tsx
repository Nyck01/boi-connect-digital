import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import { toast } from "sonner";

const Login = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (user === "nycholas" && pass === "123") {
      localStorage.setItem("cb_user", "Nycholas");
      navigate("/dashboard");
    } else {
      toast.error("Usuário ou senha incorretos.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-sm card-shadow bg-card rounded-lg p-8">
          <h1 className="text-2xl font-semibold tracking-tighter mb-6 text-center">Entrar</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input placeholder="Usuário" value={user} onChange={(e) => setUser(e.target.value)} required className="bg-secondary border-0 h-12" />
            <Input placeholder="Senha" type="password" value={pass} onChange={(e) => setPass(e.target.value)} required className="bg-secondary border-0 h-12" />
            <Button type="submit" className="w-full h-12 rounded-md font-semibold uppercase tracking-wider">
              Entrar
            </Button>
          </form>
        </motion.div>
      </main>
    </div>
  );
};

export default Login;
