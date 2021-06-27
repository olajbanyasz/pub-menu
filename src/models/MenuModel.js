import { observable } from "mobx";
import { persist } from 'mobx-persist';

export default class MenuModel {
  @persist('object') @observable.deep details;
  @persist @observable name;
  @persist @observable id;
  @persist @observable description;

  constructor({ name, id, description }) {
    this.name = name;
    this.description = description;
    this.id = id;
    this.details = {};
  }
}
