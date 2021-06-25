import MenuListModel from "./MenuListModel";
import { create } from 'mobx-persist';
import localForage from 'localforage';

const hydrate = create({
    storage: localForage,
    jsonify: false
});

const store = new MenuListModel();
store.addMenu({name: 'Beers', id: 'beers', description: 'Beers & Details'});
store.addMenu({name: 'Wines', id: 'wines', description: 'Wines & Details'});

const result = hydrate('menuList', store)
result.then(() => console.log('store has been hydrated'));
export const rehydrate = result.rehydrate;
export default store;