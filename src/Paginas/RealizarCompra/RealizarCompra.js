import '../RealizarCompra/realizarcompra.css'
import Barracompras from '../../Componentes/Barranav/barracompras'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'

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
                <BreadcrumbLink href='#'>Docs</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href='#'>Breadcrumb</BreadcrumbLink>
                </BreadcrumbItem>
                </Breadcrumb>
            </div>
        </div>
    )
}
export default RealizarCompra