import cattleLot1 from "@/assets/cattle-lot1.jpg";
import cattleLot2 from "@/assets/cattle-lot2.jpg";
import cattleLot3 from "@/assets/cattle-lot3.jpg";

export interface Lote {
  id: number;
  titulo: string;
  quantidade: number;
  peso_medio: number;
  tipo: string;
  raca: string;
  localizacao: string;
  descricao: string;
  imagem: string;
}

export const lotes: Lote[] = [
  {
    id: 1,
    titulo: "Lote 1",
    quantidade: 50,
    peso_medio: 190,
    tipo: "Bezerro",
    raca: "Nelore",
    localizacao: "Goiás",
    descricao: "Lote de bezerros nelore criados a pasto em fazenda certificada. Animais vacinados e vermifugados, com excelente genética e boa conformação. Prontos para recria.",
    imagem: cattleLot1,
  },
  {
    id: 2,
    titulo: "Lote 2",
    quantidade: 70,
    peso_medio: 270,
    tipo: "Novilha",
    raca: "Nelore",
    localizacao: "Mato Grosso",
    descricao: "Novilhas nelore de alta qualidade, criadas em sistema semi-intensivo. Excelente acabamento e prontas para abate ou reprodução.",
    imagem: cattleLot2,
  },
  {
    id: 3,
    titulo: "Lote 3",
    quantidade: 50,
    peso_medio: 190,
    tipo: "Bezerro",
    raca: "Nelore",
    localizacao: "Minas Gerais",
    descricao: "Bezerros nelore desmamados, com boa estrutura corporal. Criados em pastagem de alta qualidade com suplementação mineral.",
    imagem: cattleLot3,
  },
  {
    id: 4,
    titulo: "Lote 4",
    quantidade: 50,
    peso_medio: 190,
    tipo: "Bezerro",
    raca: "Nelore",
    localizacao: "Goiás",
    descricao: "Lote de bezerros nelore com excelente padrão racial. Animais dóceis e de fácil manejo, ideais para confinamento.",
    imagem: cattleLot1,
  },
  {
    id: 5,
    titulo: "Lote 5",
    quantidade: 80,
    peso_medio: 320,
    tipo: "Boi Gordo",
    raca: "Nelore",
    localizacao: "Mato Grosso do Sul",
    descricao: "Bois gordos nelore terminados a pasto, prontos para abate. Excelente rendimento de carcaça.",
    imagem: cattleLot3,
  },
  {
    id: 6,
    titulo: "Lote 6",
    quantidade: 40,
    peso_medio: 250,
    tipo: "Novilha",
    raca: "Nelore",
    localizacao: "Tocantins",
    descricao: "Novilhas nelore para recria, com genética comprovada e bom ganho de peso diário.",
    imagem: cattleLot2,
  },
  {
    id: 7,
    titulo: "Lote 7",
    quantidade: 60,
    peso_medio: 200,
    tipo: "Bezerro",
    raca: "Nelore",
    localizacao: "Goiás",
    descricao: "Bezerros nelore de primeira cria, vacinados e com documentação em dia. Excelente oportunidade.",
    imagem: cattleLot1,
  },
  {
    id: 8,
    titulo: "Lote 8",
    quantidade: 90,
    peso_medio: 350,
    tipo: "Boi Gordo",
    raca: "Nelore",
    localizacao: "São Paulo",
    descricao: "Bois nelore terminados em confinamento, com alto rendimento e excelente acabamento de gordura.",
    imagem: cattleLot3,
  },
];

export const mensagens = [
  { id: 1, remetente: "Produtor João", tipo: "produtores", mensagem: "Tenho interesse no lote 3.", data: "14/03/2026" },
  { id: 2, remetente: "Corretor Silva", tipo: "corretores", mensagem: "Novo lote disponível na região de Goiás.", data: "13/03/2026" },
  { id: 3, remetente: "Transportadora ABC", tipo: "transporte", mensagem: "Orçamento do frete para 50 cabeças.", data: "12/03/2026" },
];
