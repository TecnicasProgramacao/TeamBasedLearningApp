/**
* This file is where the route paths is initialized.
*
* @summary Route paths.
*
*/

import React from 'react';
import { Route } from 'react-router';

import QuestionList from './containers/questionList';
import GroupAnswering from './containers/groupAnswering';
import IndividualAnswering from './containers/individualAnswering';
import AvailableQuestions from './containers/availableQuestions';

export default (
  <Route>
    <Route path="/" component={QuestionList} />
    <Route path="/group-simulator" component={GroupAnswering} />
    <Route path="/individual-simulator" component={IndividualAnswering} />
    <Route path="/available-questions" component={AvailableQuestions} />
  </Route>
);
