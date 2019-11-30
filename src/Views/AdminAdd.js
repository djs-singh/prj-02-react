import React from 'react';
import {Button, Form, Col} from 'react-bootstrap';
import $ from 'jquery';

function AP(){

    var onClickButton = async (e)=>{
        e.preventDefault();
        let obj={};
        (['title','type','preview','data']).map((value,index)=>{
            obj[value] = $('#'+value).val();
        })
        console.log({"O":obj});
        var res = await fetch('http://192.168.1.13:4000/poems/add', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(obj)
            }
        )
        .then(res => { 
            return res.json();
        })
        .catch((err)=> console.log(err));
        console.log(res);
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