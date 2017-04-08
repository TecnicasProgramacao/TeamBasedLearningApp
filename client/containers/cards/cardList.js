import React, { Component } from 'react';
import Card from './card';


class CardList extends Component {
  render() {
    return (
      <div className="row">
        <div className="col l3" />
        <div className="col l6 s12">
          <ul>
            <Card />
          </ul>
        </div>
        <div className="col l3" />
      </div>
    );
  }
}

export default CardList;
