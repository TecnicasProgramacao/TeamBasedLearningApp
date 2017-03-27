import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { Meteor } from 'meteor/meteor';

import App from './components/app';

const createStoreWithMiddleware = applyMiddleware()(createStore);


Meteor.startup(() => {

  render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <App />
    </Provider>
    , document.getElementById('container'));

});
