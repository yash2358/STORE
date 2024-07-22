import React from 'react'
import Sidenav from '../comp/Sidenav'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Navbar from '../comp/Navbar';
import Productlist from './products/Productslist';

export const Products = () => {
    
  return (
    <>
    <Navbar/>
    <Box height={70}/>
    <Box sx={{ display: 'flex' }}>
    <Sidenav/>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
  
          
     <Productlist/>
      </Box>
    </Box>
    </>
  )
}


