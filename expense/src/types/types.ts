export type Expense = {
  title: string;
  amount: string;
  category: Category;
  date: string;
};
export type Category = "food" | "transport" | "shopping" | "bills" | "other";
