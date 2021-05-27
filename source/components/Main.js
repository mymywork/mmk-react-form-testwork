import React from 'react'
import {Modal, Button, Form, Row, Col, InputGroup, FormControl, ModalFooter, Card} from "react-bootstrap"
import InnerCard from "Components/InnerCard";
import InnerBlock from "Components/InnerBlock";

class Main extends React.Component {

    constructor() {
        super()
        this.state = {
            selected: 0,
            blocks: {
                0: {name: "1. Создание документа.", arrow: "bi-arrow-down-up", notice:"", noticeText:"" },
                1: {name: "2. Согласование документа.", arrow: "bi-arrow-down", notice:"", noticeText:"" },
                2: {name: "3. Отправка уведомления.", arrow: "bi-arrow-down", notice:"", noticeText:"" },
                3: {name: "4. Подписание документа.", arrow: "bi-arrow-down", notice:"", noticeText:"" },
                4: {name: "5. Регистрация документа.", arrow: "", notice:"", noticeText:"" }
            }
        }
    }

    render() {

        let select = (e) => {
            console.log(e)
            console.log(e.currentTarget.id)
            this.setState({selected: e.currentTarget.id })
            e.preventDefault()
        }

        console.log('name=',this.state.blocks[this.state.selected])

        return (
            <React.Fragment>
            <Modal.Dialog size="xl" >
                <Modal.Header>
                    <Modal.Title>Маршрут</Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Выбрать
                        </Form.Label>
                        <Col>
                            <Form.Control as="select">
                                <option>Согласование договора</option>
                                <option>Пусто</option>
                                <option>Пусто</option>
                                <option>Пусто</option>
                                <option>Пусто</option>
                                <option>Пусто</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>



                </Modal.Body>
                <Modal.Header></Modal.Header>
                <Modal.Header>
                    <Modal.Title>Основные параметры маршрута</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Наименование
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Text" value="Согласование договора"/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Описание
                            </Form.Label>
                            <Col sm="10">
                                <InputGroup>
                                    <FormControl as="textarea" aria-label="With textarea" />
                                </InputGroup>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                Выбрать
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control as="select">
                                    <option>Договор</option>
                                    <option>Пусто</option>
                                    <option>Пусто</option>
                                    <option>Пусто</option>
                                    <option>Пусто</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Активность
                            </Form.Label>
                            <Col sm="10">
                                <div key={`inline-checkbox`} className="mb-3">
                                    <Form.Check inline name="group1" type="checkbox" />
                                </div>
                            </Col>
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Header></Modal.Header>
                <Modal.Header>
                    <Modal.Title>Редактирование маршрута</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm={3}>
                                {Object.entries(this.state.blocks).map(([i,x])=> (<InnerBlock onClick={select} id={i} selected={this.state.selected} name={x.name} arrow={x.arrow} />) )}
                            </Form.Label>
                            <Col>
                                <InnerCard id={this.state.selected} item={this.state.blocks[this.state.selected]} set={this.setState.bind(this)} blocks={this.state.blocks} />
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>

            </Modal.Dialog>
                <br/>
            </React.Fragment>)
    }

}

export default Main