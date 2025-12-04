import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.jsx";
import DarkProvider from "./Contex/DarkProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CartProvider } from "./Contex/CartContext.jsx";
const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <DarkProvider>
      <CartProvider>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </CartProvider>
    </DarkProvider>
  </QueryClientProvider>
);
