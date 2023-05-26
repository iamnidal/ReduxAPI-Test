import React from 'react';
import { Box, Paper, Stack } from '@mui/material';

const NoProduct = () =>  (
  <Box minHeight="95vh" >
    <Stack direction='row' justifyContent='center' alignItems='center' height='80vh' >
      <Box sx={{ font:'bold', fontSize: '24px'}}>No Such Product Available.</Box>
    </Stack>
  </Box>
);

export default NoProduct;