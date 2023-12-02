import React from 'react'
import Paper from '@mui/material/Paper';
import Swal from  'sweetalert2';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Table from 'react-bootstrap/Table';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Modal from '@mui/material/Modal';
import { Grid } from '@mui/material';
import { Select, MenuItem } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

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
function Employeecont() {
 const Delete = () =>{
  Swal.fire({
    icon: 'success',
    title: 'Data Successfully Deleted',
    
});
 };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const [managerType, setManagerType] = React.useState('HR');
  const [userType, setUserType] = React.useState('Intern');

  const handleManagerTypeChange = (event) => {
    setManagerType(event.target.value);
  };

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const [filter, setFilter] = React.useState('');

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <div className="main">
        <Grid container>
          <Grid item lg={2}>
            Employee
          </Grid>

          <Grid item lg={3}>
            <Box sx={{ minWidth: 240 ,marginLeft:'200px',marginTop:'10px'}}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">---select---</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={filter}
                  label="filter"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Active</MenuItem>
                  <MenuItem value={20}>Inactive</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>

          <Grid item lg={3} sx={{ marginLeft: '240px', marginTop: '10px' }}>
            <Paper
              component="form"
              sx={{ p: '2px 4px', display: 'flex', alignItems: 'end', width: 250 }}
            >
              <IconButton type="button" sx={{ p: '10px',borderRadius:'10%' }} aria-label="search">
                <SearchIcon />
              </IconButton>
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search' }}
              />

            </Paper>
          </Grid>

        </Grid>

        <Button onClick={handleOpen} variant='contained' style={{ marginLeft: '750px', marginTop: '10px' }}>Add User</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>

            <Box sx={{ '& > :not(style)': { m: 1 } }}>
              <FormControl variant="standard">
                <InputLabel htmlFor="manager-type">Manager Type</InputLabel>
                <Select
                  value={managerType}
                  onChange={handleManagerTypeChange}
                  label="Manager Type"
                  id="manager-type"
                >
                  <MenuItem value="HR">HR</MenuItem>
                  <MenuItem value="Employee">Employee</MenuItem>
                </Select>
              </FormControl>

              <FormControl variant="standard">
                <InputLabel htmlFor="user-type">User Type</InputLabel>
                <Select
                  value={userType}
                  onChange={handleUserTypeChange}
                  label="User Type"
                  id="user-type"
                >
                  <MenuItem value="Intern">Intern</MenuItem>
                  <MenuItem value="Employee">Employee</MenuItem>
                </Select>
              </FormControl>

              <FormControl variant="standard">
                <InputLabel htmlFor="input-with-icon-adornment">First Name</InputLabel>
                <Input
                  id="first_name"
                  label="First name"
                  startAdornment={
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  }
                />
              </FormControl>

              <FormControl variant="standard">
                <InputLabel htmlFor="input-with-icon-adornment">Last Name</InputLabel>
                <Input
                  id="second_name"
                  label="Second name"
                  startAdornment={
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  }
                />
              </FormControl>

              {/* Add more form fields for Email, Password, and other fields here */}
            </Box>
          </Box>
        </Modal>


        <Table striped bordered hover style={{ marginTop: '10px' }}>
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Email</th>
              <th>DOB</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jacob</td>
              <td>jacob@mail.com</td>
              <td>23/10/2003</td>
              <td>****</td>
              <td><EditIcon style={{ color: 'white', backgroundColor: 'skyblue', fontSize: '35px', borderRadius: '5px' }} /><Button onClick={Delete}><DeleteIcon style={{ color: 'white', backgroundColor: 'red', fontSize: '35px', borderRadius: '5px', marginLeft: '5px' }} /></Button></td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>mark@mail.com</td>
              <td>12/34/1003</td>
              <td>****</td>
              <td><EditIcon  style={{ color: 'white', backgroundColor: 'skyblue', fontSize: '35px', borderRadius: '5px' }} /><Button  onClick={Delete} ><DeleteIcon style={{ color: 'white', backgroundColor: 'red', fontSize: '35px', borderRadius: '5px', marginLeft: '5px' }} /></Button></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div >
  )
}

export default Employeecont




