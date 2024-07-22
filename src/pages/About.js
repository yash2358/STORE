import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Sidenav from '../comp/Sidenav';
import Navbar from '../comp/Navbar';
import { Grid, Rating, Stack } from '@mui/material';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function About() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const[va,setVa]=React.useState(0);
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
        <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Our Brand" {...a11yProps(0)} />
          <Tab label="Feedback" {...a11yProps(1)} />
          <Tab label="Contact Us" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Box>We provide every single need of our costumers.</Box>
        <br></br>
        <img width="900" height="450" src='https://www.feedough.com/wp-content/uploads/2016/09/brand-image-768x429.png.webp'></img>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        
        <Box>Give your valuable feedback</Box>
        <Rating
  name="simple-controlled"
  value={va}
  onChange={(event) => {
    setVa(event.target.value);
  }}
/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Stack direction='column'>
          <Box>Contact us on following details:</Box>
          <Box> Phone no: +91 8736863728</Box>
          <Box>Email id:xyz@gmail.com</Box>
        </Stack>
      </CustomTabPanel>
    </Box>
        </Grid>
      </Grid>
    </Box>
    </Box>
    </Box>
   </div>
    </>
  );
}

