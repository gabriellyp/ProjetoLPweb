import './home.css'
import React from "react"
import {Barranav} from '../../Componentes/Barranav/barranav'
import pedra from '../../Assets/imagens/pedraequi.png'

export function Home(){
    return(
        <div>
            <Barranav/>
            <div className='area-texto-joias'>
                <p className='texto-joias'>Conheça aqui nossa coleção</p>
            </div>
            <div className='carrosel'>
                <div className='item'>
                    <div className='img-card'>
                        <img src={pedra}/>
                    </div>
                    <div className='info-card'>
                        <span className='nome'>Colar 1</span>
                        <span className='Preco'>R$ 120</span>
                    </div>
                    <div className='btn-comprar'>
                        <button>Comprar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}