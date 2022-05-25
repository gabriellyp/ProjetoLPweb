import '../RealizarCompra/realizarcompra.css'
import Barracompras from '../../Componentes/Barranav/barracompras'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
  } from '@chakra-ui/react'
  import { Carousel } from 'antd';
  import Colarcoracao from '../../Assets/imagens/Colarcoracao.jpg'
  import { Card } from 'antd';

  const contentStyle = {
    height: '400px',
    color: '#fff',
    width: '400px',
    background: '#F0F0F0',
  };
  const onChange = (currentSlide) => {
    console.log(currentSlide);}


export function RealizarCompra(){
    return(
        <div className='container-compra'>

            <div className='container-barra-superior-navegacao'>
            <Barracompras/>
                <div className='breadcrumb'>
                    <Breadcrumb>
                    <BreadcrumbItem>
                    <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                    <BreadcrumbLink href='#'>Colares</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'>Informações do Produto</BreadcrumbLink>
                    </BreadcrumbItem>
                    </Breadcrumb>
                </div>
            </div>
            <div className='grupo-informacoes-compra'>
                <div className='container-info-produtos'>
                    <div className='info-produtos'>
                        <Carousel afterChange={onChange} autoplay>
                            <div>
                                <h3 style={contentStyle}><img className="imagem-produtos-info" src={Colarcoracao}/></h3>
                            </div>
                            <div>
                                <h3 style={contentStyle}><img src={Colarcoracao}/></h3>
                            </div>
                        </Carousel>
                    </div>
                    <div className='card-info'>
                        <div className="site-card-border-less-wrapper">
                            <Card
                            title="Colar dois amores"
                            bordered={false}
                            >
                            <p className='preco-card'>R$ 90</p>   
                            <p>DESCRIÇÃO DO PRODUTO</p>
                            <p>Nome: Colar dois amores</p>
                            <p>Material: Prata 925</p>
                            <p className='texto-anterior-botao'>Tamanho: 30 cm de comprimento</p>
                            <button className='botao-comprar-produtos'>Comprar Agora</button>
                            </Card>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    )
}
export default RealizarCompra