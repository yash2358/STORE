import { Stack, Autocomplete,TextField ,Box, Divider, LinearProgress} from '@mui/material'
import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
export const Follow = () => {
  return (
    <Stack>
        <Stack direction='row' spacing={3}>
        <Stack direction='column' spacing={2}>
        <TextField size='small' label='2nd July 2024' size='small'  sx={{color:'primary.main',width:'130px','& .MuiOutlinedInput-notchedOutline': { // Applies to the border
borderColor: '#008BE2', 
            }}}/>
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
        </Stack>
        <Stack direction='row' spacing={2} divider={<Divider orientation="vertical"/>}>
        <Stack direction='column'>
            <Stack direction='row' spacing={16}>
            <Autocomplete size='small' color='primary' sx={{width:'200px' ,'& .MuiOutlinedInput-notchedOutline': { // Applies to the border
borderColor: '#008BE2', }}}
        renderInput={(params)=><TextField {...params} label='select counsellor'></TextField>}></Autocomplete>
        <Box>Today</Box>
            </Stack>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar showDaysOutsideCurrentMonth fixedWeekNumber={5}
      sx={{width:'400px', height:'300px'}}/>
    </LocalizationProvider>
        </Stack>
        <Stack direction='column'>
        <Stack direction='row' spacing={15}>
        <Box textAlign='left'>Head counsellor name</Box>
        <Box>4/5</Box>
        </Stack>
        <LinearProgress variant='determinate' value={50} sx={{height:'10.2px',borderRadius:10, width:'300px'}}/>
        <Stack direction='row' spacing={15}>
        <Box textAlign='left'>Head counsellor name</Box>
        <Box>4/5</Box>
        </Stack>
            <LinearProgress variant='determinate' value={30} sx={{height:'10.2px',borderRadius:10}}/>
            <Stack direction='row' spacing={15}>
        <Box textAlign='left'>Head counsellor name</Box>
        <Box>4/5</Box>
        </Stack>
            <LinearProgress variant='determinate' value={70} sx={{height:'10.2px',borderRadius:10}}/>
            <Stack direction='row' spacing={15}>
        <Box textAlign='left'>Head counsellor name</Box>
        <Box>4/5</Box>
        </Stack>
            <LinearProgress variant='determinate' value={20} sx={{height:'10.2px',borderRadius:10}}/>
            <Stack direction='row' spacing={15}>
        <Box textAlign='left'>Head counsellor name</Box>
        <Box>3/5</Box>
        </Stack>
            <LinearProgress variant='determinate' value={40} sx={{height:'10.2px',borderRadius:10}}/>
            <Stack direction='row' spacing={15}>
        <Box textAlign='left'>Head counsellor name</Box>
        <Box>2/5</Box>
        </Stack>
            <LinearProgress variant='determinate' value={60} sx={{height:'10.2px',borderRadius:10}}/>
            <Stack direction='row' spacing={15}>
        <Box textAlign='left'>Head counsellor name</Box>
        <Box>4/9</Box>
        </Stack>
            <LinearProgress variant='determinate' value={50} sx={{height:'10.2px',borderRadius:10}}/>
            <Stack direction='row' spacing={15}>
        <Box textAlign='left'>Head counsellor name</Box>
        <Box>4/8</Box>
        </Stack>
            <LinearProgress variant='determinate' value={40} sx={{height:'10.2px',borderRadius:10}}/>
        </Stack>
        </Stack>
        </Stack>
        
    </Stack>
  )
}
