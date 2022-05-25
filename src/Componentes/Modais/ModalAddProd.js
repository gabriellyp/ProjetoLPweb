import React from "react";
import {Modal,ModalOverlay, ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,useDisclosure,Button} from '@chakra-ui/react'
import './modais.css'
import { Input } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'
  import {FiPlusCircle} from "react-icons/fi";
  import { PlusOutlined } from '@ant-design/icons';
import {  Upload } from 'antd';
import { useState } from 'react';
import Imgupload from '../../Assets/imagens/Upload.png'

export function ModalAddProd(){

    const { isOpen, onOpen, onClose } = useDisclosure()

    return(
        <>
        <div className="botaoaddprod" >
          <Button color='black' colorScheme='none' leftIcon={<FiPlusCircle/>} onClick={onOpen}>Adicionar Produto</Button>
        </div>
      

      <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
        <ModalOverlay />
          <ModalContent>
          <ModalHeader>Adicionar Produto</ModalHeader>
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
    </>
    )
}

export default ModalAddProd