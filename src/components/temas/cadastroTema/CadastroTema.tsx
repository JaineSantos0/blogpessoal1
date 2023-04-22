import React, { useState, ChangeEvent, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import { Tema } from "../../../models/Tema";
import { getById, post, put } from "../../../service/Service";
import { Button, Typography, TextField, Grid} from "@mui/material";
import './CadastroTema.css'

function CadastroTema() {

  const history = useNavigate();
  const { id } = useParams<{id: string}>();
  const [token, setToken] = useLocalStorage('token');
  const [tema, setTema] = useState<Tema>({
      id: 0,
      descricao: ''
  })

  useEffect(() => {
    if (token == "") {
        alert("Você precisa estar logado")
        history("/login")

    }
}, [token])

useEffect(() =>{
    if(id !== undefined){
        findById(id)
    }
}, [id])

async function findById(id: string) {
    getById(`/tema/${id}`, setTema, {
        headers: {
          'Authorization': token
        }
      })
    }

    function updatedTema(e: ChangeEvent<HTMLInputElement>) {

        setTema({
            ...tema,
            [e.target.name]: e.target.value,
        })

    }
    
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("tema " + JSON.stringify(tema))

        if (id !== undefined) {
            console.log(tema)
            put(`/tema`, tema, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Tema atualizado com sucesso');
        } else {
            post(`/tema`, tema, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Tema cadastrado com sucesso');
        }
        back()

    }

    function back() {
        history('/temas')
    }

  return (
    <Grid
      container
      direction="row"
      justifyContent={"center"}
      alignItems={"center"}
      className="fundologin"
    >
      <Grid alignItems={"center"} xs={12}>
        <Typography component={"h2"} variant="h2">
          Cadastrar tema
        </Typography>
        <form onSubmit={onSubmit}>
          <TextField  label="Descrição do tema" name="descricao" value={tema.descricao} onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} />
          <Button type="submit" variant="contained">
            Cadastrar
          </Button>
        </form>
      </Grid>
    </Grid>
  );
}

export default CadastroTema;

