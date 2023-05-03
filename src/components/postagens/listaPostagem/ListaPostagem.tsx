import React, {useState, useEffect} from 'react'
import { Box, Card, CardActions, CardContent, Button, Typography} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Postagem from '../../../models/Postagem';
import { getAll } from '../../../service/Service';
import { TokenState } from '../../../store/tokens/TokensReducer';
import './ListaPostagem.css';

function ListaPostagem() {

  const [postagens, setPostagens] = useState<Postagem[]>([])

  const token = useSelector<TokenState, TokenState['token']>(
    (state) => state.token
  )

  const history = useNavigate();

  useEffect(() => {
    if(token === '') {
      toast.error('Você precisa estar logado!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
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
    <div className='listaPost'>
    {postagens.map(postagem => (
      <Box m={2} >
      <Card variant="outlined" style={{minHeight:'22rem', borderRadius:'3%'}}>
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
          <Typography style={{color:'blue'}} variant="body2" component="p">
            {postagem.tema?.descricao}
          </Typography>
          <Typography variant="body2" component="p">
            Data: {Intl.DateTimeFormat('pt-BR', {dateStyle: 'full', timeStyle: 'medium'}).format(new Date(postagem.data))}
          </Typography>
          <Typography variant="body2" component="p">
            Postado por: {postagem.usuario?.nome}
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
  </div>
  )
}

export default ListaPostagem;