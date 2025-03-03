import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {useState,useEffect} from 'react';
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { db } from "../../firebase-config";
import { DateRangePicker} from 'rsuite';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Modal from '@mui/material/Modal';
import Addproduct from './Addproduct';
import Editproduct from './Editproduct';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export default function Productlist() {
  const [page, setPage] =useState(0);
  const [rowsPerPage, setRowsPerPage] =useState(5);
  const [rows, setRows] =useState([]);
  const [formid,setFormid] =useState('');
  const empCollectionRef = collection(db, "products");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [editopen, setEditopen] = useState(false);
  const handleEditopen = () => setEditopen(true);
  const handleEditclose = () => setEditopen(false);
  const filterData = (v) => {
    console.log(v);
    if (v) {
      setRows([]);
      setRows([v]);
    } else {
      setRows([]);
      getUsers();
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  const deleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        deleteApi(id);
      }
    });
  };
  const deleteApi = async (id) => {
    const userDoc = doc(db, "products", id);
    await deleteDoc(userDoc);
    Swal.fire("Deleted!", "Your file has been deleted.", "success");
    getUsers();
  };
  const getUsers = async () => {
    const data = await getDocs(empCollectionRef);
    setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const editUser=(id,name,category,price)=>{
    const data={
      id:id,
      name:name,
      category:category,
      price:price,
        };
setFormid(data);
handleEditopen();
  }
  return (
    <>
    <div>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Addproduct closeEvent={handleClose}/>
  </Box>
</Modal>
</div>
<div>
<Modal
  open={editopen}
  onClose={handleEditclose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Editproduct closeEvent={handleEditclose} fid={formid}/>
  </Box>
</Modal>
</div>
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
         <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ padding: "20px" }}
          >
            Products List
          </Typography>
          <Divider />
          <Box height={10} />
          <Stack direction="row" spacing={17} className="my-2 mb-2">
            <Autocomplete
              options={rows}
              sx={{ width: 300 }}
              onChange={(e,v) => filterData(v)}
              getOptionLabel={(rows) => rows.name}
              renderInput={(params) => (
                <TextField {...params} size="small" label="Search Products" />
              )}
            />
            
            <Button onClick={handleOpen} variant="contained" endIcon={<AddCircleIcon />}>
              Add
            </Button>
          </Stack>
          <Box height={10} />
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
                <TableCell align='left' style={{ minWidth: '100px' }}>
                  <h3>Name</h3> 
                </TableCell>
                <TableCell align='left' style={{ minWidth: '100px' }}>
                  <h3>Price</h3> 
                </TableCell>
                <TableCell align='left' style={{ minWidth: '100px' }}>
                  <h3>Category</h3> 
                </TableCell>
                <TableCell align='left' style={{ minWidth: '100px' }}>
                  <h3>Date</h3> 
                </TableCell>
                <TableCell align='left' style={{ minWidth: '100px' }}>
                  <h3>Action</h3> 
                </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1}>
                        <TableCell key={row.id} align='left'>
                          {row.name}
                        </TableCell>
                        <TableCell key={row.id} align='left'>
                          {row.price}
                        </TableCell>
                        <TableCell key={row.id} align='left'>
                          {row.category}
                        </TableCell>
                        <TableCell key={row.id} align='left'>
                          {row.date}
                        </TableCell>
                        <TableCell align="left">
                          <Stack spacing={2} direction="row">
                            <EditIcon
                              style={{
                                fontSize: "20px",
                                color: "blue",
                                cursor: "pointer",
                              }}
                              className="cursor-pointer"
                               onClick={() => editUser(row.id,row.name,row.category,row.price)}
                            />
                            <DeleteIcon
                              style={{
                                fontSize: "20px",
                                color: "darkred",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                deleteUser(row.id);
                              }}
                            />
                          </Stack>
                        </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper></>
  );
}
