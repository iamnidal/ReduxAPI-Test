import React, {useRef} from 'react';
import { useDispatch } from "react-redux";
import { SortProducts } from "../redux/slice/productSlice";
import { Form } from 'react-bootstrap'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SortBy = () => {
    const dispatch = useDispatch();
    const SortRef = useRef();
    const dispatchSort = (e) => {
        dispatch(SortProducts(e.target.value));
    };
    return (
    <>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">Sort By</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            onChange={(e) => dispatchSort(e)}
            label="Sort By"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>Price : Low to High</MenuItem>
            <MenuItem value={2}>Price : High to Low</MenuItem>
            <MenuItem value={3}>Alphabetically : A-Z</MenuItem>
            <MenuItem value={4}>Alphabetically : Z-A</MenuItem>
            <MenuItem value={5}>Top rated</MenuItem>
          </Select>
        </FormControl>
    </>
    )
}

export default SortBy