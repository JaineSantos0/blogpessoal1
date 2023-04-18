import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return(
        <>
            <AppBar position='static'>
                <Box sx={{ flexGrow: 1 }} style={{backgroundColor:'#272A53'}} paddingX={5} height={'12vh'} width={'100%'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <Box display={'flex'} gap={2}>
                        <Box className='icon'></Box>
                        <Box><Typography variant="h6">Blog de Animes</Typography></Box>
                    </Box>
                    <Box display= "flex" gap={10}>
                        <Box mx={1} style={{cursor: "pointer"}}>
                            <Typography variant="h6">
                                Home
                            </Typography>
                        </Box>
                        <Box mx={1} style={{cursor: "pointer"}}>
                            <Typography variant="h6" color={"inherit"}>
                                Postagens
                            </Typography>
                        </Box>
                        <Box mx={1} style={{cursor: "pointer"}}>
                            <Typography variant="h6" color={"inherit"}>
                                Tema
                            </Typography>
                        </Box>
                        <Box mx={1} style={{cursor: "pointer"}}>
                            <Typography variant="h6" color={"inherit"}>
                                Cadastrar tema
                            </Typography>
                        </Box>
                    </Box>
                        <Link to='/login' className='text-decorator-none'>
                            <Box mx={1} className='cursor' paddingLeft={'5px'}>
                                <Typography variant="h6" color="white">
                                    logout
                                </Typography>
                            </Box>
                        </Link>
                </Box>
            </AppBar>
        </>
    )
}

export default Navbar
