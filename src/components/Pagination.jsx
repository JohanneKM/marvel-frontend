import { useState } from "react";

const Pagination = ({ nbPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(16).keys()].slice(1);
  console.log(currentPage);

  const goToNextPage = () => {
    if (currentPage !== nbPages) setCurrentPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return (
    <nav className="pagination">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <a className="page-link" onClick={goToPrevPage} href="#">
            <img src="../src/assets/img/previous.png" alt="previous" />
          </a>
        </li>
        {pageNumbers.map((pgNumber) => (
          <li
            key={pgNumber}
            className={`${currentPage == pgNumber ? "active" : ""} `}
          >
            <a
              onClick={() => setCurrentPage(pgNumber)}
              className="page-link"
              href="#"
            >
              {pgNumber}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a className="page-link" onClick={goToNextPage} href="#">
            <img src="../src/assets/img/next.png" alt="next" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
