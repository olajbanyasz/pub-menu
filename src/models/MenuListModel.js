import { observable, action } from "mobx";
import { persist } from 'mobx-persist';

import MenuModel from "./MenuModel";

export default class MenuListModel {
  @persist('list') @observable.deep menus = [];

  @action
  addMenu({ name, description, id }) {
    this.menus.push(new MenuModel({ name, description, id }));
  }

  @action
  addDetails({ name, ingredients, price, quantity, id }) {
    let index;
    this.menus.forEach((element, i) => { 
      if (element.id === id) {
        index = i;
      }
    });
    this.menus[index].name = name;
    this.menus[index].details = {
      ingredients: ingredients,
      price: price,
      quantity: quantity
    };
  }
}
