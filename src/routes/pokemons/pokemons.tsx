import { ReactElement, ReactNode, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Pokemon } from "../../components/pokemon";
import { PokeContext } from "../../context/pokeContext";

import { Button, Container, ContainerButtons, ContainerPokemons, Loading } from "./style";

export function Pokemons() {
  const { params } = useParams();
  const { pokemons, handleSetPokeList } = useContext(PokeContext);
  const [buttons, setButtons] = useState(1);
  const [page, setPage] = useState(0);
  const [shownPokemons, setShownPokemons] = useState(pokemons?.slice(page * 10, (page + 1) * 10));

  useEffect(() => {
    if (page + 1 < buttons) {
    }
  }, [page]);

  //reset na pagina ao se alterar os parâmetros
  useEffect(() => setPage(0), [params]);

  //calculando quantidade de botões
  useEffect(() => {
    //arrendondando pra cima para obter paginas que contem menos de um item
    if (pokemons) setButtons(Math.ceil(pokemons.length / 10));
  }, [pokemons]);

  useEffect(() => {
    //decidindo os pokemons mostrados, cortando o total por pagina
    setShownPokemons(pokemons?.slice(page * 10, (page + 1) * 10));
  }, [pokemons, page]);

  handleSetPokeList(params);

  //setando a pagina atual por dados vindo de um botão
  const handleSetPage = (page: number) => setPage(page);

  return (
    <>
      <Container>
        <ContainerPokemons>
          {shownPokemons &&
            shownPokemons[0].imgUrl &&
            shownPokemons.map((pokemon) => <Pokemon key={pokemon.name} name={pokemon.name} imgUrl={pokemon.imgUrl} />)}
          {shownPokemons && (
            <ContainerButtons>
              {/*Condicional para fixação do botão da pagina inicial*/}
              {page > 1 && (
                <>
                  <Button onClick={() => handleSetPage(0)}>1</Button>
                  <span>...</span>
                </>
              )}
              {Array(buttons)
                .fill(1)
                .map((button, index) => {
                  if (index === page || index === page + 1 || index === page - 1) {
                    return (
                      <Button selected={index === page} key={index} onClick={() => handleSetPage(index)}>
                        {button + index}
                      </Button>
                    );
                  }
                })}
              {/*Condicional para fixação do botão da pagina final*/}
              {page + 2 < buttons && (
                <>
                  <span>...</span>
                  <Button onClick={() => handleSetPage(buttons - 1)}>{buttons}</Button>
                </>
              )}
            </ContainerButtons>
          )}
          {!shownPokemons && (
            <Loading>
              <span></span>
            </Loading>
          )}
        </ContainerPokemons>
      </Container>
    </>
  );
}
