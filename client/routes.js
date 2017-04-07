import React from 'react';
import { Route } from 'react-router';

import QuestionList from './containers/questionList';
import GroupAnswering from './containers/groupAnswering';

export default (
  <Route>
    <Route path="/" component={QuestionList} />
    <Route path="/group-simulator" component={GroupAnswering} />
  </Route>
);
