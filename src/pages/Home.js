import React from 'react'
import Sidenav from '../comp/Sidenav'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Navbar from '../comp/Navbar';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Divider, Stack } from '@mui/material';
import StorefrontIcon from '@mui/icons-material/Storefront';
import '../home.css'
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Accordiane from '../comp/Accordiane';
import { Chart } from '../comp/Chart';

export const Home = () => {
  return (
    <>
   <div className='bg'>
   <Navbar/>
    <Box height={70}/>
    <Box sx={{ display: 'flex' }}>
    <Sidenav/>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
        <Stack spacing={2} direction={'row'}>
        <Card sx={{ minWidth: 49 +"%",height:140,bgcolor:'#24265e' }}>
      <CardContent>
        <div><CreditCardIcon sx={{color:'white'}}/></div>
        <Typography gutterBottom variant="h5" component="div" sx={{color:'green'}}>
          $700
        </Typography>
        <Typography gutterBottom variant="paragraph" component="div" sx={{color:'white'}}>
          Total Earning
        </Typography>
      </CardContent>
     
    </Card>
    <Card sx={{ minWidth: 49 +"%",height:140 ,bgcolor:'#4aa176'}}>
     <CardContent>
      <div><ShoppingBagIcon sx={{color:'white'}}/></div>
       <Typography gutterBottom variant="h5" component="div" >
         $500
       </Typography>
       <Typography gutterBottom variant="paragraph" component="div" sx={{color:'white'}}>
          Total Order
        </Typography>
     </CardContent>
    
   </Card>
        </Stack>
        </Grid>
        <Grid item xs={4}>
       <Stack spacing={2}>
       <Card sx={{bgcolor:'#4aa176', maxHeight:'62px'}}>
        <Stack spacing={2} direction='row'>
      <div className='iconstyle'> <StorefrontIcon sx={{ marginTop: '20px', marginLeft: '20px',color:'white'}}/> </div>
      <div className='paddingall'>
      <span className='rate' style={{color:'black'}}>$203</span>
      <br/>
      <span className='tag'>Total income</span>
      </div>
        </Stack>
    </Card>
    <Card sx={{bgcolor:'#24265e', maxHeight:'62px'}}>
      <Stack spacing={2} direction='row'>
        <div className='icsty'><StorefrontIcon sx={{ marginTop: '20px', marginLeft: '20px',color:'white'}}/></div>
      <div className='paddingall'>
      <span className='rate' style={{color:'green'}}>$203</span>
      <br/>
      <span className='tag'>Total income</span>
      </div>
        </Stack>
    </Card>
       </Stack>
        </Grid>
    <Box height={70}/>
        <Grid item xs={8}>
        <Card sx={{ height: 60 +"vh" }}>
      <CardContent>
        <Chart/>
      </CardContent>
     
    </Card>
        </Grid>
        <Grid item xs={4}>
        <Card sx={{ height: 60 +"vh" }}>
      <CardContent>
      <div className='paddingall'>
      <span className='rate' style={{color:'black'}}>Products</span>
      
      </div>
        <Accordiane/>
      </CardContent>
     
    </Card>
        </Grid>
      </Grid>
    </Box>
      </Box>
    </Box>
   </div>
    </>
  )
}
