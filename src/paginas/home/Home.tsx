import React, { useEffect } from "react";
import { Typography, Grid, Box, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem";
import TabPostagem from "../../components/postagens/tabpostagem/TabPostagem";
import { TokenState } from "../../store/tokens/TokensReducer";
import "./Home.css";

function Home() {

  const history = useNavigate();

  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  );

  useEffect(() => {
    if (token == "") {
      toast.error("VocÊ precisa estar logado!", {
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
  }, [token]);

  return (
    <>
      <Grid
        className="home"
        container
        direction="row"
        justifyContent="center"
        style={{ minHeight: "80vh", width: "100%" }}
      >
        <Box>
          <Box textAlign={"center"}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              justifyContent={"center"}
              component="h3"
              style={{ color: "#C45321", fontWeight: "bold", marginTop: "8vh" }}
            >
              Seja bem vindo(a) OTAKU!
            </Typography>
          </Box>
          <Box textAlign={"center"}>
              <ModalPostagem />
            <Link to={"/postagens"}>
              <Button variant="outlined" className="button-home">
                Ver Postagens
              </Button>
            </Link>
          </Box>
        </Box>
      </Grid>
      <Grid xs={12} className="postagens">
        <div>
          <TabPostagem />
        </div>
      </Grid>
    </>
  );
}

export default Home;
