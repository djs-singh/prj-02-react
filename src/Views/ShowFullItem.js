import React , { useState } from 'react';
import {Row, Card} from 'react-bootstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group'

function SF(props){
    console.log(props.match.params.id);
    let p = props.match.params.id;
    const [visible, setVisible] = useState(false);

    setTimeout(()=>{setVisible(true)},50);
    //fetch here.

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
                        <Card.Header style={{'textAlign':'center'}}>{p}</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>   
                    </Card>
                </Row>
            </CSSTransition>
        </TransitionGroup>
    )
}


export default SF;