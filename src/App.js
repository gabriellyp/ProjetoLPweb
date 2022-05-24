import React from 'react'
import { Login } from "./Paginas/Login/index";
import { ChakraProvider } from '@chakra-ui/react'
import { Cadastro } from './Paginas/Cadastro';
import {LandingPage} from './Paginas/LandingPage/landign'
import {Home} from './Paginas/Home/Home'
import {Barranav} from './Componentes/Barranav/barranav'
import {Carrousel} from './Componentes/Carrousel/carrousel'
import {Rotas} from './Componentes/Rotas/Routes'



//Página responsavel por todas as paginas do site
const App = () =>(
  <ChakraProvider>
       <Rotas/>     
  </ChakraProvider>

  )


export default App;
