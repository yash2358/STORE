import { Rating, Stack } from '@mui/material'
import React, { useState } from 'react'

export const Myrating = () => {
    const[value,setValue]=useState(3);
    const handleChange=(e)=>{
        setValue(e.target.value);
    }
    console.log({value})
  return (
    <Stack spacing={4}>
        <Rating value={value} onChange={handleChange} precision={0.5} readOnly highlightSelectedOnly></Rating>
    </Stack>
  )
}
