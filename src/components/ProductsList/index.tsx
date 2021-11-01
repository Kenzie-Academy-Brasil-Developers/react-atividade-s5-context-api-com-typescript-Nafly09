import * as React from "react";
import { Button } from "@chakra-ui/react";
import { Picture, Title, Price, Container, Card } from "./styles";
import { useCart } from "../../providers/cartProvider";

const products = [
  {
    id: 11,
    title: "Samsung Galaxy A01 Dual SIM 32 GB preto 2 GB RAM",
    description: "Processador Snapdragon 439 Octa-Core de 2GHz com 2GB de RAM.",
    price: 699.99,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_661764-MLA44282592265_122020-O.webp",
  },
  {
    id: 12,
    title: "Xiaomi Redmi 9A Dual SIM 32 GB azul 2 GB RAM",
    description:
      "Processador MediaTek Helio G25 Octa-Core de 2GHz com 2GB de RAM.",
    price: 799.99,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_958898-MLA43824398273_102020-O.webp",
  },
  {
    id: 13,
    title: "LG K11+ Dual SIM 32 GB dourado 3 GB RAM",
    description:
      "Processador MediaTek Helio G25 Octa-Core de 2GHz com 2GB de RAM.",
    price: 859.1,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_633672-MLA31348110302_072019-O.webp",
  },
  {
    id: 45,
    title: 'iPhone 11 Apple (64GB) Branco Tela 6,1" 4G Câmera 12MP iOS',
    description:
      "Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.",
    price: 3899.99,
    image:
      "https://images-americanas.b2w.io/produtos/01/00/img/1614132/3/1614132374_1GG.jpg",
  },
];

export const ProductsList = () => {
  const { cart, addProduct } = useCart();
  return (
    <React.Fragment>
      <Container>
        {products.map((product, index) => {
          return (
            <Card key={index}>
              <Picture src={product.image} alt="Product" />
              <Title>{product.title}</Title>
              <Price>R$ {product.price}</Price>
              <Button
                background="#9115a6"
                variant="solid"
                width="11rem"
                color="#fff"
                fontWeight="normal"
                onClick={() => addProduct(product)}
              >
                Adicionar ao carrinho
              </Button>
            </Card>
          );
        })}
      </Container>
    </React.Fragment>
  );
};
