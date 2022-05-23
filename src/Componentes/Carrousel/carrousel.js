import './carrousel.css'
import {Produto} from '../Produtos/Produto'

export function Carrousel(props){
    var produtos =[];

    for(let x=0; x<props.produtos.length;x++){
        produtos.push(<Produto produto={props.produtos[x]}/>);
    }


    return(
        <div className='catalogo'>
                {produtos}
        </div>
    )
}