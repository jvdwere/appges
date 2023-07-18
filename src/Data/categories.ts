import { Category } from "../Types/Category";
export const categories: Category = {
    
  food: { title: "Alimentação", color: "orange.400", expense: true },
  rent: { title: "Aluguel", color: "red.400", expense: true },
  bill: { title: "Conta", color: "orange.400", expense: true },
  services: { title: "Assinatura", color: "orange.400", expense: true },
  financing: { title: "Financiamento", color: "red.400", expense: true },

  salary: { title: "Salário", color: "green.400", expense: false },
  extraIncome: { title: "Renda extra", color: "green.400", expense: false },
  stocks: { title: "Dividendos", color: "blue.400", expense: false },
  bonus: { title: "Bônus", color: "blue.400", expense: false },

};
