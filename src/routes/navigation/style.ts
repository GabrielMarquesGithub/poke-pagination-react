import styled, { keyframes } from "styled-components";

interface AnimationProps {
  open: boolean;
}

const ExpandAnimation = keyframes`
    0%{
        width: 7rem;
    }
    100%{
        width: 18rem;
    }
`;
const ShrinkAnimation = keyframes`
    0%{
        width: 18rem;
    }
    30%{
        width: 20rem;
    }
    100%{
        width: 7rem;
    }
`;
export const BackgroundDisable = styled.div<AnimationProps>`
  background-color: black;
  top: 0;
  right: 0;

  width: 100vw;
  height: 100vh;

  position: fixed;
  transition: opacity 0.8s;
  z-index: ${(props) => (props.open ? "1" : "-1")};
  opacity: ${(props) => (props.open ? "0.5" : "0")};
`;
export const ContainerIconMenu = styled.div<AnimationProps>`
  animation: ${(props) => (props.open ? ExpandAnimation : ShrinkAnimation)} 1s forwards;
  position: relative;
  z-index: 3;

  box-shadow: 2px 2px 10px black;
  padding: 0.5rem;

  border-bottom-right-radius: 2rem;
  background-color: var(--dark-blue);

  display: flex;
  justify-content: end;
`;
export const IconMenu = styled.div`
  margin: 1.5rem;

  cursor: pointer;

  display: inline-block;
  img {
    width: 3rem;
    transition: transform 0.4s;
  }
  &:hover {
    img {
      transform: scale(0.9);
    }
  }
`;
const ApearAnimation = keyframes`
    0%{
        left: -15rem;
    }
    100%{
        left: 0rem;
    }
`;
const VanishAnimation = keyframes`
    0%{
        left: 0rem;
    }
    100%{
        left: -15rem;
    }
`;
export const ContainerMenu = styled.div<AnimationProps>`
  animation: ${(props) => (props.open ? ApearAnimation : VanishAnimation)} 1s forwards;
  position: absolute;
  z-index: 2;
  left: 0;

  padding: 2rem 0rem;

  background-color: var(--blue);
  border-bottom-right-radius: 2rem;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  box-shadow: 2px 2px 10px black;

  a {
    font-weight: bold;
    width: 100%;
    padding: 2rem;
    color: var(--text-light-blue);
    transition: background-color 0.2s, color 0.2s;
    &:hover {
      color: var(--dark-blue);
      background-color: var(--light-blue);
    }
  }
`;
export const Container = styled.div`
  width: 15rem;
`;
