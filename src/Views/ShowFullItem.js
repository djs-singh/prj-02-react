import React from 'react';
import {Row, Card} from 'react-bootstrap'
import {CSSTransition} from 'react-transition-group'

function SF(props){

    return(
        <Row>
            <Card className = "card-common-style">
                <Card.Header style={{'textAlign':'center'}}>{props.title}</Card.Header>
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