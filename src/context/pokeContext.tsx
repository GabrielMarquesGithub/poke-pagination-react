import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";

export interface pokemon {
  name: string;
  imgUrl: string;
}
interface IContext {
  pokemons: pokemon[] | null;
  handleSetPokeList: (generation: string | undefined) => void;
}
interface pokemonRequest {
  count: number;
  next: null;
  previous: null;
  results: {
    name: string;
    url: string;
  }[];
}
const pokeListSlice = {
  generationOne: { slice1: 0, slice2: 151 },
  generationTwo: { slice1: 151, slice2: 251 },
  generationThree: { slice1: 251, slice2: 386 },
  generationFour: { slice1: 386, slice2: 493 },
};

export const PokeContext = createContext<IContext>({} as IContext);

export const PokeProvider = ({ children }: { children: ReactNode }) => {
  const [pokemons, setPokemons] = useState<pokemon[] | null>(null);
  const [pokeList, setPokeList] = useState(pokeListSlice.generationOne);

  const handleSetPokeList = (generation: undefined | string) => {
    if (generation) {
      return setPokeList(
        pokeListSlice[generation as keyof typeof pokeListSlice]
      );
    }
    setPokeList(pokeListSlice.generationOne);
  };
  useEffect(() => {
    const AsyncFunc = async () => {
      const pokeInit = await axios.get<pokemonRequest>(
        "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
      );
      const pokeComplete = pokeInit.data.results
        .slice(pokeList.slice1, pokeList.slice2)
        .map((poke, index) => {
          return {
            name: poke.name,
            imgUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              pokeList.slice1 + index + 1
            }.png`,
          };
        });

      setPokemons(pokeComplete);
    };
    AsyncFunc();
  }, [pokeList]);

  const value = { pokemons, handleSetPokeList };
  return <PokeContext.Provider value={value}>{children}</PokeContext.Provider>;
};
