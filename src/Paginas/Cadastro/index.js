import React from "react"
import "../Cadastro/cadastro.css"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as yup from 'yup'
import imagemlateral from '../../Assets/imagens/Imagemlogin.png'

export function Cadastro(){

    function handleClickLogin(e){
        //e.preventDefault()
        console.log('Usuario cadastrado com sucesso!')
    }

    const validacaocadastro = yup.object().shape({
        nome: yup.string().required("Esse campo é obrigatório!"),
        email: yup.string().email("Por favor digite um e-mail valido!").required("Esse campo é obrigatório!"),
        login: yup.string().required("Esse campo é obrigatório"),
        senha: yup.string().min(8, "A senha deve ter no minímo 8 caracteres").required("Esse campo é obrigatório!"),
    });

    return(
    <div className="container">
        <div className="informacoes">
            <div className="imagem-lateral">
                <img className="imagem" src={imagemlateral} alt="logo lua de prata"/>
            </div>
            <Formik initialValues={{}} onSubmit={handleClickLogin} validationSchema={validacaocadastro} >
                <Form className="formulario-cadastro">
                    <div className="container-form-cadastro">
                        <div className="titulo">
                            <h1>Cadastro</h1>
                            <p>Preencha todos os campos para realizar o seu cadastro no sistema.</p>
                        </div>
                        <div className="form-grupo">
                            <Field name="nome" placeholder="Insira seu Nome"></Field>
                            <ErrorMessage component="span" name="nome" className="form-erro"></ErrorMessage>
                        </div>
                        <div className="form-grupo">
                            <Field name="email"  placeholder="Insira seu E-mail"></Field>
                            <ErrorMessage component="span" name="email" className="form-erro"></ErrorMessage>
                        </div>
                        <div className="form-grupo">
                            <Field name="login" placeholder="Insira seu Login"></Field>
                            <ErrorMessage component="span" name="login" className="form-erro"></ErrorMessage>
                        </div>
                        <div className="form-grupo">
                            <Field type="password" name="senha"  placeholder="Insira sua Senha"></Field>
                            <ErrorMessage component="span" name="senha" className="form-erro"></ErrorMessage>
                        </div>

                        <div className="btn-logar">
                            <button type="submit">Cadastrar</button>
                        </div>     
                        <div className="titulo-cadastro">
                            <p>Já possui cadastro? <a href="#">Realizar Login.</a></p>
                        </div>            
                    </div>
                    
                </Form>
            </Formik>
        </div>
    </div>
    
    )
}