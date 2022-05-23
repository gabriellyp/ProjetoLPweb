import pedra from '../../Assets/imagens/pedraequi.png'
import './carrousel.css'

export function Carrousel(){
    return(
        <div className='carrosel'>
                <div className='item'>
                    <div className='img-card'>
                        <img src={pedra}/>
                    </div>
                    <div className='info-card'>
                        <span className='nome'>Pedra Natural Ágata</span>
                        <span className='preco'>R$ 120</span>
                        <div className='btn-comprar'>
                            <button>Comprar</button>
                        </div>                        
                    </div>

                </div>
        </div>
    )
}