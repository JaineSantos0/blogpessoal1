import React, { ChangeEvent, useEffect, useState } from "react";
import { Grid, Box, Typography, TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import UsuarioLogin from "../../models/UsuarioLogin";
import { login } from "../../service/Service";
import "./Login.css";
import { useDispatch } from "react-redux";
import { addId, addToken } from "../../store/tokens/Action";

function Login() {

  const history = useNavigate();

  const dispatch = useDispatch();

  const [token, setToken] = useState('');

  const [userLogin, setUserLogin] = useState<UsuarioLogin>({
    id: 0,
    nome: "",
    usuario: "",
    foto: "",
    senha: "",
    token: "",
  });

  const [respUserLogin, setRespUserLogin] = useState<UsuarioLogin>({
    id: 0,
    nome: "",
    usuario: "",
    foto: "",
    senha: "",
    token: "",
  });

  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [event.target.name]: event.target.value,
    });
  }

  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      await login("/usuarios/logar", userLogin, setRespUserLogin);
      alert("Usuario logado com sucesso");
    } catch (error) {
      console.log(error);
      alert("Usuário ou senha inválidos");
    }
  }

  useEffect(() => {
    if (token !== "") {
      dispatch(addToken(token))
      history("/home");
    }
  }, [token]);

  useEffect(() => {
    if(respUserLogin.token !== "") {
      dispatch(addToken(respUserLogin.token))
      dispatch(addId(respUserLogin.id.toString()))
      history('/home')
    }
  }, [respUserLogin.token])

  return (
    <Grid
      container
      direction="row"
      justifyContent={"center"}
      alignItems={"center"} className="fundologin"
    >
      <Grid alignItems={"center"} xs={6}>
        <Box paddingX={20}>
          <form onSubmit={onSubmit}>
            <Typography
              variant="h3"
              gutterBottom
              component="h3"
              align="center"
              style={{ fontWeight: "bold", color:'#ff5722'}}
            >
              Entrar
            </Typography>
            <TextField
              variant="outlined"
              name="usuario"
              value={userLogin.usuario}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)
              }
              label="Usuário"
              margin="normal"
              fullWidth
            ></TextField>
            <TextField
              type="password"
              name="senha"
              error = {userLogin.senha.length < 8 && userLogin.senha.length > 0}
              helperText = {userLogin.senha.length < 8 && userLogin.senha.length > 0 ? 'Senha incorreta' : ''}
              value={userLogin.senha}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)
              }
              variant="outlined"
              label="Senha"
              margin="normal"
              fullWidth
            ></TextField>
            <Box marginTop={2} textAlign={"center"}>
              <Button className="buttonlogin" type="submit" variant="contained" fullWidth>
                Logar
              </Button>
            </Box>
          </form>
          <Box display="flex" justifyContent="center" marginTop={2}>
            <Box marginRight={1}>
              <Typography marginTop={2} align="center" variant="body1">
                Ainda não tem uma conta?{" "}
                <Link to="/cadastroUsuario" style={{color:'#ef5350', font:'bold'}}>
                  Cadastre-se aqui
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid xs={6} className="imagem-login"></Grid>
    </Grid>
  );
}

export default Login;