import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Grid from  '@mui/material/Grid';
import { Typography } from '@mui/material'

function Leads() {
    return (
        <div>
            <Navbar />
            <Grid container>
                <Grid item lg={4} xs={12}>
                    <Sidebar />
                </Grid>

                <Grid item lg={8} xs={12}>
                    <Typography paragraph>

                        Leads
                    </Typography>
                </Grid>
            </Grid>

        </div>
    )
}

export default Leads