import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 95vw;
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
  margin-right: 5rem;
  margin-left: auto;
  height: 90vh;

  width: 70vw;

  display: grid;
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
  selected: boolean;
}
export const Button = styled.button<ButtonProps>`
  border-radius: 50%;
  height: 2.5rem;
  width: 2.5rem;
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
  width: 100%;

  align-self: end;
  grid-column: 1/6;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContainerPokemons = styled.div`
  margin-top: -6rem;
  margin-right: 5rem;
  margin-left: auto;
  height: 90vh;

  width: 70vw;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
`;
