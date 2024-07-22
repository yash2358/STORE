import { InputAdornment, Stack,TextField } from "@mui/material";
import { useState } from "react";

export const Mytextfield=()=>{
    const[val,setVal]=useState('')
   return(
    <Stack spacing={4}>
    <Stack spacing={2} direction='row'>
    <TextField label='Yash' variant="outlined" required
    value={val} onChange={(e)=>setVal(e.target.value)}
    error={!val} helperText={
        !val?'Req':'Do not share'
    }/>
    <TextField label='Yash' variant="filled" color="secondary"/>
    <TextField label='Read only' variant="filled" color="secondary" InputProps={{readOnly:true}}/>
    <TextField label='Yash' variant="standard" helperText="Do not share yout password with anyone" type="password"/>
    </Stack>
    <Stack spacing={2} direction='row'>
    <TextField label='Amount' variant="filled" color="secondary"
    InputProps={{
            startAdornment:<InputAdornment position='start'>$</InputAdornment>
    }}/>
    <TextField label='Weight' variant="outlined"
    InputProps={{
            endAdornment:<InputAdornment position='start'>kg</InputAdornment>
    }}/>
    </Stack>
   </Stack>
   )
}