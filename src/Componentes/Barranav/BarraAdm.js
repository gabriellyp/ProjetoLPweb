import './barranav.css'
import logo from '../../Assets/imagens/Logo.png'
import { HomeOutlined, ShoppingOutlined, UserOutlined, PlusOutlined} from '@ant-design/icons';
import { Input, Space} from 'antd';
import React from 'react'
import { ModalAddProd } from '../Modais/ModalAddProd';
import {TabelaAdm} from '../TabelaAdm/TabelaAdm'

const { Search } = Input;
const onSearch = (value) => console.log(value);

export function BarraAdm(){
    return(
        <>
        <div className="main-header-barra">
            <div className='input-busca'>
            <Space direction="vertical">
                <Search
                    placeholder="Digite aqui seu texto"
                    onSearch={onSearch}
                    style={{
                    width: 250,
            }}
            />
            </Space>
            </div>
            <div className="header-image-barra">
                <img className="img-logo" src={logo}/>            
            </div>            
            <div className="group-button-header"> 
                <div className='icones-barranav'><HomeOutlined style={{fontSize: '28px'}}/> </div>
                <div className='icones-barranav'><ShoppingOutlined style={{fontSize: '28px'}}/></div>
                <div className='icones-barranav'><UserOutlined style={{fontSize: '28px'}}/></div>      
            </div>
 
            </div>
            <div className='texto-modoadm'>
                <p>Você está no modo administrador</p>
            </div>
            <div className='div-addprod'>
            <ModalAddProd />
            </div> 
            <div className='listar-produtos-adm'>
                <TabelaAdm/>
            </div> 
        </>
        
    )
}
export default BarraAdm