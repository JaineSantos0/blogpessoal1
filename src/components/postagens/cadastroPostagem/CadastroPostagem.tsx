import React, { ChangeEvent, useEffect, useState } from "react";
import {
    Typography,
    TextField,
    Button,
    Select,
    InputLabel,
    MenuItem,
    FormControl,
    FormHelperText,
    Container,
} from "@material-ui/core";
import "./CadastroPostagem.css";
import { useNavigate, useParams } from "react-router-dom";
import { Tema } from "../../../models/Tema";
import useLocalStorage from "react-use-localstorage";
import { Grid } from "@material-ui/core";
import Postagem from "../../../models/Postagem";
import { getAll, getById, post, put } from "../../../service/Service";
import { lightBlue } from "@material-ui/core/colors";

function CadastroPostagem() {
    const history = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [temas, setTemas] = useState<Tema[]>([]);
    const [token, setToken] = useLocalStorage("token");

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado");
            history("/login");
        }
    }, [token]);

    const [tema, setTema] = useState<Tema>({
        id: 0,
        descricao: "",
    });
    const [postagem, setPostagem] = useState<Postagem>({
        id: 0,
        titulo: "",
        texto: "",
        data: "",
        tema: null,
    });

    useEffect(() => {
        setPostagem({
            ...postagem,
            tema: tema,
        });
    }, [tema]);

    useEffect(() => {
        getTemas();
        if (id !== undefined) {
            findByIdPostagem(id);
        }
    }, [id]);

    async function getTemas() {
        await getAll("/tema", setTemas, {
            headers: {
                Authorization: token,
            },
        });
    }

    async function findByIdPostagem(id: string) {
        await getById(`postagens/${id}`, setPostagem, {
            headers: {
                Authorization: token,
            },
        });
    }

    function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {
        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            tema: tema,
        });
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        if (id !== undefined) {
            put(`/postagens`, postagem, setPostagem, {
                headers: {
                    Authorization: token,
                },
            });
            alert("Postagem atualizada com sucesso");
        } else {
            post(`/postagens`, postagem, setPostagem, {
                headers: {
                    Authorization: token,
                },
            });
            alert("Postagem cadastrada com sucesso");
        }
        back();
    }

    function back() {
        history("/postagens");
    }

    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography
                    variant="h3"
                    color="textSecondary"
                    component="h1"
                    align="center"
                >
                    Formulário de cadastro postagem
                </Typography>
                <TextField
                    value={postagem.titulo}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
                    id="titulo"
                    label="titulo"
                    variant="outlined"
                    name="titulo"
                    margin="normal"
                    fullWidth
                />
                <TextField
                    value={postagem.texto}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
                    id="texto"
                    label="texto"
                    name="texto"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />

                <FormControl>
                    <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) =>
                            getById(`/tema/${e.target.value}`, setTema, {
                                headers: {
                                    Authorization: token,
                                },
                            })
                        }
                    >
                        {temas.map((tema) => (
                            <MenuItem value={tema.id}>{tema.descricao}</MenuItem>
                        ))}
                    </Select>
                    <FormHelperText>Escolha um tema para a postagem</FormHelperText>
                    <Button type="submit" variant="contained" color="primary">
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
    );
}
export default CadastroPostagem;
