import { Button, Stack, IconButton, ButtonGroup } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
export default function Mybutton(){
    return(
    <Stack spacing={4}>
        <Stack spacing={2} direction='row'>
            <Button variant='contained'>Button</Button>
            <Button variant='outlined'>Button</Button>
            <Button variant='text'>Button</Button>
        </Stack>
        <Stack spacing={2} direction='row'>
            <Button variant='contained' color='primary'>Button</Button>
            <Button variant='contained' color='secondary'>Button</Button>
            <Button variant='contained' color='error'>Button</Button>
            <Button variant='contained' color='warning'>Button</Button>
            <Button variant='contained' color='info'>Button</Button>
            <Button variant='contained' color='success'>Button</Button>
        </Stack>
        <Stack display ='block' spacing={2} direction='row'>
            <Button variant='contained' size='small' onClick={()=>alert('Clicked')}>Button</Button>
            <Button variant='contained' size='medium'>Button</Button>
            <Button variant='contained' size='large' disableRipple>Button</Button>
        </Stack>   
        <Stack display ='block' spacing={2} direction='row'>
            <Button variant='contained' startIcon = <SendIcon/> > Button </Button>
            <Button variant='contained' endIcon = <SendIcon/>>Button</Button>
            <IconButton><SendIcon/></IconButton>
        </Stack>   
        <Stack direction='row'>
            <ButtonGroup variant='contained' orientation='vertical'>
            <Button>Button</Button>
            <Button>Button</Button>
            <Button>Button</Button>
            </ButtonGroup>
        </Stack> 
    </Stack>
    )
}