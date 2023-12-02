import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar';
import Employeecont from '../Pages/Employeecont';
import { Grid } from '@mui/material';

function Employee() {
  return (
    <div>
      <Grid container>
        <Grid item lg={12}>
        <Navbar/>
        </Grid>

        <Grid item lg={3}>
        <Sidebar/>
        </Grid>

        <Grid item lg={9}>
        <Employeecont/>
        </Grid>
      </Grid>
 
  

    </div >
  )
}

export default Employee