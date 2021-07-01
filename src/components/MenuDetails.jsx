import React, { Component } from "react";
import { observer } from "mobx-react";
import { Table } from 'react-bootstrap';
import { store } from "../models/store";

@observer
class MenuDetails extends Component {
  render() {
    const id = store.selectedMenuStore.id;
    const menus = store.menuListStore.menus;
    const menu = menus.filter(menu => menu.id === id).length && menus.filter(menu => menu.id === id)[0] || [];
    const details = menu.details || {};
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
              <th>{details.quantity}</th>
            </tr>
            <tr>
              <th>Ingredients</th>
              <th>{details.ingredients}</th>
            </tr>
            <tr>
              <th>Price</th>
              <th>${details.price}</th>
            </tr>
          </thead>
        </Table>
      </div>
    );
  }
}

export default MenuDetails;