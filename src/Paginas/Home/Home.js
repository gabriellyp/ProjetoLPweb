import './home.css'
import React from "react"
import {Barranav} from '../../Componentes/Barranav/barranav'
import { Carrousel } from '../../Componentes/Carrousel/carrousel'
import pedraequi from '../../Assets/imagens/pedraequi.png'
import Colarcoracao from '../../Assets/imagens/Colarcoracao.jpg'
import escapulario from '../../Assets/imagens/Escapulario.jpg'
import colarestrela from '../../Assets/imagens/Colarestrelas.jpg'

class Produto{
    constructor(nome, preco, foto, descricao){
        this.nome = nome;
        this.preco = preco;
        this.foto = foto;
        this.descricao = descricao;
    }
}

var p1 = new Produto('Colar Escapulário', 90, escapulario);
var p2 = new Produto('Colar Pedra Equidade', 120, pedraequi);
var p3 = new Produto('Colar Dois amores', 90, Colarcoracao);
var p4 = new Produto('Colar Estrelas', 85, colarestrela );
var p5 = new Produto('Colar Escapulário', 90, escapulario);
var p6 = new Produto('Colar Pedra Equidade', 120, pedraequi);
var p7 = new Produto('Colar Dois amores', 90, Colarcoracao);
var p8 = new Produto('Colar Estrelas', 85, colarestrela );

var produtos = [p1,p2,p3,p4,p5,p6,p7,p8];

export function Home(){
    return(
        <div>
            <Barranav/>
            <div className='carrosel'>
               <Carrousel produtos={produtos}/>
            </div>
        </div>
    )
}

export default Home