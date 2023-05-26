import React from 'react';
import CardItem from './CardItem';
import { Grid} from "@mui/material";

const ProductList = ({product}) => {
  return (
    <>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {product.map((prod) => 
            <CardItem product={prod}/>
        )}
      </Grid>
    </>
  )
}

export default ProductList