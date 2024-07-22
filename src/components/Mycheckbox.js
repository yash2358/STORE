import { Box, FormControlLabel,Checkbox, FormControl, FormLabel, FormGroup } from '@mui/material'
import React, { useState } from 'react'

export const Mycheckbox = () => {
    const[teste,setTeste]=useState(false)
    const[test,setTest]=useState([])
    const handleChange=(e)=>{
          setTeste(e.target.checked);
    }
    const handleChangee=(e)=>{
        setTest(e.target.checked);
  }
    console.log({teste})
    console.log({test})
  return (
    <Box>
        <Box>
        <FormControlLabel label='Accept terms & conditions' control={<Checkbox onChange={handleChange}/>} ></FormControlLabel>
        </Box>
        <Box>
            <FormControl>
                <FormLabel>Choose your skill</FormLabel>
                <FormGroup row>
                <FormControlLabel label='HTML' control={<Checkbox onChange={handleChangee}/>} ></FormControlLabel>
                <FormControlLabel label='CSS' control={<Checkbox onChange={handleChangee}/>} ></FormControlLabel>
                <FormControlLabel label='JS' control={<Checkbox onChange={handleChangee}/>} ></FormControlLabel>
                </FormGroup>
            </FormControl>
        </Box>
    </Box>
  )
}
