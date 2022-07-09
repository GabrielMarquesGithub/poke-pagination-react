import { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Pokemon } from "../../components/pokemon";
import { SearchBox } from "../../components/searchBox";
import { PokeContext, pokemon } from "../../context/pokeContext";

import {
  Button,
  Container,
  ContainerButtons,
  ContainerPokemons,
  Loading,
} from "./style";

export function Pokemons() {
  const calcPokemonsNumber = (itemsPerPage: number) =>
    researchedPokemons?.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

  const { params } = useParams();
  const { pokemons, handleSetPokeList } = useContext(PokeContext);

  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [buttons, setButtons] = useState(1);
  const [page, setPage] = useState(0);
  const [researchedPokemons, setResearchedPokemons] = useState<
    pokemon[] | undefined | null
  >(pokemons);
  const [searchValue, setSearchValue] = useState("");
  const [shownPokemons, setShownPokemons] = useState(
    calcPokemonsNumber(itemsPerPage)
  );

  //função para setar os pokemons pesquisados
  useEffect(() => {
    setResearchedPokemons(
      //lendo o array e retornando items que que retornam true para o include
      pokemons?.filter((poke) => poke.name.includes(searchValue))
    );
  }, [searchValue, pokemons]);

  //seta os pokemons recebidos da api com a utilização dos parâmetros
  useEffect(() => handleSetPokeList(params), [params]);
  //reset na pagina ao se alterar os parâmetros
  useEffect(() => setPage(0), [params]);

  //calculando quantidade de botões
  useEffect(() => {
    //arrendondando pra cima para obter paginas que contem menos de um item
    if (researchedPokemons)
      setButtons(Math.ceil(researchedPokemons.length / itemsPerPage));
  }, [researchedPokemons, itemsPerPage]);

  useEffect(() => {
    //decidindo os pokemons mostrados, cortando o total por pagina
    setShownPokemons(calcPokemonsNumber(itemsPerPage));
    //setando o scroll para o topo da pagina ao mudar de pagina
  }, [researchedPokemons, page, itemsPerPage]);

  //setando a pagina atual por dados vindo de um botão
  const handleSetPage = (page: number) => setPage(page);

  //função para ser executada no componente de pesquisa
  const handleSearch = (searchValue: string) => setSearchValue(searchValue);

  //função para ser executada no componente de pesquisa
  const handleSetItemsPerPage = (value: string | number) =>
    setItemsPerPage(Number(value));

  return (
    <>
      <Container>
        <SearchBox
          handleSearch={handleSearch}
          handleSetItemsPerPage={handleSetItemsPerPage}
        />
        <ContainerPokemons>
          {shownPokemons &&
            shownPokemons.map((pokemon) => (
              <Pokemon
                key={pokemon.name}
                name={pokemon.name}
                imgUrl={pokemon.imgUrl}
              />
            ))}
          {!shownPokemons && (
            <Loading>
              <span></span>
            </Loading>
          )}
        </ContainerPokemons>
        {shownPokemons && (
          <ContainerButtons>
            {/*Condicional para fixação do botão da pagina inicial*/}
            {page > 1 && (
              <>
                <Button onClick={() => handleSetPage(0)}>1</Button>
                <span>-</span>
              </>
            )}
            {Array(buttons)
              .fill(1)
              .map((button, index) => {
                if (
                  index === page ||
                  index === page + 1 ||
                  index === page - 1
                ) {
                  return (
                    <Button
                      selected={index === page}
                      key={index}
                      onClick={() => handleSetPage(index)}
                    >
                      {button + index}
                    </Button>
                  );
                }
              })}
            {/*Condicional para fixação do botão da pagina final*/}
            {page + 2 < buttons && (
              <>
                <span>-</span>
                <Button onClick={() => handleSetPage(buttons - 1)}>
                  {buttons}
                </Button>
              </>
            )}
          </ContainerButtons>
        )}
      </Container>
    </>
  );
}
