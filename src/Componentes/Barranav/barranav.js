import './barranav.css'
import logo from '../../Assets/imagens/Logo.png'
import { HomeOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons';
import { Input, Space} from 'antd';

const { Search } = Input;
const onSearch = (value) => console.log(value);

export function Barranav(){
    return(
        <div>
            <div className="main-header">
            <div className='input-busca'>
            <Space direction="vertical">
            <Search placeholder="input search text" 
            onSearch={onSearch} 
            enterButton="Buscar"
            />
            </Space>
            </div>
            <div className="header-image">
                <img className="img-logo" src={logo}/>            
            </div>            
            <div className="button-header">
                <div className='icones-barranav'><HomeOutlined style={{fontSize: '28px'}}/> </div>
                <div className='icones-barranav'><ShoppingOutlined style={{fontSize: '28px'}}/></div>
                <div className='icones-barranav'><UserOutlined style={{fontSize: '28px'}}/></div>      
            </div>
        </div>
        <div className='barra-nav-template'>
        <nav className="barra-nav">
                <a className="link-header">Anéis</a>
                <a className="link-header">Brincos</a>
                <a className="link-header">Colares</a>
                <a className="link-header">Pulseiras</a>
            </nav>
        </div>
        </div>
        
    )
}

