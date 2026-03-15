import { Link, useNavigate } from "react-router-dom";
import { User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { useState } from "react";

interface NavbarProps {
  user?: string | null;
}

const Navbar = ({ user }: NavbarProps) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Conect Boi" className="h-10 w-auto" />
            <span className="text-lg font-semibold tracking-tight">CONECT BOI</span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/marketplace" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              COMPRAR
            </Link>
            <Link to="/vender" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              VENDER
            </Link>
            <Link to="/sobre" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              LINKS ÚTEIS
            </Link>
            {user ? (
              <Button onClick={() => navigate("/dashboard")} className="rounded-full gap-2">
                <User className="h-4 w-4" />
                {user}
              </Button>
            ) : (
              <Button onClick={() => navigate("/login")} className="rounded-full gap-2">
                <User className="h-4 w-4" />
                ENTRAR
              </Button>
            )}
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link to="/marketplace" className="block px-3 py-2 text-sm font-medium text-muted-foreground" onClick={() => setMenuOpen(false)}>COMPRAR</Link>
            <Link to="/vender" className="block px-3 py-2 text-sm font-medium text-muted-foreground" onClick={() => setMenuOpen(false)}>VENDER</Link>
            <Link to="/sobre" className="block px-3 py-2 text-sm font-medium text-muted-foreground" onClick={() => setMenuOpen(false)}>LINKS ÚTEIS</Link>
            <Button onClick={() => { navigate(user ? "/dashboard" : "/login"); setMenuOpen(false); }} className="w-full rounded-full gap-2">
              <User className="h-4 w-4" />
              {user ? user : "ENTRAR"}
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
