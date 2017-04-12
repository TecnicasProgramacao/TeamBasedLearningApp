/**
* This file is where the route paths is initialized.
*
* @summary Route paths.
*
*/

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import QuestionList from './containers/questions/questionList';
import GroupAnswer from './containers/groupAnswer';
import IndividualAnswer from './containers/individualAnswer';
import ListCreator from './containers/listCreator';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={QuestionList} />
    <Route path="/group-simulator" component={GroupAnswer} />
    <Route path="/individual-simulator" component={IndividualAnswer} />
    <Route path="/create-list" component={ListCreator} />
  </Route>
);
