import './produtos.css'

export function Produto(props){
    return(
        <div className='carrosel'>
            <div className='item'>
                <div className='img-card'>
                    <img src={props.produto.foto}/>
                </div>
                <div className='info-card'>
                    <span className='nome'>{props.produto.nome}</span>
                    <span className='preco'>R$ {props.produto.preco}</span>
                    <div className='btn-comprar'>
                        <button>Comprar</button>
                    </div>                        
                </div>
            </div>
        </div>
    )
}