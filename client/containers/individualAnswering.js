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
import CardList from './cards/cardList';

class IndividualAnswering extends Component {

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

IndividualAnswering.propTypes = {
  questionList: React.PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(IndividualAnswering);
