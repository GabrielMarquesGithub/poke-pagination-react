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
