import React from "react"
import './Footer.css'
import { Grid } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedinIcon from '@material-ui/icons/Linkedin'
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";

function Footer() {
    return(
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="footer" style={{backgroundColor:'#272A53'}}>
                <Grid>
                    <Box paddingTop={'10px'}>
                        <Box>
                            <Box paddingBottom={'10px'}>
                            <Typography variant='subtitle2' align= 'center' gutterBottom style={{color: 'white', fontSize: 15}}>Siga-me nas redes sociais:</Typography>
                                <Box display={'flex'} justifyContent="center" alignItems="center" paddingTop={'15px'} >
                                    <Box>
                                        <a href="https://github.com/JaineSantos0">
                                            <GitHubIcon style={{ fontSize: 50, color: "white", height: "40px"}}/>
                                        </a>
                                    </Box>
                                    <Box>
                                        <a href="https://www.linkedin.com/in/jainejosiane/">
                                            <LinkedinIcon style={{ fontSize: 50, color: "white", height: "40px"}}/>
                                        </a>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                            <Box justifyContent={'sp'}>
                            <Typography variant='subtitle2' align= 'center' gutterBottom style={{color: 'white'}}>@2023 Copyright:</Typography>
                            <Typography variant='subtitle2' align= 'center' gutterBottom style={{color: 'white'}}>Desenvolvido por Jaine Josiane</Typography>
                            </Box>
                        </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer