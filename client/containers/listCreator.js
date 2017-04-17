/**
* This file is responsible for rendering the create list page.
*
* @summary Conteiner for creating lists.
*
* @link /create-list
* @class ListCreator
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';

class ListCreator extends Component {
  constructor(props) {
    super(props);
    this.state = { listName: '', listDescription: '', questions: '' };

    this.handleChange = this.handleChange.bind(this);
    this.sendToDatabase = this.sendToDatabase.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const targetValue = target.value;
    const name = target.name;

    this.setState({
      [name]: targetValue
    });
  }

  sendToDatabase(event) {
    console.log('Sending to database...');
    Lists.insert(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Criar nova lista</h1>
        <form onSubmit={this.sendToDatabase}>
          <label>
            Título da lista:
            <input type="text" value={this.state.listName}
              name="listName"
              onChange={this.handleChange} />
          </label>
          <label>
            Descrição da lista:
            <input type="text" value={this.state.listDescription}
              name="listDescription"
              onChange={this.handleChange} />
          </label>
          <input type="submit" value="Criar Lista" />
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    questionList: state.questionList,
  };
}

ListCreator.propTypes = {
  questionList: React.PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(ListCreator);
