import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import { BlogCategoryShowDefault } from '.';

const CategoryShowPagination = ({items , itemsPerPage}) => {
    const [itemOffset, setItemOffset] = useState(0);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };
  
    return (
        <>
            <div>
                <BlogCategoryShowDefault currentItems={currentItems} />
                <ReactPaginate
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={10}
                    pageCount={pageCount}
                    renderOnZeroPageCount={null}

                    containerClassName="flex text-white text-[3px] items-center justify-center mt-8 mb-4"
                    pageClassName=" w-3 h-3 rounded-full block border border-solid border-lightGray hover:bg-lightGray flex items-center justify-center mr-4 ml-4"
                    activeClassName="w-3 h-3 rounded-full bg-blue-500 text-blue-500"
                    marginPagesDisplayed={1}
                />
            </div>
  
  
        </>
    );
}

export default CategoryShowPagination