import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 13rem;
  justify-content: center;
  box-shadow: 5px 6px 6px -3px #000000;
  border-radius: 8px;
  align-items: center;
  margin-right: 2rem;
  padding: 0.5rem;
`;

export const Title = styled.p`
  font-weight: bold;
  text-align: center;
`;

export const Price = styled.p`
  font-weight: bold;
  color: #9115a6;
`;

export const Picture = styled.img`
  width: 7rem;
  height: 10rem;
`;
