import React, { useEffect, useState } from "react";
import { Avatar, Box, Button, Container, Grid, Typography} from "@mui/material";
import { useSelector } from "react-redux";
import { Usuario } from "../../models/Usuario";
import { getById } from "../../service/Service";
import { TokenState } from "../../store/tokens/TokensReducer";
import "./Perfil.css";

function Perfil() {
    
  const userId = useSelector<TokenState, TokenState["id"]>((state) => state.id);

  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  );

  const [usuario, setUsuario] = useState<Usuario>({
    id: +userId,
    nome: "",
    usuario: "",
    foto: "",
    senha: "",
  });

  async function getUserById(id: number) {
    await getById(`/usuarios/${id}`, setUsuario, {
      headers: { Authorization: token },
    });
  }

  useEffect(() => {
    getUserById(+userId);
  }, []);

  return (
    <> 
      <Container className="imagem-perfil">
        <Grid container className="fundo-texto-perfil">
          <Grid xs={3} alignItems={"center"} justifyContent={"center"} >
            <Avatar
              src={usuario.foto}
              alt=""
              style={{ width: "15rem", height: "15rem", margin:"5vh 0vh 0vh 5vh" }}
            />
            <Typography variant="h5" textAlign={'center'} className="font-perfil">
              {usuario.nome}
            </Typography>
          </Grid>
          <Grid xs={6} justifyContent={"center"}>
            <Typography
              variant="h4"
              align="center"
              style={{ padding: "5vh 0" }}
              className="font-perfil"
            >
              Postagens de {usuario.nome}
            </Typography>
            <Typography variant="h6" style={{ padding: "0vh 0vh 2vh 3vh" }}>
              Você tem um total de {usuario.postagem?.length} postagens feitas
            </Typography>
            {usuario.postagem?.map((post) => (
              <Typography className="font-perfil" style={{ color: "orange", justifyContent: "center", padding:'0vh 0vh 2vh 3vh' }}>
                {post.titulo}
              </Typography>
            ))}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Perfil;
