import {Modal,ModalOverlay, ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,useDisclosure,Button} from '@chakra-ui/react'
import React from 'react'
import './modais.css'

export function ModalCompra(){

    const { isOpen, onOpen, onClose } = useDisclosure()

    return(
        <div>
            <Button className="botao-finalizar"  colorScheme='#93A9D1' onClick={onOpen}>Finalizar Compra</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Compra Realizada</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                Você será redirecionado ao contato do vendedor
                </ModalBody>
    
                <ModalFooter>
                <Button className='botao-confirmar-modal' colorScheme='#93A9D1' mr={3} onClick={onClose}>
                    Confirmar
                </Button>
                </ModalFooter>
            </ModalContent>
            </Modal>
        </div>
        
    )
}