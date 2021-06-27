import { observable, action } from "mobx";
import { persist } from 'mobx-persist';

export default class SelectedMenuModel {
  @persist @observable id;

  @action
  setSelectedMenu(id) {
    this.id = id;
  }
}