import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  margin-left: auto;
  width: 100vw;
  padding: 0 10rem;
  padding-right: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
`;
const LoadingAnimation = keyframes`
0%{
  filter: brightness(0);
}
50%{
  filter: brightness(1.5);
}
100%{
  filter: brightness(0);
}
`;
export const Loading = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    animation: ${LoadingAnimation} 3s infinite;

    position: relative;
    border-radius: 50%;
    height: 10rem;
    width: 10rem;
    border: 1rem solid var(--light-blue);

    &::after,
    &::before {
      position: absolute;
      top: 45%;

      content: "";
      display: block;
      background-color: var(--light-blue);
    }
    &::after {
      left: -1rem;

      height: 1rem;
      width: 10rem;
    }
    &::before {
      left: 35%;
      top: 35%;

      border-radius: 50%;
      height: 2.5rem;
      width: 2.5rem;
    }
  }
`;
interface ButtonProps {
  selected?: boolean;
}
export const Button = styled.button<ButtonProps>`
  border-radius: 0.25rem;
  height: 2rem;
  width: 2rem;
  margin: 0 0.4rem;
  box-shadow: 2px 2px 10px black;

  color: white;
  font-size: 1.1rem;
  font-weight: bold;

  border: 1px solid white;
  background: var(--light-blue);

  transform: ${(props) => (props.selected ? "scale(1.05)" : "scale(1)")};

  transition: transform 0.2s;
  &:hover {
    transform: ${(props) => (props.selected ? "scale(1.05)" : "scale(0.9)")};
  }
`;
export const ContainerButtons = styled.div`
  height: 3rem;

  span {
    top: 0.4rem;
    position: relative;
    color: white;
  }
`;
export const ContainerPokemons = styled.div`
  margin-top: -6rem;

  height: 75vh;
  max-width: 1100px;

  display: grid;
  grid-template-columns: repeat(5, 1fr);

  gap: 2rem;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 930px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 560px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
