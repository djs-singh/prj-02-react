import React, { useState, useEffect } from 'react';
import {Card, CardColumns, Alert, OverlayTrigger} from 'react-bootstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import {Redirect} from 'react-router-dom';
import $ from 'jquery';


function C(props){
    console.log(props.poem)
    let i = parseInt(props.number) % 6;
    let stArray = ['card-styles1','card-styles6','card-styles5','card-styles4','card-styles2','card-styles3']
    var st = stArray[i] + " card-common-style";
    var link = "/poems/"+props.poem.poem_id;
    
    const [visible , setVisible] = useState(props.Fp);
    const [clicked ,setClicked] = useState(false);
    
    setTimeout(()=>{setVisible(true)},50*props.number);
    
    function onCard(){
        setClicked(true);
    }
  
    return(
        clicked ? <Redirect push to = {link} /> :
        <CSSTransition
            in = {visible}
            classNames = "custom"
            timeout ={4000}
            appear
            >
            <OverlayTrigger
                show={true}
                placement="bottom"
                delay={{ show: 250, hide: 250 }}
                overlay={<Alert variant = "dark" className= "readMore">Read More...</Alert>}
                >
                <Card className = {st} onClick={onCard}>
                    <Card.Header style={{'textAlign':'center'}}>{props.poem.poem_title}</Card.Header>
                    <Card.Body>
                        <Card.Text style={{'whiteSpace':'pre-line'}}> 
                            {props.poem.poem_preview}
                        </Card.Text>
                    </Card.Body>   
                </Card>    
            </OverlayTrigger>
        </CSSTransition>
    )
}


function CountCards(){
    // var poems = [];
    let x = Math.floor(Math.random() * 10);

    useEffect(()=>{
        fetchItems();
    },[]);

    const [poems, setPoems] = useState([]);

    var fetchItems = async ()=>{
        $('#loading-spinner').removeClass('hide');
        var data = await fetch('http://192.168.1.13:4000/poems/get', {
            method: 'GET',
        })
        .then(res => {
            return res.json();
        })
        .catch(err => console.log(err.message)); 
        $('#loading-spinner').addClass('hide');
        setPoems(data);
    }
    
    return(
            <CardColumns className = "custom-count">
                <TransitionGroup>
                    {
                        poems.map((value,index)=>{
                            return (<C poem = {value} number = {index+x} Fp = {false} key = {index}/>)
                        })   
                    }
                </TransitionGroup>
            </CardColumns>
    )
}


export default CountCards;