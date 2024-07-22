import { Box, FormControlLabel,Switch } from '@mui/material'
import React, { useState } from 'react'

export const Myswitch = () => {
    const[state,setState]=useState(false)
    const handleChange=(e)=>{
        setState(e.target.checked);
    }
    console.log({state})
  return (
    <Box>
        <FormControlLabel label='Dark Mode' control={<Switch size='small' color='success' onChange={handleChange}/>}></FormControlLabel>
    </Box>
  )
}
