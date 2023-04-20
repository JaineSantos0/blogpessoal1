import React from 'react'
import Grid from '@material-ui/core/Grid/Grid'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import Button from '@mui/material/Button';
import './Home.css';

function Home() {
    return(
        <>
            <Grid className='home'container direction="row" justifyContent="center" alignItems="center" style={{height:'100vh', width:'100%'}}>
                <Box justifyContent={'center'}>
                    <Box textAlign={'center'}>
                        <Typography variant="h3" gutterBottom color="textPrimary" justifyContent={'center'} component="h3" style={{ color: "#C45321", fontWeight: "bold" }}>Seja bem vindo(a) OTAKU!</Typography>
                    </Box>
                    <Box>
                        <Typography variant="h5" gutterBottom color="textPrimary" alignItems={'center'} component="h5" style={{color:"blue", fontWeight: "bold" }}>Espaço para você otaku  compartilhar seus animes mas sem spoiler!</Typography>
                    </Box>
                    <Box textAlign={'center'}>
                        <Button variant='outlined' className='button'>ver postagens</Button>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={12} className='postagens'>
                <div>
                  <TabPostagem />
                </div>
            </Grid>
        </>
    )
}

export default Home