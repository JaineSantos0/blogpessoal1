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
            <Grid container direction="row" justifyContent="center" alignItems="center" className="footer">
                <Grid>
                    <Box style={{height: '20vh'}} padding={'10px'}>
                        <Box>
                            <Box paddingBottom={'20px'}>
                            <Typography variant='subtitle2' align= 'center' gutterBottom style={{color: 'white'}}>Siga-me nas redes sociais:</Typography>
                                <Box display={'flex'} justifyContent="center" alignItems="center" paddingTop={'15px'} >
                                    <Box>
                                        <a href="https://github.com/JaineSantos0"></a>
                                        <GitHubIcon style={{ fontSize: 60, color: "white", height: "40px"}}/>
                                    </Box>
                                    <Box>
                                        <a href="https://www.linkedin.com/in/jainejosiane/"></a>
                                        <LinkedinIcon style={{ fontSize: 60, color: "white", height: "40px"}}/>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box>
                            <Typography variant='subtitle2' align= 'center' gutterBottom style={{color: 'white'}}>@ 2020 Copyright</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer