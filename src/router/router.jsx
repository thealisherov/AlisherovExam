    import { createBrowserRouter } from "react-router-dom";
    import App from "../App";
    import Home from "../components/Home";
    import Categories from "../components/Categories";
    import Cart from "../components/Cart";
    import AllProducts from "../components/AllProducts";
    import About from "../components/About";
    import Users from "../components/Users";
import NotFound from "../components/NotFound";
    export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        
        children: [
        { index: true, element: <Home /> },
        { path: "/home", element: <Home /> },
        { path: "/categories", element: <Categories /> },
        { path: "/cart", element: <Cart /> },
        { path: "all", element: <AllProducts /> },
        { path: "about", element: <About /> },
        { path: "users", element: <Users /> },
        ],
    },
{path:"*",
        element:<NotFound/>,}
    ]);
