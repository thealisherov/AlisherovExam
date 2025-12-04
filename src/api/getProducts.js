import { api } from "./axios";

export const getProducts = async (category) => {
  if (category === "all") {
    const res = await api.get("/products");
    return res.data.products;
  }

  const res = await api.get(`/products/category/${category}`);
  return res.data.products;
};
