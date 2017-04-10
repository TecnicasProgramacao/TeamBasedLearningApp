import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionList from './questions/questionList';

class GroupAnswer extends Component {

  render() {
    return (
      <QuestionList />
    );
  }
}

function mapStateToProps(state) {
  return {
    questionListData: state.questionListData,
  };
}

GroupAnswer.propTypes = {
  questionListData: React.PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(GroupAnswer);
