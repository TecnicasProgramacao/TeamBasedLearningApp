import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from './cards/cardList';

class QuestionList extends Component {


  render() {
    return (
      <CardList />
    );
  }
}

function mapStateToProps(state) {
  return {
    questionList: state.questionList,
  };
}

export default connect(mapStateToProps)(QuestionList);
