import React, { ReactNode } from "react";
import { CartProvider, useCart } from "./cartProvider";

interface ProvidersProps {
  children: ReactNode;
}

export const GlobalContext = ({ children }: ProvidersProps) => {
  return (
    <>
      <CartProvider>{children}</CartProvider>
    </>
  );
};
