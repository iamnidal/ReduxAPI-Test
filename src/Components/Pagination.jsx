import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ChangePageProducts } from "../redux/slice/productSlice";

const Pagination = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const { pageSize, totalRecords} = state.products;
    const pageNumbers = [];
    for(let i = 1; i<= Math.ceil(totalRecords / pageSize); i++){
        pageNumbers.push(i);
    }
    const ChangePage = (page) =>{
        dispatch(ChangePageProducts(page));
    }
    return (
        <>
            <nav>
                <ul className='pagination'>
                    {pageNumbers.map(page =>(
                        <li key={page} className='page-item'>
                            <button className='page-link' onClick={() => ChangePage(page)} >{page}</button>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}

export default Pagination