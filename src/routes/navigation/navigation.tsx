import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import pokePointer from "../../assets/pokePointer.svg";

import { BackgroundDisable, Container, ContainerIconMenu, ContainerMenu, IconMenu } from "./style";

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => setMenuOpen(!menuOpen);

  //função para dar tempo a animação de esconder
  const setHide = () => {
    if (!menuOpen) {
      setTimeout(() => {
        return false;
      }, 1000);
    }
    return true;
  };
  const hide = setHide();

  return (
    <>
      <Container>
        <ContainerIconMenu open={menuOpen}>
          <IconMenu onClick={handleMenuOpen}>
            <img src={pokePointer} alt="Menu Hambúrguer" />
          </IconMenu>
        </ContainerIconMenu>
        {hide && (
          <>
            <BackgroundDisable onClick={handleMenuOpen} open={menuOpen}></BackgroundDisable>
            <ContainerMenu open={menuOpen}>
              <Link to={`/generationOne`}>Primeira Geração</Link>

              <Link to={`/generationTwo`}>Segunda Geração</Link>

              <Link to={`/generationThree`}>Terceira Geração</Link>

              <Link to={`/generationFour`}>Quarta Geração</Link>
            </ContainerMenu>
          </>
        )}

        <Outlet />
      </Container>
    </>
  );
}
