import React from "react"
import {Button} from 'react'
import "./landign.css"
import logo from '../../Assets/imagens/Logo.png'
import florprincipal from '../../Assets/imagens/FlorHome.png'
import mapa from '../../Assets/imagens/mapa.png'
import pedra from '../../Assets/imagens/pedraequi.png'
import zirconia from '../../Assets/imagens/zirconia.png'
import brinco from '../../Assets/imagens/brincoflor.png'

export function LandingPage(){

    return(
    <div className="body-main">
         <div className="main-header">
            <div className="header-image">
                <img className="img-logo" src={logo}/>            
            </div>

            <nav className="barra-nav">
                <a className="link-header">Home</a>
                <a className="link-header">Catálogo</a>
                <a className="link-header">Contato</a>
                <a className="link-header">Sobre</a>
            </nav>
            <div className="button-header">
                <button className="btn-cadastro-header">Cadastro</button>
                <button className="btn-login-header">Login</button>
            </div>
        </div>
        <div className="container-landign">
        <div className="container-home">
            <div className="texto-home">
                <h2>Lua de Prata</h2>
                <h1>Vista-se de autoestima e brilhe do seu jeito.</h1>
            </div>
            <div className="image-home">
                <img src={florprincipal}/>
            </div>
        </div>
        <div className="container-catalogo">
            <div className="carrosel-catalogo">
                <div className="img-catalogo">
                    <img className="imagem-joias" src={pedra}/>
                    <p className="texto-carrosel">Ela é conhecida como a pedra do equilíbrio da aura,
                        por balancear as energias Ying Yang, acalmar as
                        emoções e ainda fortalecer nossa saúde. <a>Saiba Mais.</a></p>
                    
                </div>
                <div className="img-catalogo">
                    <img className="imagem-joias" src={zirconia}/>
                    <p className="texto-carrosel">Modelinho em elo português com o coração em zircônia
                        na cor pink e detalhamento na correntaria com
                        zircônias brancas. <a>Saiba Mais.</a></p>
                    
                </div>
                <div className="img-catalogo">
                    <img className="imagem-joias" src={brinco}/>
                    <p className="texto-carrosel">O caimento e balanço dessa peça traz toda uma harmonia
                        e exuberância na jóia, o detalhamento da flor a torna
                        ainda mais elegante. <a>Saiba Mais.</a></p>
                    
                </div>
                
            </div>
            <h3>Ir para o Catálogo</h3>
        </div>
        <div className="container-quemsomos">
            <div className="info-quemsomos">
                <h2>Quem somos?</h2>
                <p className="texto-quemsomos">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <div className="img-quemsomos">
                <img src={mapa}/>
            </div>
        </div>
        
        <div className="container-contatos">
        <h2 className="texto-contatos">Contatos</h2>
        <div className="box-contatos">
            <div class="contatos-insta">
            <img/>
            <h4>@lua_de.prata</h4>
            <button type='button' href="https://www.instagram.com/lua_de.prata/" className="btn-mechama">Me chama</button>
        </div>
        <div type="button" class="contatos-wpp">
            <img/>
            <h4>(84)99000-0009</h4>
            <button type="button" className="btn-mechama" href="https://api.whatsapp.com/send/?phone=5584996267652&text&app_absent=0">Me chama</button>
        </div>
        </div>

        </div>
        
        </div>
    </div>
    
    )
}