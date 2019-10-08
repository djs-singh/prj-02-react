import React, {useState} from 'react';
import {Card, CardColumns, Alert, OverlayTrigger} from 'react-bootstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import {Link} from 'react-router-dom';


function C(props){
    // console.log(props.number)
    let i = parseInt(props.number) % 6;
    let stArray = ['card-styles1','card-styles6','card-styles5','card-styles4','card-styles2','card-styles3']
    var st = stArray[i] + " card-common-style";
    var link = "/poems/"+props.title;
    
    const [visible , setVisible] = useState(props.Fp);
    
    setTimeout(()=>{setVisible(true)},50*props.number);

    function onCard(){
        // setVisible(false);
    }
  
    return(
        <Link to={link}>
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
                        <Card.Header style={{'textAlign':'center'}}>{props.title}</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>   
                    </Card>    
                </OverlayTrigger>
            </CSSTransition>
        </Link>
    )
}


function CountCards(){
    var poems = [];
    let n = 10;
    for(let i=0;i<n;i++){poems.push("Poem"+(i+1))}
    let x = Math.floor(Math.random() * 10);
    return(
        <CardColumns className = "custom-count">
            <TransitionGroup>
                {
                    poems.map((value,index)=>{
                        return (<C title = {value} number = {index+x} Fp = {false} key = {index}/>)
                    })   
                }
            </TransitionGroup>
        </CardColumns>
    )
}


export default CountCards;