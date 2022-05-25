import React from 'react'
import {Table,Thead,Tbody,Tr,Th,Td,TableContainer} from '@chakra-ui/react'
import {ModalExcluir} from '../Modais/ModalExluir'
import {ModalEditar} from '../Modais/ModalEditar'

export function TabelaAdm(){
    return (
        <div>
            <TableContainer>
    <Table variant='simple' width="900px">
        <Thead>
        <Tr>
            <Th>Código</Th>
            <Th>Nome</Th>
            <Th>Quantidade</Th>
            <Th>Informações</Th>
            <Th>Ações</Th>
        </Tr>
        </Thead>
        <Tbody>
        <Tr>
            <Td>000001</Td>
            <Td>Escapulário Fé</Td>
            <Td>1</Td>
            <Td>30 cm de comprimento</Td>
            <Td><ModalExcluir/><ModalEditar/></Td>
        </Tr>
        <Tr>
        <Td>000001</Td>
            <Td>Escapulário Fé</Td>
            <Td>1</Td>
            <Td>30 cm de comprimento</Td>
            <Td><ModalExcluir/><ModalEditar/></Td>
        </Tr>
        <Tr>
            <Td>000001</Td>
            <Td>Escapulário Fé</Td>
            <Td>1</Td>
            <Td>30 cm de comprimento</Td>
            <Td><ModalExcluir/><ModalEditar/></Td>
        </Tr>
        <Tr>
            <Td>000001</Td>
            <Td>Escapulário Fé</Td>
            <Td>1</Td>
            <Td>30 cm de comprimento</Td>
            <Td><ModalExcluir/><ModalEditar/></Td>
        </Tr>
        <Tr>
            <Td>000001</Td>
            <Td>Escapulário Fé</Td>
            <Td>1</Td>
            <Td>30 cm de comprimento</Td>
            <Td><ModalExcluir/><ModalEditar/></Td>
        </Tr>
        </Tbody>
    </Table>
    </TableContainer>
        </div>
    
        )

}

export default TabelaAdm