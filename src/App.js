import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import {Rotas} from './Componentes/Rotas/Routes'



//Página responsavel por todas as paginas do site
const App = () =>(
  <ChakraProvider>
       <Rotas/>     
  </ChakraProvider>

  )


export default App;
