import { Box,Radio, FormControl, FormControlLabel, FormLabel, RadioGroup } from '@mui/material'
import React, { useState } from 'react'
export const Myradio = () => {
    const[age,setAge]=useState('')
    const handleChange=(e)=>{
        setAge(e.target.value)
    }
    console.log({age})
  return (
    <Box>
      <FormControl>
        <FormLabel>Years of experience</FormLabel>
        <RadioGroup value={age} onChange={handleChange}>
            <FormControlLabel control={<Radio/>} label='0-2' value='0-2'></FormControlLabel>
            <FormControlLabel control={<Radio/>} label='3-5' value='3-5'></FormControlLabel>
            <FormControlLabel control={<Radio/>} label='6-8' value='6-8'></FormControlLabel>
        </RadioGroup>
      </FormControl>
    </Box>
    
  )
}
