import { combineReducers } from 'redux';
import QuestionsReducer from './reducerFakeData';

const rootReducer = combineReducers({
  questionList: QuestionsReducer,
});

export default rootReducer;
