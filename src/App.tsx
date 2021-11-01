import * as React from "react";
import { ProductsList } from "./components/ProductsList";
import { Cart } from "./components/cart";

export const App = () => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <h1 style={{ textAlign: "center", fontWeight: "bold", fontSize: "2rem" }}>
      Produtos
    </h1>
    <ProductsList />
    <h1 style={{ textAlign: "center", fontWeight: "bold", fontSize: "2rem" }}>
      Carrinho
    </h1>
    <Cart />
  </div>
);
