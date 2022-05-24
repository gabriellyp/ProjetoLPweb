import '../RealizarCompra/realizarcompra.css'
import Barracompras from '../../Componentes/Barranav/barracompras'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
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
                <BreadcrumbLink href='#'>Realizar Compra</BreadcrumbLink>
                </BreadcrumbItem>
                </Breadcrumb>
            </div>
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
                        style={{
                            width: 300,
                        }}
                        >
                        <p>R$ 90</p>   
                        <p>DESCRIÇÃO DO PRODUTO</p>
                        <p>Nome: Colar dois amores</p>
                        <p>Material: Prata 925</p>
                        <p>Tamanho: 30 cm de comprimento</p>
                        </Card>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default RealizarCompra