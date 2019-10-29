import React from 'react';
import {Route , Switch} from 'react-router-dom';
import { Image } from 'react-bootstrap';
import N from './Nav';
import CountCards from './Cards';
import MP from './MainPage';
import SF from './ShowFullItem';
import AP from './AdminAdd';
import Loading from '../LoadingIcon2.svg'

function St(){

    return (
        <div>
            <N/>
            <div id='loading-spinner' className="spinner-style hide"><Image src={Loading} fluid/></div> 
            <Switch>
                <Route path= "/" exact component = {MP}/>
                <Route path= "/home" component = {MP}/>
                <Route path= "/poems" exact component = {CountCards}/>
                <Route path= '/poems/:id' component= {SF}/>
                <Route path= '/addAdmin' exact component={AP}/>
            </Switch>
        </div>
    )
}

export default St;