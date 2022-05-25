import {Barracompras} from '../../Componentes/Barranav/barracompras'
import Colarcoracao from '../../Assets/imagens/Colarcoracao.jpg'
import '../CarrinhoCompras/sacolacompras.css'
import {Table,Thead,Tbody,Tr,Th,Td,TableContainer} from '@chakra-ui/react'
import { Button, Tooltip } from 'antd';
import {PlusOutlined,MinusOutlined} from '@ant-design/icons';
import {ModalCompra} from '../../Componentes/Modais/ModalCompra'

export function SacolaCompras(){
   return (
        <div className='container-sacola'>
            <div className='barra-de-navegacao'>
                <Barracompras/>
            </div>
        <div className='container-produtos-sacola'>
            <div className='item-adicionado-sacola'>
                <div className='tabela-podutos-sacola'>
                    <TableContainer className='tabela'>
                        <Table variant='simple'>
                            <Thead>
                            <Tr>
                                <Th>Imagem</Th>
                                <Th>Descrição</Th>
                                <Th>Quantidade</Th>
                                <Th>Preço</Th>
                                <Th>Total</Th>
                            </Tr>
                            </Thead>
                            <Tbody>
                            <Tr>
                                <Td>
                                <img src={Colarcoracao} className='imagem-sacola-compras'/>
                                </Td>
                                <Td>Colar dois Corações<br/>Material: Prata 925<br/>Tamanho: 30 cm de comprimento
                                </Td>
                                <Td>
                                    <Tooltip>
                                        <Button shape="circle" id='menos' icon={<MinusOutlined/>} />
                                    </Tooltip>
                                    1
                                    <Tooltip>
                                        <Button shape="circle" id='mais' icon={<PlusOutlined />} />
                                    </Tooltip>
                                </Td>
                                <Td>R$ 90</Td>
                                <Td>R$ 90</Td>
                            </Tr>
                            </Tbody>
                        </Table>
                        </TableContainer>   
                </div>
            </div>
            <div className='botao-finalizar-compra'><ModalCompra/></div>
            
            
        </div>
        </div>
    )
}
