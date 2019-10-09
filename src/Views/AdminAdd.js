import React from 'react';
import {Button, Form, Col} from 'react-bootstrap';
import $ from 'jquery';

function AP(){

    var onClickButton = (e)=>{
        e.preventDefault();
        let obj={};
        (['title','type','preview','data']).map((value,index)=>{
            obj[value] = $('#'+value).val();
        })
        console.log({"O":obj});
    }

    return (
        <div className = "big-div">
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control placeholder="Enter Here" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="type">
                        <Form.Label>Type</Form.Label>
                        <Form.Control as="select">
                            <option>Poem</option>
                            <option>Story</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="preview">
                    <Form.Label>Preview</Form.Label>
                    <Form.Control className="textarea-big-box" as="textarea" placeholder="" />
                </Form.Group>

                <Form.Group controlId="data">
                    <Form.Label>Your Creation</Form.Label>
                    <Form.Control className="textarea-big-box" as="textarea" placeholder="" />
                </Form.Group>

                <Button variant="primary" type="submit" onClick = {onClickButton}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}


export default AP;