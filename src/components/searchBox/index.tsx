import { SearchBoxContainer } from "./style";

interface PropsSearchBox {
  handleSearch: (searchValue: string) => void;
  handleSetItemsPerPage: (value: number | string) => void;
}

export const SearchBox = ({
  handleSearch,
  handleSetItemsPerPage,
}: PropsSearchBox) => {
  return (
    <SearchBoxContainer>
      <input
        onChange={(e) => handleSearch(e.target.value)}
        type="text"
        placeholder="Pesquise um pokemon..."
      />
      <select onChange={(e) => handleSetItemsPerPage(e.target.value)}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
    </SearchBoxContainer>
  );
};
