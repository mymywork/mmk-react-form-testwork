import React from "react";
import {Button, Card, Col, Form, FormControl, InputGroup, Row} from "react-bootstrap";

const InnerBlock = ({id, name, arrow, onClick, selected}) => (
    <React.Fragment>
        <Card id={id} style={{width: '16rem'}} onClick={onClick} bg={selected==id ? 'primary' : ''} text={selected == id ? 'white' : ''}>
            <Card.Body>
                <Card.Text>{name}</Card.Text>
            </Card.Body>
        </Card>
        <div style={{ width: '16rem', textAlign:"center" }}><i className={"bi "+arrow}></i></div>
    </React.Fragment>
)
export default InnerBlock