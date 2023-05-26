import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GetProductsFromDB } from "../../Utilities/api/getProducts";

// Action
export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  const response = await GetProductsFromDB();
  return response;
});

const initialState = {
  isLoading: false,
  completeData: [],
  data: [],
  filterdata: [],
  currentPage: '',
  pageSize: '',
  totalRecords: '',
  isError: false,
};
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    SearchByName : (state,action) => {
      state.data = state.filterdata.filter((product) => product.title.toLowerCase().includes(action.payload))
      state.totalRecords = state.data.length;
      state.data = state.data.slice(0, state.pageSize);
    },
    SortProducts : (state, action) => {
      state.data = state.filterdata.sort((a, b) => action.payload === 1 ? Number(a.price) - Number(b.price) : action.payload === 2 ? Number(b.price) - Number(a.price) : action.payload === 3 ? a.title.localeCompare(b.title) : action.payload === 4 ? b.title.localeCompare(a.title) : Number(b.rating) - Number(a.rating));
      state.currentPage = 1;
      state.totalRecords = state.data.length;
      state.data = state.data.slice(0, state.pageSize);
    },
    PageSize : (state, action) => {
      state.pageSize = action.payload;
      state.data = state.filterdata.slice(0, state.pageSize);
    },
    ChangePageProducts : (state, action) =>  {
      state.data = state.filterdata.slice(state.pageSize * ( action.payload - 1 ), state.pageSize * action.payload);
      state.currentPage = action.payload;
    },
    productCategoryFilter : ( state, action ) =>{
      state.data = action.payload === "All" ? state.filterdata : state.filterdata.filter((product) => product.category === action.payload)
      state.totalRecords = state.data.length;
      state.data = state.data.slice(0, state.pageSize);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.pageSize = 10;
      state.totalRecords = action.payload.length;
      state.data = action.payload.slice(0,state.pageSize);
      state.filterdata = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export const { SearchByName, SortProducts, ChangePageProducts, PageSize, productCategoryFilter} = productSlice.actions;
export default productSlice.reducer;
