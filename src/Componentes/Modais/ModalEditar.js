import {Modal,ModalOverlay, ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,useDisclosure,Button} from '@chakra-ui/react'
import React from 'react'
import './modais.css'
import {FiEdit} from "react-icons/fi";
import { Input } from '@chakra-ui/react'
import {FormControl,FormLabel} from '@chakra-ui/react'
import Imgupload from '../../Assets/imagens/Upload.png'


export function ModalEditar(){

    const { isOpen, onOpen, onClose } = useDisclosure()

    return(
        <div>
            <Button onClick={onOpen} color='black' colorScheme='none' leftIcon={<FiEdit/>} ></Button>

            <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
        <ModalOverlay />
          <ModalContent>
          <ModalHeader>Editar Produto</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
                <img src={Imgupload}></img>
                <FormControl isRequired>
                <FormLabel htmlFor='nomeprod'>Nome do Produto</FormLabel>
                <Input id='nomeprod' placeholder='Nome do Produto' />
                </FormControl>
                <FormControl isRequired>
                <FormLabel htmlFor='Material'>Material</FormLabel>
                <Input id='Material' placeholder='Material' />
                </FormControl>
                <FormControl isRequired>
                <FormLabel htmlFor='tam'>Tamanho</FormLabel>
                <Input id='tam' placeholder='Tamanho' />
                </FormControl>
                <FormControl isRequired>
                <FormLabel htmlFor='cod'>Código</FormLabel>
                <Input id='cod' placeholder='Código' />
                </FormControl>
                <FormControl isRequired>
                <FormLabel htmlFor='preco'>Preço</FormLabel>
                <Input id='preco' placeholder='Preço' />
                </FormControl>
                <FormControl isRequired>
                <FormLabel htmlFor='qtd'>Quantidade Estoque</FormLabel>
                <Input id='qtd' placeholder='Quantidade Estoque' />
                </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </div>
        
    )
}

export default ModalEditar