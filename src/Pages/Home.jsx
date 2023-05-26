import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, PageSize } from "../redux/slice/productSlice";
import "./../App.css";
import {  Row, Col, Container } from "react-bootstrap";
import { useRef, useEffect } from "react";
import ProductList from "../Components/ProductList";
import Pagination from "../Components/Pagination";
import SortBy from "../Components/SortBy";
import SearchProduct from "../Components/SearchProduct";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Loading from "../Components/Loading";
import CategoryFilter from "../Components/CategoryFilter";
import Header from '../Components/Header'
import NoProduct from '../Components/NoProduct';
import Error from '../Components/Error';

const Home = () => {
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  console.log("State", state);
  const PageSizeRef = useRef();

  const dispatchPageSize = (e) => {
    dispatch(PageSize(e.target.value));
  };

  if (state.products.isLoading) {
    return <Loading />;
  }
  if (state.products.isError) {
    return <Error />;
  }
  return (
    <>
      <Header />
      <Container className="mt-2">
        <Row className="justify-content-between">
          <Col md={3}>
            <SearchProduct />
          </Col>
          <Col md={3}>
            <SortBy />
          </Col>
          <Col>
            <CategoryFilter />
          </Col>
          <Col md={2}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Per Size
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                onChange={(e) => dispatchPageSize(e)}
                label="Per Size"
              >
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={25}>25</MenuItem>
              </Select>
            </FormControl>
          </Col>
        </Row>
        <Row>
          {state.products.totalRecords === 0 && <NoProduct />}
        </Row>
        <Row>
          {state.products.totalRecords > 0 && (
            <ProductList product={state?.products?.data} />
          )}
        </Row>
        <Row className="float-right">
          <Pagination />
        </Row>
      </Container>
    </>
  )
}

export default Home