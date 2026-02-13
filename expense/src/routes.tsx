import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Income from "./pages/Income";
import Expense from "./pages/Expense";
import Home from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "income", element: <Income /> },
      { path: "expense", element: <Expense /> },
    ],
  },
]);
