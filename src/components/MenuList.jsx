import React, { Component } from "react";
import { observer } from "mobx-react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import EditDetailsModal from "./EditDetailsModal";

@observer
class MenuList extends Component {
  render() {
    const { store } = this.props;
    return (
      <div>
        <h4>Menus</h4>
        <ListGroup>
          {store.menus.map(menu => (
            <ListGroup.Item action key={menu.id}>
              <Link to={"/" + menu.id}>
                {menu.name}
              </Link>
              <EditDetailsModal menu={menu} store={store}/>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    );
  }
}

export default MenuList;
