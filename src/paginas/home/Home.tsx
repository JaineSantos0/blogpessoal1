import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid/Grid'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import Button from '@mui/material/Button';
import './Home.css';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';

function Home() {

    const history = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    
    useEffect(() => {
      if (token == "") {
          alert("Você precisa estar logado")
          history("/login")
  
      }
     }, [token])

    return(
        <>
            <Grid className='home'container direction="row" justifyContent="center" alignItems="center" style={{minHeight:'80vh', width:'100%'}}>
                <Box justifyContent={'center'}>
                    <Box textAlign={'center'}>
                        <Typography variant="h3" gutterBottom color="textPrimary" justifyContent={'center'} component="h3" style={{ color: "#C45321", fontWeight: "bold" }}>Seja bem vindo(a) OTAKU!</Typography>
                    </Box>
                    <Box textAlign={'center'}>
                        <Link to={"/postagens"}>
                          <Button variant='outlined' className='button'>Ver Postagens</Button>
                        </Link>
                        <ModalPostagem />
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