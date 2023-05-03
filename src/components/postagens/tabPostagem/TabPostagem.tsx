import React, { useState } from "react";
import { Box, AppBar, Tab, Tabs, Typography, makeStyles } from '@mui/material';
import { TabContext, TabPanel } from "@material-ui/lab";
import ListaPostagem from "../listaPostagem/ListaPostagem";
import "./TabPostagem.css";

function TabPostagem() {
  
  const [value, setValue] = useState("1");

  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
  }

  return (
    <>
      <TabContext value={value}>
        <AppBar position="static">
          <Tabs centered indicatorColor="secondary" onChange={handleChange}>
            <Tab label="Todas as postagens" value="1" />
            <Tab label="Sobre-nós" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1">
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography
            variant="h5"
            gutterBottom
            component="h5"
            align="center"
            className="titulo"
          >
            Sobre-nós
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            color="textPrimary"
            align="center"
            className="subtitulo"
          >
            Somos um Blog de animes e mangás onde você otaku tem um espaço para
            compartilhar seus pensamentos, notícias e ideias com todos!
          </Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}

export default TabPostagem;
