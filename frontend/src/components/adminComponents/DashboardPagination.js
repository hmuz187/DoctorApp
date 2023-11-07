import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';

import icons from '../../utils/icon/reactIcon'
import PostCardItem from './PostCardItem';

// const MyPaginate = styled(ReactPaginate).attrs({
//     // You can redefine classes here, if you want.
//     activeClassName: 'active', // default to "selected"
// })`
//     margin-bottom: 2rem;
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
//     list-style-type: none;
//     padding: 0 5rem;

//     li a {
//       border-radius: 7px;
//       padding: 0.1rem 1rem;
//       border: gray 1px solid;
//       cursor: pointer;
//     }
//     li.previous a,
//     li.next a,
//     li.break a {
//       border-color: transparent;
//     }
//     li.active a {
//       background-color: #0366d6;
//       border-color: transparent;
//       color: white;
//       min-width: 32px;
//     }
//     li.disabled a {
//       color: grey;
//     }
//     li.disable,
//     li.disabled a {
//       cursor: default;
//     }
//   `;


const DashBoardPagination = ({ itemsPerPage, items }) => {

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
                <PostCardItem currentItems={currentItems} />
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

export default DashBoardPagination