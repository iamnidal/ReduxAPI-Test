import React, { useRef } from 'react'
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { SearchByName } from '../redux/slice/productSlice'
import { Input } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const SearchProduct = () => {
    const SearchInputRef = useRef();
    const dispatch = useDispatch();
    const SearchProduct = (e) => {
        dispatch(SearchByName(e.target.value));
    };
    return (
        <>  
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>  
            <InputLabel id="demo-simple-select-standard-label">Search Product</InputLabel>        
            <Input className='search-bar' 
                type='text'
                ref={SearchInputRef}
                onKeyUp={(e) => SearchProduct(e)} placeholder='Search...'/>
        </FormControl>
        </>
    )
}

export default SearchProduct