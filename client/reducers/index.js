import { combineReducers } from 'redux';
import QuestionsReducer from './reducerFakeData';
import SelectTypeOfAnswer from './reducerSelectTypeOfAnswer';

const rootReducer = combineReducers({
  questionListData: QuestionsReducer,
  typeOfAnswering: SelectTypeOfAnswer,
});

export default rootReducer;
