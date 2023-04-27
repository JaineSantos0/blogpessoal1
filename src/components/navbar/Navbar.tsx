import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import "./Navbar.css";
import { put } from "../../service/Service";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/TokensReducer";
import { addToken } from "../../store/tokens/Action";
import { toast } from "react-toastify";

function Navbar() {
  
  const history = useNavigate();

  const dispatch = useDispatch();

  const token = useSelector<TokenState, TokenState['token']>(
    (state) => state.token
  )

  function goLogout() {
    dispatch(addToken(''));
    toast.info('Usuário deslogado!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
    history("/login");
  }

  let navbarComponent;

  if(token !== '') {
    navbarComponent = <AppBar position="static">
    <Box
      sx={{ flexGrow: 1 }}
      style={{ backgroundColor: "#272A53" }}
      p={4}
      height={"10vh"}
      width={"100%"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box display={"flex"}>
        <Link to={'/perfil'}><Box marginY={2} className="icon"></Box></Link>
        <Box marginY={4} marginLeft={2}>
          <Typography variant="h6" color="white">Blog de Animes</Typography>
        </Box>
      </Box>
      <Box display="flex" gap={10}>
        <Link to={"/home"} className="text-decorator-none">
          <Box mx={1} style={{ cursor: "pointer" }}>
            <Typography variant="h6" color="white">Home</Typography>
          </Box>
        </Link>
        <Link to={"/postagens"} className="text-decorator-none">
          <Box mx={1} style={{ cursor: "pointer" }}>
            <Typography variant="h6" color="white">
              Postagens
            </Typography>
          </Box>
        </Link>
        <Link to={"/temas"} className="text-decorator-none">
          <Box mx={1} style={{ cursor: "pointer" }}>
            <Typography variant="h6" color="white">
              Tema
            </Typography>
          </Box>
        </Link>
        <Link to={"/formularioTema"} className="text-decorator-none">
          <Box mx={1} style={{ cursor: "pointer" }}>
            <Typography variant="h6" color="white">
              Cadastrar tema
            </Typography>
          </Box>
        </Link>
      </Box>
    
      <Box mx={1} className="text-decorator-none" onClick={goLogout} paddingLeft={"5px"}>
        <Typography variant="h6" color="white" className="logout-cursor">
        logout
        </Typography>
      </Box>
    </Box>
  </AppBar>
  }

  return (
    <>
      {navbarComponent}
    </>
  );
}

export default Navbar;
