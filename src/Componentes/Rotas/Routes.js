import Home from '../../Paginas/Home/Home'
import {Cadastro} from '../../Paginas/Cadastro/index'
import {Login} from '../../Paginas/Login/index'
import {LandingPage} from '../../Paginas/LandingPage/landign'
import {history} from '../../history'
import React from 'react'
import { Router, Switch, Route} from 'react-router-dom'
import { RealizarCompra } from '../../Paginas/RealizarCompra/RealizarCompra'
import { SacolaCompras } from '../../Paginas/CarrinhoCompras/sacolacompras'
import { ListarProduto } from '../../Paginas/ListarProdutoAdm/listarprod'
import {EsqueceuSenha} from '../../Paginas/Esqueceu/Esqueceu'
 
export function Rotas(){
    return(
    <Router history={history}> 
        <Switch> 
            <Route component={Login} exact path="/Login"/>
            <Route component={Cadastro} exact path="/Cadastro"/>
            <Route component={Home} exact path="/Home"/>
            <Route component={LandingPage} exact path='/'/>
            <Route component={RealizarCompra} exact path='/Comprar'/>
            <Route component={SacolaCompras} exact path={'/Carrinho'}/>
            <Route component={ListarProduto} exact path={'/ListarProdutoAdm'}/>
            <Route component={EsqueceuSenha} exact path='/EsqueceuSenha'/>
        </Switch>
    </Router>   
    )

}

export default Rotas
