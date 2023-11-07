import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import PostTableItem from './PostTableItem';


const ManagePostPagination = ({ itemsPerPage, items }) => {

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
                <PostTableItem currentItems={currentItems} />
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                    containerClassName="flex items-center justify-center mt-8 mb-4"
                    pageClassName="block border border-solid border-lightGray hover:bg-lightGray w-10 h-10 flex items-center justify-center rounded-md mr-4 ml-4"
                    activeClassName="bg-blue-500 text-white"
                    previousClassName='text-xl font-bold hover:text-blue-500'
                    nextClassName='text-xl font-bold hover:text-blue-500'
                    marginPagesDisplayed={1}
                />
            </div>


        </>
    );
}

export default ManagePostPagination