import {Modal,ModalOverlay, ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,useDisclosure,Button} from '@chakra-ui/react'
import React from 'react'
import './modais.css'
import {FiTrash2} from "react-icons/fi";

export function ModalExcluir(){

    const { isOpen, onOpen, onClose } = useDisclosure()

    return(
        <div>
            <Button onClick={onOpen} color='black' colorScheme='none' leftIcon={<FiTrash2/>} ></Button>
            <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Deseja Realmente Excluir esse Produto?</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                
                Código: 0001; 
                Nome: Escapulário Fé; 
                Preço: R$120.00; 
                Quantidade: 2; 
                Tamanho: 30 cm; 
                Material: Prata 925.

                </ModalBody>
    
                <ModalFooter>
                    <Button onClick={onClose}>Cancelar</Button>
                <Button className='botao-confirmar-modal' colorScheme='#93A9D1' mr={3} onClick={onClose}>
                    Confirmar
                </Button>
                
                </ModalFooter>
            </ModalContent>
            </Modal>
        </div>
        
    )
}

export default ModalExcluir