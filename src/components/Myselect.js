import { Box, MenuItem, TextField } from '@mui/material'
import React, { useState } from 'react'

export const Myselect = () => {
    const[val,setVal]=useState([])
    const handleChange=(e)=>{
        setVal(e.target.value);
    }
    console.log({val})
  return (
    
    <div>
        <Box width='250px'>
            <TextField label='Select Country' select fullWidth onChange={handleChange} SelectProps={{multiple:true}} value={val}>
                <MenuItem value='IN'>INDIA</MenuItem>
                <MenuItem value='US'>USA</MenuItem>
            </TextField>
        </Box>
    </div>
  )
}

