import { Route, Routes } from "react-router-dom";
import { Navigation } from "./routes/navigation/navigation";
import { Pokemons } from "./routes/pokemons/pokemons";

import { GlobalStyle } from "./style/global";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Pokemons />} />
          <Route path="/:params" element={<Pokemons />} />
        </Route>
      </Routes>
    </>
  );
}
