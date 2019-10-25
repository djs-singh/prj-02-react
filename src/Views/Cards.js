import React, { useState } from 'react';
import {Card, CardColumns, Alert, OverlayTrigger} from 'react-bootstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import {Redirect} from 'react-router-dom';


function C(props){
    // console.log(props.number)
    let i = parseInt(props.number) % 6;
    let stArray = ['card-styles1','card-styles6','card-styles5','card-styles4','card-styles2','card-styles3']
    var st = stArray[i] + " card-common-style";
    var link = "/poems/"+props.poem.id;
    
    const [visible , setVisible] = useState(props.Fp);
    const [clicked ,setClicked] = useState(false);
    
    setTimeout(()=>{setVisible(true)},50*props.number);
    
    function onCard(){
        // console.log(link);
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
                    <Card.Header style={{'textAlign':'center'}}>{props.poem.title}</Card.Header>
                    <Card.Body>
                        <Card.Text> 
                            {props.poem.preview}
                        </Card.Text>
                    </Card.Body>   
                </Card>    
            </OverlayTrigger>
        </CSSTransition>
    )
}


function CountCards(){
    var poems = [];
    let n = 10;
    // for(let i=0;i<n;i++){poems.push("Poem"+(i+1))}
    let x = Math.floor(Math.random() * 10);
    for(let i=0; i<n; i++){
        let a = { id: i+1, title: ("Poem "+(i+1)), preview: "RRRR "+i+" AAAAA"};
        poems.push(a);
    }

    fetch('http://localhost:4000/get', {
            method: 'GET',
            mode: 'no-cors',
            headers: {
                "access-control-allow-origin":"*"
            },
        }
    )
    .then(res => { 
        return res.json();
    })
    .then((res)=>{console.log(JSON.stringify(res));})
    .catch(err => console.log(err.message));

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