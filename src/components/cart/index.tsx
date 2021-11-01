import React from "react";
import { Button } from "@chakra-ui/react";
import { Picture, Title, Price, Container, Card } from "../ProductsList/styles";

import { useCart } from "../../providers/cartProvider";

export const Cart = () => {
  const { cart, deleteProduct } = useCart();

  return (
    <Container>
      {cart.length !== 0 &&
        cart.map((product) => {
          return (
            <Card key={product.id}>
              <Picture src={product.image} alt="Product" />
              <Title>{product.title}</Title>
              <Price>R$ {product.price}</Price>
              <Button
                background="#df6523"
                variant="solid"
                width="11rem"
                color="#fff"
                fontWeight="normal"
                onClick={() => deleteProduct(product)}
              >
                Remover do carrinho
              </Button>
            </Card>
          );
        })}
    </Container>
  );
};
