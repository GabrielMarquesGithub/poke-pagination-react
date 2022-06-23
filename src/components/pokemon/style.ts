import styled, { keyframes } from "styled-components";

const AnimationImg = keyframes`
0%{
  top: 0;
}
50%{
  top: -1rem;
}
100%{
  top: 0rem;
}
`;
export const Container = styled.div`
  cursor: pointer;
  width: 165px;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2rem;

  background: linear-gradient(140deg, var(--light-blue), var(--dark-blue));
  height: 14rem;

  box-shadow: 2px 2px 10px black;
  border-radius: 1rem;

  transition: transform 0.4s;
  img {
    width: 100%;
    position: relative;
    top: 0;
  }
  span {
    width: 130%;
    text-align: center;
    text-transform: capitalize;
    color: white;
  }
  &:hover {
    transform: scale(1.1);
    filter: brightness(1.1);
    img {
      animation: ${AnimationImg} 0.6s infinite;
    }
  }

  @media (max-width: 750px) {
    width: 120px;
    height: 10rem;
  }
  @media (max-width: 560px) {
    width: 200px;
    height: 15rem;
  }
`;
