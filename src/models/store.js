import MenuListModel from "./MenuListModel";
import SelectedMenuModel from "./SelectedMenuModel";
import { create } from 'mobx-persist';
import localForage from 'localforage';

const hydrate = create({
    storage: localForage,
    jsonify: true
});

export class RootStore {
    selectedMenuStore = new SelectedMenuModel();
    menuListStore = new MenuListModel();

    constructor() {
        hydrate('selectedMenuStore', this.selectedMenuStore);
        hydrate('menuListStore', this. menuListStore);
    }
}

export const store = new RootStore();