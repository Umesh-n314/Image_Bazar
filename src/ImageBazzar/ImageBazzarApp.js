import "./imagebazar.scss";
import { ImageList } from "./ImageList";
import { PaginationComp } from "./Pagination";
import { SearchBar } from "./SearchBar";
import axios from "axios";
import { useEffect, useState } from "react";
import { RetryTab } from "./Retry";
import { Spin } from "antd";

const api_key = process.env.REACT_APP_UNSPLASH_API_KEY;
// console.log(api_key)
function ImageBazarApp() {
  const [searchText, setSearchText] = useState("");
  const [ApiStatus, setApiStatus] = useState("init");
  const [query, setQuery] = useState("weather");
  const [data, setData] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const isLoading = ApiStatus === "pending" || ApiStatus === "init";

  async function fetchImages() {
    try {
      setApiStatus("pending");
      const response = await axios({
        url: "https://api.unsplash.com/search/photos",
        method: "get",
        params: {
          client_id: api_key,
          query: query,
          page: pageNumber,
          per_page:12,
        },
      });
      if (response.data.total) {
        setData(response.data);
        setApiStatus("success");
      } else {
        setApiStatus("error");
      }
      //   console.log(response);
    } catch (error) {
      setApiStatus("error");
      console.log(error);
    }
  }
  useEffect(() => {
    if (query && pageNumber >= 1) {
      fetchImages();
    }
  }, [query, pageNumber]);

  return (
    <div className="image-bazar">
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        setQuery={setQuery}
        setPageNumber={setPageNumber}
      />
      {isLoading ? (
        <div className="loading">
          <Spin className="spinner" />
        </div>
      ) : ApiStatus === "success" ? (
        <ImageList ImagesList={data.results} />
      ) : (
        <RetryTab
          searchText={searchText}
          setSearchText={setSearchText}
          setQuery={setQuery}
          setPageNumber={setPageNumber}
        />
      )}
      <PaginationComp
        isLoading={isLoading}
        setPageNumber={setPageNumber}
        page={pageNumber}
        total_pages={data?.total_pages}
      />
    </div>
  );
}
export default ImageBazarApp;
