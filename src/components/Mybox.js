import { Box, Divider, Grid, Stack } from '@mui/material'
import React from 'react'

export const Mybox = () => {
  return (
    <Stack sx={{border:'5px Solid'}} direction='horizontal' spacing={2} divider={<Divider orientation='horizontal' flexItem></Divider>}>
<Box  sx={{
        backgroundColor:'secondary.main',
        color:'white',
        height:'100px',
        width:'200px',
        padding:'10px',
        '&:hover':{
            backgroundColor:'primary.main'
        }
    }}>Revolution</Box>
    <Box display='flex' height='100px' width='200px' p='10px' bgcolor='success.light'></Box>
    <Grid container>
      <Grid item ><Box sx={{padding:'20px', bgcolor:'primary.main'}}>Yash</Box></Grid>
      <Grid item ><Box sx={{padding:'20px', bgcolor:'secondary.main'}}>Singhal</Box></Grid>
      <Grid item ><Box sx={{padding:'20px', bgcolor:'success.main'}}>Head</Box></Grid>
      <Grid item ><Box sx={{padding:'20px', bgcolor:'error.main'}}>Start</Box></Grid>
    </Grid>
    </Stack>
  )
}
