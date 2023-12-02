import React from 'react'
import Leavecont from '../Pages/Leavecont'
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import Grid from '@mui/material/Grid';
function Leave() {
    return (
        <div>
            <Grid container>
                <Grid item lg={12}><Navbar /></Grid>
                <Grid item lg={3}><Sidebar /></Grid>
                <Grid item lg={9}> <Leavecont /></Grid>
            </Grid>
        </div>
    )
}

export default Leave