import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Grid from  '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material'
import Paper from '@mui/material/Paper';
import Content from '../Pages/Content';
function createData(name, ID, fat, carbs, protein) {
    return { name, ID, fat, carbs, protein };
  }

function Dashboard() {
   
     
    return (
        <div>
            <Navbar/>
            <Grid container>
                <Grid item lg={2.5} xs={12}>
                    <Sidebar />
                </Grid>

                <Grid item lg={9.5} xs={12}>
                 <Content/>
                </Grid>
            </Grid>

        </div>
    )
}

export default Dashboard