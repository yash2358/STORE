import { Autocomplete, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
const skills=['html','css','js','Reactjs','SQL','c++']

export const Myautocomplete = () => {
    const[value,setValue]=useState([]);
const handleChange=(e,n)=>{
    setValue(n);
}
console.log({value})
  return (
    <Stack spacing={4} width='250px'>
        <Autocomplete options={skills} 
        renderInput={(params)=><TextField {...params} label='skills'></TextField>}
        value={value} onChange={handleChange} multiple freeSolo></Autocomplete>
    </Stack>
  )
}
