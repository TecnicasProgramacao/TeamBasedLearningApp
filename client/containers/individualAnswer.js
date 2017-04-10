/**
* This file is where the individual answers is rendered.
*
* @summary Individual answers container.
*
* @link /individual-simulator
* @class IndividualAnswering
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionList from './questions/questionList';

class IndividualAnswer extends Component {

  render() {
    return (
      <QuestionList />
    );
  }
}

function mapStateToProps(state) {
  return {
    questionList: state.questionList,
  };
}

IndividualAnswer.propTypes = {
  questionList: React.PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(IndividualAnswer);
