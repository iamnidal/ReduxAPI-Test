import React, {useRef} from 'react';
import { useDispatch } from "react-redux";
import { productCategoryFilter } from "../redux/slice/productSlice";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { categories} from '../Utilities/Constants'
const CategoryFilter = () => {
    const dispatch = useDispatch();
    const dispatchCategoryFilter = (e) => {
        dispatch(productCategoryFilter(e.target.value));
    };
    return (
        <>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">Filter By Category</InputLabel>
            <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                onChange={(e) => dispatchCategoryFilter(e)}
                label="Sort By"
            >
                <MenuItem value="All">
                <em>All</em>
                </MenuItem>
                { categories.map(( category ) => (
                    <MenuItem value={category}>{category}</MenuItem>
                ))}
            </Select>
            </FormControl>
        </>
    )
}

export default CategoryFilter