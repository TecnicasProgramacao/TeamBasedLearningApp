/**
* This file is where the individual answers is rendered.
*
* @summary Individual answers container.
*
* @link /individual-simulator
* @class IndividualAnswering
*/

import React, { Component } from 'react';
import QuestionList from './questions/questionList';

class IndividualAnswer extends Component {

  render() {
    return (
      <QuestionList />
    );
  }
}

export default (IndividualAnswer);
