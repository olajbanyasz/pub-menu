import React, { useState, Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import { Form, Button, Modal, Col } from 'react-bootstrap';

@observer
class EditDetailsModal extends Component {

    @observable name = this.props.menu.name;
    @observable ingredients = this.props.menu.details.ingredients || "";
    @observable price = this.props.menu.details.price || "";
    @observable quantity = this.props.menu.details.quantity || "";
    @observable isValid = false;
    @observable show = false;

    @action
    updateMenuDetails = () => {
        const menus = this.props.store.getMenuList();
        const menu = menus.filter(item => item.id === this.props.menu.id)[0];
        this.name = menu.name;
        this.ingredients = menu.details.ingredients || "";
        this.price = menu.details.price || "";
        this.quantity = menu.details.quantity || "";
    }

    @action
    handleClose = () => {
        this.clearInputs()
        this.show = false;
    }

    @action
    handleShow = () => {
        this.updateMenuDetails();
        this.show = true;
    }

    @action
    handleNameChange = e => {
        this.name = e.target.value;
        this.validateForm();
    };

    @action
    handleIngredientsChange = e => {
        this.ingredients = e.target.value;
        this.validateForm();
    };

    @action
    handlePriceChange = e => {
        this.price = e.target.value;
        this.validateForm();
    };

    @action
    handleQuantityChange = e => {
        this.quantity = e.target.value;
        this.validateForm();
    };

    @action
    validateForm = () => {
        if (this.price && this.quantity && this.ingredients && this.name) {
            this.isValid = true;
        } else {
            this.isValid = false;
        }
    };

    @action
    handleFormSubmit = e => {
        const details = {
            name: this.name,
            ingredients: this.ingredients,
            price: this.price,
            quantity: this.quantity,
            id: this.props.menu.id
        }
        this.props.store.addDetails(details);
        this.handleClose();
        e.preventDefault();
    };
    
    @action
    clearInputs = () => {
        this.name = "";
        this.ingredients = "";
        this.quantity = "";
        this.price = "";
    }

    render ()  {
        return(
        <span>
            <Button variant="primary" className="btn-sm float-right" onClick={this.handleShow}>
                Edit
            </Button>
            <Modal
                show={this.show}
                onHide={this.handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit {this.props.menu.name} menu</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="add-new-menu-form">
                        <Form.Group controlId="menuName" as={Col}>
                            <Form.Label>Name:</Form.Label>
                            <Form.Control type="text" placeholder="Enter the name" onChange={this.handleNameChange} value={this.name} required />
                        </Form.Group>

                        <Form.Group controlId="menuIngredients" as={Col}>
                            <Form.Label>ingredients:</Form.Label>
                            <Form.Control type="text" placeholder="Ingredients" onChange={this.handleIngredientsChange} value={this.ingredients} required />
                        </Form.Group>

                        <Form.Group controlId="menuQuantity" as={Col}>
                            <Form.Label>Quantity:</Form.Label>
                            <Form.Control type="text" placeholder="Enter the Quantity" onChange={this.handleQuantityChange} value={this.quantity} required />
                        </Form.Group>

                        <Form.Group controlId="menuPrice" as={Col}>
                            <Form.Label>Price:</Form.Label>
                            <Form.Control type="text" placeholder="Enter the Price" onChange={this.handlePriceChange} value={this.price} required />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.handleFormSubmit} disabled={this.isValid ? "" : "disabled"}>Save</Button>
                </Modal.Footer>
            </Modal>
        </span >
    )};
}

export default EditDetailsModal;
