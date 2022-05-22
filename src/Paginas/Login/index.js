import React from "react"
import "./login.css"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as yup from 'yup'
import imagemlateral from '../../Assets/imagens/Imagemlogin.png'

export function Login(){

    function handleClickLogin(e){
        //e.preventDefault()
        console.log('Login realizado!')
    }

    const validacaologin = yup.object().shape({
        login: yup.string().required("Esse campo é obrigatório"),
        senha: yup.string().min(8, "A senha deve ter no minímo 8 caracteres").required("Esse campo é obrigatório"),
    });

    return(
    <div className="container">
        <div className="informacoes">
            <div className="imagem-lateral">
                <img className="imagem" src={imagemlateral} alt="logo lua de prata"/>
            </div>
            <Formik initialValues={{}} onSubmit={handleClickLogin} validationSchema={validacaologin} >
                <Form className="formulario-login">
                    <div className="container-form-login">
                         <div className="titulo">
                            <h1>Login</h1>
                            <p>Realize seu login para ter acesso ao sistema.</p>
                        </div>
                        <div className="form-grupo">
                            <Field name="login" placeholder="Insira seu Login"></Field>
                            <ErrorMessage component="span" name="login" className="form-erro"></ErrorMessage>
                        </div>
                        <div className="form-grupo">
                            <Field  type="password" name="senha"  placeholder="Insira sua Senha"></Field>
                            <ErrorMessage component="span" name="senha" className="form-erro"></ErrorMessage>
                        </div>
                        <div className="btn-logar">
                            <button type="submit">Entrar</button>
                        </div>    
                        <div className="titulo-esquecer">
                            <p>Esqueceu a senha? <a href="#">Recuperar.</a></p>
                        </div>  
                        <div className="titulo-cadastro">
                            <p>Não possui cadastro? <a href="#">Cadastre-se.</a></p>
                        </div>            
                    </div>
                </Form>
            </Formik>
        </div>
    </div>
    
    )
}