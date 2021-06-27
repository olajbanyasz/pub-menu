import React from "react";
import { render } from "react-dom";
import MenuList from "./components/MenuList";
import MenuDetails from "./components/MenuDetails";
import AddNewMenuForm from "./components/AddNewMenuForm";
import DevTools from 'mobx-react-devtools';
import { Container, Row, Col } from 'react-bootstrap';
import { store } from "./models/store";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Provider } from 'mobx-react';


import "./index.css";

render(
  <div>
    <Provider store={store}>
      <Router>
        <Container>
          <AddNewMenuForm store={store.menuListStore}/>
        </Container>
        <Container className="main-container">
          <Row>
            <Col xl="3" className="column">
              <MenuList store={store.menuListStore }/>
            </Col>
            <Col xl="9" className="column">
              <Switch>
                <Route path="/:id" render={(props) => {
                    const id = props.match.params.id;
                    store.selectedMenuStore.setSelectedMenu(id);
                    return (
                      <MenuDetails />
                    )
                }} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </Router>
    </Provider>
    <DevTools />
  </div>,
  document.getElementById("root")
);

window.store = store;
store.menuListStore.addMenu({name: 'Beers', id: 'beers', description: 'Beers & Details'});
store.menuListStore.addMenu({name: 'Wines', id: 'wines', description: 'Wines & Details'});
