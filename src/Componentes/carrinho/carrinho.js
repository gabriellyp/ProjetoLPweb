import {createContext, useState } from "react";

export const CartContext = createContext();

//esse é o contexto do carrinho, suas funções de adicionar e remover itens

export function Carrinho({children}){
    const [produtoscarrinho, setprodutoscarrinho] = useState([]);

    function adicionarproduto(id){
        const copiaprodutoscarrinho = [...produtoscarrinho];

        const item = copiaprodutoscarrinho.find((produtos)=>produtos.id == id );
        console.log(item);

        if (!item) {
            copiaprodutoscarrinho.push({});
          } else {
            item.qtd = item.qtd + 1;
          }
      
          setprodutoscarrinho(copiaprodutoscarrinho);
    }

    function removerproduto(id){
        const copiaprodutoscarrinho = [...produtoscarrinho];

        const item = copiaprodutoscarrinho.find((produtos) => produtos.id === id);
    
        if (item && item.qtd > 1) {
          item.qtd = item.qtd - 1;
          setprodutoscarrinho(copiaprodutoscarrinho);
        } else {
          const arrayFiltered = copiaprodutoscarrinho.filter(
            (product) => product.id !== id
          );
          setprodutoscarrinho(arrayFiltered);
        }
    }

    function limparcarrinho() {
        setprodutoscarrinho([]);
      }

    return(
        <CartContext.Provider value={{produtoscarrinho, adicionarproduto, removerproduto, limparcarrinho}}>
            {children}
        </CartContext.Provider>
    )
}

export default Carrinho;