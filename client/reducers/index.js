import { combineReducers } from 'redux';
import QuestionsReducer from './reducerFakeData';

const rootReducer = combineReducers({
  questionListData: QuestionsReducer,
});

export default rootReducer;
