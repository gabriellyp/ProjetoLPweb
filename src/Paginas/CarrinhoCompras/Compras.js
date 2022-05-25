import {Carrinho} from '../../Componentes/carrinho/carrinho';
import { useContext } from 'react';

//produtos no carrinho de compras

export function Compras(){
    const {produtoscarrinho} = useContext(Carrinho);
    return(
        <p>{JSON.stringify(produtoscarrinho)}</p>
    )
}

export default Compras;