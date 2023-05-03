import React from "react"
import { Typography, Box, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { TokenState } from "../../store/tokens/TokensReducer";
import './Footer.css'

function Footer() {

    const token = useSelector<TokenState, TokenState['token']>(
        (state) => state.token
    )

    let footerComponent;

    if(token !== '') {
        footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center" className="footer" style={{backgroundColor:'#272A53'}}>
        <Grid>
            <Box paddingTop={'10px'}>
                <Box>
                    <Box paddingBottom={'10px'}>
                    <Typography variant='subtitle2' align= 'center' gutterBottom style={{color: 'white', fontSize: 15}}>Siga-me nas redes sociais:</Typography>
                        <Box display={'flex'} justifyContent="center" alignItems="center" paddingTop={'15px'} >
                            <Box>
                                <a href="https://github.com/JaineSantos0"></a>
                                <GitHubIcon style={{ fontSize: 50, color: "white", height: "40px"}}/>
                            </Box>
                            <Box>
                                <a href="https://www.linkedin.com/in/jainejosiane/"></a>
                                <LinkedInIcon style={{ fontSize: 50, color: "white", height: "40px"}}/>
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
    }

    return(
        <>
            {footerComponent}
        </>
    )
}

export default Footer