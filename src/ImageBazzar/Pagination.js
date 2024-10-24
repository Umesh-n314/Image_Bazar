import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button } from "antd";
export function PaginationComp({ setPageNumber, page, total_pages,isLoading }) {
  const nextPage = () => {
    setPageNumber(page + 1);
  };
  const prevPage = () => {
    setPageNumber(page - 1);
  };

  return (
    <div className="pagination">
      <Button onClick={prevPage} disabled={page === 1 || isLoading} className="btn">
        <LeftOutlined />
      </Button>{" "}
      <b>
        {" "}
        {page}/{total_pages ?? 0}{" "}
      </b>
      <Button
        onClick={nextPage}
        disabled={page === total_pages || isLoading}
        className="btn"
      >
        {" "}
        <RightOutlined />
      </Button>
    </div>
  );
}
