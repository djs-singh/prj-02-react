import React, {useState} from 'react';
import N from './Nav';
import CountCards from './Cards'
import {Route , Switch} from 'react-router-dom'
import MP from './MainPage'

function St(){

    return (
        <div>
            <N/> 
            <Switch>
                <Route path= "/" exact component = {MP}></Route>
                <Route path= "/home" component = {MP}></Route>
                <Route path= "/poems" exact component = {CountCards}></Route>
                {/* <Route path= "/poems" component= {MP} </Route> */}
            </Switch>
        </div>
    )
}

export default St;