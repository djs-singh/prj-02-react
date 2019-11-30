import React , { useState, useEffect } from 'react';
import {Row, Card} from 'react-bootstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import $ from 'jquery';

function SF(props){
    // console.log(props.match.params.id);
    const [visible, setVisible] = useState(false);
    const [item ,setItem] = useState([]);
    useEffect(()=>{
        fetchItems();
    },[]);
    
    let p = props.match.params.id;
    

    var fetchItems = async ()=>{
        $('#loading-spinner').removeClass('hide');
        var data = await fetch('http://192.168.1.13:4000/poems/getPoem', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({'poem_id':''+p})
        })
        .then(res => {
            return res.json();
        })
        .catch(err => console.log(err.message)); 
        $('#loading-spinner').addClass('hide');
        setItem(data[0]);
        setVisible(true)
    }

    return(
        <TransitionGroup>
            <CSSTransition
                in = {visible}
                classNames = "custom"
                timeout ={4000}
                appear
                >
                <Row>
                    <Card className = "show-card-style">
                        <Card.Header style={{'textAlign':'center'}}>{item.poem_title}</Card.Header>
                        <Card.Body>
                            <Card.Text style={{'whiteSpace':'pre-line'}}>
                                {item.poem_data}
                            </Card.Text>
                        </Card.Body>   
                    </Card>
                </Row>
            </CSSTransition>
        </TransitionGroup>
    )
}


export default SF;