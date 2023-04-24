import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
import useLocalStorage from 'react-use-localstorage';
import Postagem from '../../../models/Postagem';
import { getAll } from '../../../service/Service';
import './ListaPostagem.css';

function ListaPostagem() {

  const [postagens, setPostagens] = useState<Postagem[]>([])

  const [token, setToken] = useLocalStorage("token");

  const history = useNavigate();

  useEffect(() => {
    if(token === '') {
      history('/login')
    }
  }, [])

  async function getAllPostagens() {
      await getAll('/postagens', setPostagens, {
        headers: {
          Authorization: token
        }
      })
  }

  useEffect(() => {
    getAllPostagens()
  }, [postagens.length])

  return (
    <>
    {postagens.map(postagem => (
      <Box m={2} >
      <Card variant="outlined">
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Postagens
          </Typography>
          <Typography variant="h5" component="h2">
            {postagem.titulo}
          </Typography>
          <Typography variant="body2" component="p">
            {postagem.texto}
          </Typography>
          <Typography variant="body2" component="p">
            {postagem.tema?.id}
          </Typography>
        </CardContent>
        <CardActions>
          <Box display="flex" justifyContent="center" mb={1.5}>

            <Link to={`/formularioPostagem/${postagem.id}`} className="text-decorator-none" >
              <Box mx={1}>
                <Button variant="contained" className="marginLeft" size='small' color="primary" >
                  atualizar
                </Button>
              </Box>
            </Link>
            <Link to={`/deletarPostagem/${postagem.id}`} className="text-decorator-none">
              <Box mx={1}>
                <Button variant="contained" size='small' color="secondary">
                  deletar
                </Button>
              </Box>
            </Link>
          </Box>
        </CardActions>
      </Card>
    </Box>
    ))}  
  </>
  )
}

export default ListaPostagem;