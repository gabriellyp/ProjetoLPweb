import React from "react"
import "../Cadastro/cadastro.css"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as yup from 'yup'
import imagemlateral from '../../Assets/imagens/Imagemlogin.png'

export function EsqueceuSenha(){

    function handleClickLogin(e){
        console.log('Um email foi enviado!')
    }

    const validacaocadastro = yup.object().shape({
        email: yup.string().email("Por favor digite um e-mail valido!").required("Esse campo é obrigatório!"),
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
                        <div className="titulo-recuperarsenha">
                            <h1>Recuperar Senha</h1>
                            <p>Por favor insira seu e-mail para recuperação de senha.</p>
                        </div>
                        <div className="form-grupo">
                            <Field name="email"  placeholder="Insira seu E-mail"></Field>
                            <ErrorMessage component="span" name="email" className="form-erro"></ErrorMessage>
                        </div>
                        <div className="btn-logar">
                            <button type="submit">Recuperar</button>
                        </div>               
                    </div>
                    
                </Form>
            </Formik>
        </div>
    </div>
    
    )
}
export default EsqueceuSenha