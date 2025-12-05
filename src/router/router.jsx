import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import Categories from "../components/Categories";
import Cart from "../components/Cart";
import AllProducts from "../components/AllProducts";
import About from "../components/About";
import Users from "../components/Users";
import NotFound from "../components/NotFound";
import ProductDetails from "../components/ProductDetails";
import LoginPage from "../components/LoginPage";
import Dashboard from "../components/Dashboard";
import ProtectedRoute from "../components/ProtectedRoute";
import SignUp from "../signUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "categories", element: <Categories /> },
      { path: "cart", element: <Cart /> },
      { path: "all", element: <AllProducts /> },
      { path: "all/:category", element: <AllProducts /> },
      { path: "product/:id", element: <ProductDetails /> },
      { path: "about", element: <About /> },
      { path: "users", element: <Users /> },

      // AUTH
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignUp /> },

      // PROTECTED
      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
    ],
  },

  { path: "*", element: <NotFound /> },
]);
