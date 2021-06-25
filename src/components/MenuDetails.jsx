import React, { Component } from "react";
import { observer } from "mobx-react";
import { Table } from 'react-bootstrap';

@observer
class MenuDetails extends Component {

  render() {
    const { id } = this.props;
    const menus = this.props.store.getMenuList();
    const menu = menus.filter(menu => menu.id === id)[0];
    return (
      <div>
        <h1>{menu.name} Menu Details</h1>
        <Table striped borderless hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>{menu.name}</th>
            </tr>
            <tr>
              <th>Quantity</th>
              <th>{menu.details.quantity}</th>
            </tr>
            <tr>
              <th>Ingredients</th>
              <th>{menu.details.ingredients}</th>
            </tr>
            <tr>
              <th>Price</th>
              <th>${menu.details.price}</th>
            </tr>
          </thead>
        </Table>
      </div>
    );
  }
}

export default MenuDetails;