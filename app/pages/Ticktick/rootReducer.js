import { combineReducers } from 'redux';
import mainReducer from './reducer';
import listsReducer from './Lists/reducer';

const ticktickReducer = combineReducers({
  main: mainReducer,
  lists: listsReducer
})

export default ticktickReducer;
