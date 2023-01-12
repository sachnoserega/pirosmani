import React from "react";
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss'

const Pagination = ({ currentPage, onChangePage }) => {
    return ( 
        <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={6}
        pageCount={5}
        forcePage={currentPage - 1}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
     );
}
 
export default Pagination;
