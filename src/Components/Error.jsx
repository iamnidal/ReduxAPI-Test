import React from 'react';
import { Box, Paper, Stack } from '@mui/material';

const Error = () =>  (
  <Box minHeight="95vh" >
    <Stack direction='row' justifyContent='center' alignItems='center' height='80vh' >
      <Box sx={{color: 'red', font:'bold', fontSize: '24px'}}>There is some error, try again later.</Box>
    </Stack>
  </Box>
);

export default Error;