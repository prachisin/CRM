import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box, Grid } from '@mui/material';
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  


// Frontend
const handleRegister = async (e) => {
  e.preventDefault();
  try {
    // Registration logic
    await axios.post('http://localhost:3000/register', { name, email, contact, password });
    console.log('User registered successfully.');
    navigate('/Login');
  } catch (error) {
    console.error('Error during registration:', error.message);
    // Handle the error on the frontend, e.g., display an error message to the user
  }
};

  return (
    <Container maxWidth="sm" style={{height:'400px',border:'0px solid black',marginTop:'50px',boxShadow:'10px 10px 5px lightblue'}} >
      <Typography style={{marginTop:'100px'}} variant="h4" align="center" gutterBottom>
        Registration
      </Typography>
      <form style={{marginTop:'50px'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Contact"
              variant="outlined"
              fullWidth
              required
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </Grid>
         
       
        </Grid>
       
        <Box mt={2}>
          <Button type="submit" variant="contained" color="primary" onClick={handleRegister} fullWidth>
            Register
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default Register;
