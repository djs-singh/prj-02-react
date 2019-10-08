import React from 'react';
import N from './Nav';
import CountCards from './Cards'
import {Route , Switch} from 'react-router-dom'
import MP from './MainPage'
import SF from './ShowFullItem'

function St(){

    return (
        <div>
            <N/> 
            <Switch>
                <Route path= "/" exact component = {MP}/>
                <Route path= "/home" component = {MP}/>
                <Route path= "/poems" exact component = {CountCards}/>
                <Route path= '/poems/:id' component= {SF}/>
            </Switch>
        </div>
    )
}

export default St;