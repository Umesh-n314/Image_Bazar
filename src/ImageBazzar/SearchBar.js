import { SearchOutlined } from "@ant-design/icons";
import { Button } from "antd";

export function SearchBar({
  setQuery,
  setPageNumber,
  searchText,
  setSearchText,
}) {
  function handleChange(e) {
    setSearchText(e.target.value);
    // console.log(search)
  }
  function setSearch() {
    setQuery(searchText);
    setPageNumber(1);
    // console.log(searchText);
  }

  return (
    <div className="search-bar">
      <input
        placeholder="search images...."
        value={searchText}
        onChange={handleChange}
      />
      <Button
        onClick={setSearch}
        type="primary"
        className="btn"
        icon={<SearchOutlined />}
      >
        Search
      </Button>
    </div>
  );
}
