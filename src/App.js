import React from 'react'
import { Login } from "./Paginas/Login/index";
import { ChakraProvider } from '@chakra-ui/react'
import { Cadastro } from './Paginas/Cadastro';
import {LandingPage} from './Paginas/LandingPage/index'
import {Home} from './Paginas/Home/Home'
import {Barranav} from './Componentes/Barranav/barranav'
import {Carrousel} from './Componentes/Carrousel/carrousel'



//Página responsavel por todas as paginas do site
function App() {
  return (
    <ChakraProvider>
       <Home/> 
    </ChakraProvider>

  );
}

export default App;
