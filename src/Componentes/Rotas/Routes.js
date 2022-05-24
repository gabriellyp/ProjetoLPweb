import Home from '../../Paginas/Home/Home'
import {Cadastro} from '../../Paginas/Cadastro/index'
import {Login} from '../../Paginas/Login/index'
import {LandingPage} from '../../Paginas/LandingPage/landign'
import {history} from '../../history'
import React from 'react'
import { Router, Switch, Route} from 'react-router-dom'
import { RealizarCompra } from '../../Paginas/RealizarCompra/RealizarCompra'

export function Rotas(){
    return(
    <Router history={history}> 
        <Switch> 
            <Route component={Login} exact path="/Login"/>
            <Route component={Cadastro} exact path="/Cadastro"/>
            <Route component={Home} exact path="/Home"/>
            <Route component={LandingPage} exact path='/'/>
            <Route component={RealizarCompra} exact path='/Comprar'/>
        </Switch>
    </Router>   
    )

}

export default Rotas
