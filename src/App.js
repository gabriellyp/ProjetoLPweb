import React from 'react'
import { Login } from "./Paginas/Login/index";
import { ChakraProvider } from '@chakra-ui/react'
import { Cadastro } from './Paginas/Cadastro';
import {LandingPage} from './Paginas/LandingPage/index'

//Página responsavel por todas as paginas do site
function App() {
  return (
    <ChakraProvider>
       <LandingPage/>    
    </ChakraProvider>

  );
}

export default App;
