import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from './cards/cardList';

class GroupAnswering extends Component {

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

GroupAnswering.propTypes = {
  questionList: React.PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(GroupAnswering);
