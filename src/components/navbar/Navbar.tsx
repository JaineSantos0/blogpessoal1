import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css'

function Navbar() {
    return(
        <>
            <AppBar position="static">
                <Box sx={{ flexGrow: 1 }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Blog Pessoal
                    </Typography>
                    <Box display= "flex">
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
                    </Box>
                    <Button color="inherit">Login</Button>
                </Toolbar>
                </Box>
            </AppBar>
        </>
    )
}

export default Navbar