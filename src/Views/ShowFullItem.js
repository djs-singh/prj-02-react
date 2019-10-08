import React from 'react';
import {Row, Card} from 'react-bootstrap'
import {CSSTransition} from 'react-transition-group'

function SF(props){
    console.log(props.match.params.id);
    let p = props.match.params.id;
    //fetch here.

    return(

        <Row>
            <Card className = "show-card-style">
                <Card.Header style={{'textAlign':'center'}}>{p}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>   
            </Card>
        </Row>
    )
}


export default SF;