import { Stack, Autocomplete,TextField ,Box, Divider, LinearProgress} from '@mui/material'
import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
export const Followup = () => {
  return (
    <Stack>
        <Stack direction='column'>
        <Stack direction='row' spacing={5.7}>
        <TextField label='2nd July 2024' size='small'  sx={{color:'primary.main',width:'130px','& .MuiOutlinedInput-notchedOutline': { // Applies to the border
borderColor: '#008BE2', 
            }}}/>
           <Stack spacing={12} direction='row'>
           <Autocomplete size='small' color='primary' sx={{width:'200px' ,'& .MuiOutlinedInput-notchedOutline': { // Applies to the border
borderColor: '#008BE2', }}}
        renderInput={(params)=><TextField {...params} label='select counsellor'></TextField>}></Autocomplete>
        <Stack>
        <Box>Today</Box>
        <Stack direction='column' spacing={2} sx={{ width: '18%'}}>
           <Stack>
            <Box textAlign='left'>Head counsellor name</Box>
            <LinearProgress variant='determinate' value={50} sx={{height:'10.2px',borderRadius:10}}/>
           </Stack>
</Stack>
        </Stack>
           </Stack>
           

        </Stack>
        <Stack direction='row' spacing={0.1}>
        <Stack direction='column' divider={<Divider orientation="horizontal" flexItem width='150px'/>}>
        <Stack>
        <Box textAlign='left' color='#7E92A2'>Total overdue</Box>
        <Box textAlign='left'>5</Box>
        </Stack>
        <Stack>
        <Box textAlign='left' color='#7E92A2'>Completed/Total</Box>
        <Box textAlign='left'>4/40</Box>
        </Stack>
        <Stack>
        <Box textAlign='left' color='#7E92A2'>1st Follow up</Box>
        <Box textAlign='left'>5/10</Box>
        </Stack>
        <Stack>
        <Box textAlign='left' color='#7E92A2'>2nd Follow up</Box>
        <Box textAlign='left'>3/8</Box>
        </Stack>
        <Stack>
        <Box textAlign='left' color='#7E92A2'>3rd Follow up</Box>
        <Box textAlign='left'>5/15</Box>
        </Stack>
        </Stack>
        <Stack >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar showDaysOutsideCurrentMonth fixedWeekNumber={5}
      sx={{width:'400px', height:'300px'}}/>
    </LocalizationProvider>
    
        </Stack>
        </Stack>
        </Stack>
    
    </Stack>
  )
}
