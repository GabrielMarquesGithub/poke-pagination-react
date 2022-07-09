import styled, { keyframes } from "styled-components";

const outlineAnimation = keyframes`
0%{
    outline-color: var(--blue);
}
50%{
    outline-color: var(--light-blue);
}
100%{
    outline-color: var(--blue);
}
`;
export const SearchBoxContainer = styled.div`
  width: 26rem;
  display: flex;
  justify-content: space-between;
  input {
    width: 80%;

    height: 3rem;
    border-radius: 2rem;
    padding: 1rem 1.5rem;

    font-size: 1.3rem;

    border: none;
    outline: 3px solid var(--blue);
    box-shadow: 2px 2px 10px black;

    &:focus {
      animation: ${outlineAnimation} 1s infinite;
    }
  }
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    width: 3rem;
    height: 3rem;
    border-radius: 3rem;

    text-align: center;
    font-size: 1.5rem;

    background: var(--light-blue);
    color: white;

    outline: 3px solid var(--blue);

    option {
      padding: 1rem;
    }
  }
`;
