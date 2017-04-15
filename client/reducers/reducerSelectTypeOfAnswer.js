import { SELECT_GROUP_ANSWERING, SELECT_INDIVIDUAL_ANSWERING } from '../actions/index';

export default function (state = 'EMPTY', action) {
  switch (action.type) {
    case SELECT_GROUP_ANSWERING:
      return action.payload;
    case SELECT_INDIVIDUAL_ANSWERING:
      return action.payload;
    default:
      return state;
  }
}
