import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Getotp() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Optional, to center vertically in the viewport
      }}
    >
           

      <Card sx={{ maxWidth: 300, maxHeight: 300 }}>
        <CardContent>
        <img src="th.jpg" alt="noimgfound" height={60} width={60} style={{  display: 'flex',marginBottom:'10px',marginLeft:'50px',
        justifyContent: 'center',
        alignItems: 'center',}} />
          <Typography variant="h5" component="div">
            THANK YOU !!
          </Typography>

          <Typography variant="body2">
            Kindly check your Gmail.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">close</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Getotp;
