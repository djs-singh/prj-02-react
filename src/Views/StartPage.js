import React from 'react';
import {Route , Switch} from 'react-router-dom';
import N from './Nav';
import CountCards from './Cards';
import MP from './MainPage';
import SF from './ShowFullItem';
import AP from './AdminAdd';

function St(){

    return (
        <div>
            <N/> 
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