import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { TokenState } from '../../store/tokens/TokensReducer'
import { getById, post } from '../../service/Service';
import { Usuario } from '../../models/Usuario'
import { Avatar, Box, Button, Container, Grid } from '@mui/material'
import { Typography } from '@material-ui/core';

function Perfil() {

    const userId = useSelector<TokenState, TokenState['id']>(
        (state) => state.id
    )

    const token = useSelector<TokenState, TokenState["token"]>(
        (state) => state.token
      );

    const [usuario, setUsuario] = useState<Usuario>({
        id: +userId,
        nome: '',
        usuario: '',
        foto: '',
        senha: '',
    })

    async function getUserById(id: number) {
        await getById(`/usuarios/${id}`, setUsuario, {
        headers: {Authorization: token}
        })
    }

    useEffect(() => {
        getUserById(+userId)
    }, [])
        
        
  return (
    <>
     <Container>
        <Grid container marginTop={5}>
            <Grid xs={3} alignItems={'center'} justifyContent={'center'}>
                <Avatar src={usuario.foto} alt='' style={{width:'15rem', height:'15rem', margin:'0 auto'}} />
                <Typography variant='h5' align='center' >{usuario.nome}</Typography>
            </Grid>
            <Grid xs={6} justifyContent={'center'}>
            <Typography variant='h4' align='center' style={{paddingBottom:'4vh'}}>Postagens de {usuario.nome}</Typography>
                 <Typography variant='h6' style={{paddingBottom:'2vh'}}>Você tem um total de {usuario.postagem?.length} postagens feitas</Typography>
                 {usuario.postagem?.map((post) => (
                 <Typography  style={{color:'orange', justifyContent:'center'}}>{post.titulo}</Typography>
                ))}
                <Box marginTop={2}>
                    <Button style={{backgroundColor:'blueviolet'}} variant='contained'>atualizar cadastro</Button>
                </Box>
            </Grid>
            </Grid>
     </Container>
    </>
  )
}

export default Perfil