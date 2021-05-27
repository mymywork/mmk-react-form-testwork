import React from "react";
import {Button, Card, Col, Form, FormControl, InputGroup, Row} from "react-bootstrap";

const InnerCard = ({item, id, set, blocks}) =>{
    console.log(name)

    let handleChange = (event) => {
        let fieldName = event.target.name;
        let fieldVal = event.target.value;
        console.log(fieldName,fieldVal)
        blocks[id] = {...item, [fieldName]: fieldVal}
        set({blocks: blocks})
    }
    let handleCheckbox = (event) => {
        let fieldName = event.target.name;
        console.log(fieldName)
        blocks[id][fieldName] = blocks[id][fieldName] ^ 1
        set({blocks: blocks})
    }
    let handleRadio = (event) => {
        let fieldName = event.target.name;
        let fieldVal = event.target.value;
        blocks[id]['automate'] = false
        blocks[id]['manual'] = false
        console.log(fieldName)
        blocks[id] = {...item, [fieldName]: fieldVal}
        set({blocks: blocks})
    }
    return (
        <Card>
            <Card.Body>
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="3">
                            Наименование
                        </Form.Label>
                        <Col sm="9">
                            <Form.Control onChange={handleChange} type="text" placeholder="Text" name="name" value={item.name}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="3">
                            Шаг
                        </Form.Label>
                        <Col sm="9" onClick={(e) => e.stopPropagation() }>

                            <div key={`inline-radio`} className="mb-3">
                                <Form.Check inline label="Автоматический" name="automate" type="radio" checked={item.automate} onChange={handleRadio} />
                                <Form.Check inline label="Ручной" name="manual" type="radio" checked={item.manual} onChange={handleRadio} />
                            </div>

                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="3">
                            Действие
                        </Form.Label>
                        <Col sm="9">
                            <Form.Control as="select" inputRef={(ref) => { console.log(ref) }} onChange={handleChange} name="noticeSelect" value={[item.noticeSelect]}>
                                <option>Отправить уведомление</option>
                                <option>Отправить уведомление 1</option>
                                <option>Отправить уведомление 2</option>
                                <option>Отправить уведомление 3</option>
                                <option>Отправить уведомление 4</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="3">
                            <Button variant="outline-primary">+</Button>
                        </Form.Label>
                        <Col sm="9">
                            Получатели: Отдел подготовки договоров аренды.
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="3">
                            Текст уведомления
                        </Form.Label>
                        <Col sm="9">
                            <InputGroup>
                                <FormControl as="textarea" aria-label="With textarea"  onChange={handleChange} type="text" placeholder="Text" name="noticeText" value={item.noticeText}/>
                            </InputGroup>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="3">
                            Шаг завершает маршрут
                        </Form.Label>
                        <Col sm="9">
                            <div key={`inline-checkbox`} className="mb-3">
                                <Form.Check checked={item.finish} inline type="checkbox" onChange={handleCheckbox} name="finish" />
                            </div>
                        </Col>
                    </Form.Group>

                </Form>

            </Card.Body>
        </Card>
    )
}

export default InnerCard