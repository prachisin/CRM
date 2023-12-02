import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box, Grid } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const Register = () => {
    const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    navigate('/Login');
  };


 
  return (
    <Container maxWidth="sm" style={{height:'250px',border:'0px solid black',marginTop:'50px',boxShadow:'10px 10px 5px lightblue'}} >
      <Typography style={{marginTop:'100px'}} variant="h4" align="center" gutterBottom>
        Forgot Password
      </Typography>
      <form onSubmit={handleSubmit} style={{marginTop:'50px'}}>
        <Grid container spacing={2}>
         
          <Grid item xs={12} sm={12} lg={12}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
         
        
        </Grid>
       
        <Box mt={2}>
          <Link to='/Getotp'>
          <Button type="submit"  variant="contained" color="primary" fullWidth>
            Get OTP
          </Button></Link><br/>
         <Link style={{textDecoration:'none',fontWeight:'bolder'}} to='/Login'> <ArrowBackIcon/>back to login</Link>
        </Box>
      </form>
    </Container>
  );
};

export default Register;
