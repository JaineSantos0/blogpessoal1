import React from 'react'
import Grid from '@material-ui/core/Grid/Grid'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import './Home.css';

function Home() {
    return(
        <>
            <Grid className='home'container direction="row" justifyContent="center" alignItems="center" style={{height:'100vh', width:'100vw'}}>
                <Box>
                    <Typography variant="h3" gutterBottom color="textPrimary" alignItems={'center'} component="h3" style={{ color: "#C45321", fontWeight: "bold" }}>Seja bem vindo(a) OTAKU!</Typography>
                </Box>
            </Grid>
        </>
    )
}

export default Home