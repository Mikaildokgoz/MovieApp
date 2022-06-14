import ReactPaginate from "react-paginate";
import React from "react";
import "./pagination.css";

const Paginate = ({ pageCount, page, setPage }) => {
  console.log(pageCount);
  const handlePageChange = (event) => {
  console.log(event.selected + 1);
  setPage(event.selected + 1);
  console.log(page);
  };

  return (
    <div className="paginate">
      <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        pageCount={pageCount}
        marginPagesDisplayed={5}
        pageRangeDisplayed={3}
        onPageChange={handlePageChange}
        containerClassName="pagination"
        activeClassName="active"
        forcePage={page - 1}
      />
    </div>
  );
};

export default Paginate;
