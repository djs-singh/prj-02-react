import React, {useState} from 'react';
import { Col , Row , Button} from 'react-bootstrap'
import I from './InitialModal'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSnowflake, faSun } from '@fortawesome/free-solid-svg-icons'

function MP(){
    
    const [flag, setFlag] = useState(false);

    return(
        <div>
            <I hide = {setFlag}/>
            {flag ? 
            <Row className = "main-page">
                <Col className = "justify-content-md-center">
                    <Link to='/poems'>
                    {/* <Button variant= "primary"> */}
                    <Button variant="light" className = "custom-sec-color" >
                        <FontAwesomeIcon icon = {faSnowflake} size = "5x"/> <br/> Poems
                    </Button>
                    </Link>
                </Col>
                <Col>
                    <Link to='/stories'>
                    {/* <Button variant= "primary"> */}
                    <Button variant="light" className = "custom-sec-color">
                        <FontAwesomeIcon icon = {faSun} size = "5x"/>  <br/> Stories
                    </Button>
                    </Link>
                </Col>
            </Row>
            : "" }
        </div>
    )
}

export default MP;