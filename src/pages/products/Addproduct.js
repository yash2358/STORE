import { Box, Button, Grid, IconButton, InputAdornment, MenuItem, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { db } from "../../firebase-config";
import Swal from "sweetalert2";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
export default function Addproduct({closeEvent}) {
    const[name,setName]=useState('');
    const empCollectionRef = collection(db, "products");
    const[price,setPrice]=useState(0);
    const[category,setCategory]=useState('');
    const [rows, setRows] =useState([]);
    const handleName=(e)=>{
        setName(e.target.value);
    }
    const handlePrice=(e)=>{
        setPrice(e.target.value);
    }
    const handleCategory=(e)=>{
        setCategory(e.target.value);
    }
    const currentDate = new Date();
const day = String(currentDate.getDate()).padStart(2, '0');
const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
const year = currentDate.getFullYear();

    const createData=async()=>{
           await addDoc(empCollectionRef,{
            name:name,
            price:Number(price),
            category:category,
            date:`${year}-${month}-${day}`,
           });
           getUsers();
           closeEvent();
           Swal.fire("submitted!",'Added Successfully');
    }
    const getUsers = async () => {
        const data = await getDocs(empCollectionRef);
        setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
    const categories=[
        {
            value:'Mobile',
            label:'Mobile'
        },
        {
            value:'Clothes',
            label:'Clothes'
        },
        {
            value:'Laptop',
            label:'Laptop'
        },
        {
            value:'Food',
            label:'Food'
        }
    ]
  return (
    <>
    <Box sx={{m:2}}/>
        <Typography variant='h5' align='center'>
            Add Product
        </Typography>
        <IconButton style={{position:'absolute', top:'0',right:'0'}}
        onClick={closeEvent}><CloseIcon/></IconButton>
        <Box height={20}></Box>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField label='Name' variant='outlined' value={name} size='small' sx={{minWidth:'100%'}} onChange={handleName}></TextField>
            </Grid>
            <Grid item xs={6}>
                <TextField  InputProps={{
          startAdornment: (
            <InputAdornment>
              <CurrencyRupeeIcon/>
            </InputAdornment>
          ),
        }} label='Price' type='number' variant='outlined' value={price} size='small' onChange={handlePrice}
                ></TextField>
            </Grid>
            <Grid item xs={6}>
                <TextField select label='Category' variant='outlined' value={category} size='small' onChange={handleCategory} sx={{minWidth:'100%'}}>
                    {categories.map((option)=>(
                        <MenuItem key={option.value} value={option.value}>{option.value}</MenuItem>
                    ))}
                </TextField>
            </Grid>
        </Grid>
        <Typography align='center' marginTop={2}>
        <Button variant='contained' onClick={createData}>Submit</Button>
        </Typography>
    </>
  )
}
