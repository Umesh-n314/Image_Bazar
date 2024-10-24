import { Button } from "antd";
export const RetryTab = ({ setQuery, setPageNumber, setSearchText }) => {
  function setSearch() {
    setSearchText("");
    setQuery("rain");
    setPageNumber(1);
    // console.log(searchText);
  }
  return (
    <div className="retry">
      <h4>Images Not Found... Search for other Images</h4>
      <Button type="primary" danger onClick={setSearch}>
        Go To Menu...
      </Button>
    </div>
  );
};
