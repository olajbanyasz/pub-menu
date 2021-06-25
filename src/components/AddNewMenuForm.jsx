import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import { Form, Button, Col, Accordion, Card } from 'react-bootstrap';

@observer
class AddNewMenuForm extends Component {
    @observable newMenuName = "";
    @observable newMenuDescription = "";
    @observable newMenuId = "";
    @observable isValid = false;

    render() {
        return (
            <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Add New Menu
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Form className="add-new-menu-form">
                            <Form.Group controlId="menuName" as={Col}>
                                <Form.Label>Name:</Form.Label>
                                <Form.Control type="text" placeholder="Enter the name" onChange={this.handleNameChange} value={this.newMenuName} required />
                            </Form.Group>

                            <Form.Group controlId="menuDescription" as={Col}>
                                <Form.Label>Description:</Form.Label>
                                <Form.Control type="text" placeholder="Enter the description" onChange={this.handleDescriptionChange} value={this.newMenuDescription} required />
                            </Form.Group>

                            <Form.Group controlId="menuId" as={Col}>
                                <Form.Label>Id:</Form.Label>
                                <Form.Control type="text" placeholder="Enter the Id" onChange={this.handleIdChange} value={this.newMenuId} required />
                            </Form.Group>

                            <Form.Group>
                                <Button id="add-form-button" className="btn btn-success" type="button" size="lg" onClick={this.handleFormSubmit} disabled={this.isValid ? "" : "disabled"}>
                                    Add New Menu
                                </Button>
                            </Form.Group>
                        </Form>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        );
    }

    @action
    handleNameChange = e => {
        this.newMenuName = e.target.value;
        this.validateForm();
    };

    @action
    handleDescriptionChange = e => {
        this.newMenuDescription = e.target.value;
        this.validateForm();
    };

    @action
    handleIdChange = e => {
        this.newMenuId = e.target.value;
        this.validateForm();
    };

    @action
    validateForm = () => {
        if (this.newMenuId && this.newMenuName && this.newMenuDescription) {
            this.isValid = true;
        } else {
            this.isValid = false;
        }
    }

    @action
    handleFormSubmit = e => {
        this.props.store.addMenu({
            name: this.newMenuName,
            description: this.newMenuDescription,
            id: this.newMenuId
        });
        this.newMenuName = "";
        this.newMenuDescription = "";
        this.newMenuId = "";
        e.preventDefault();
    };
}

export default AddNewMenuForm;
