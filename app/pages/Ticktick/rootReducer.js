import { combineReducers } from 'redux';
import mainReducer from './App/reducer';
import listsReducer from './components/Lists/reducer';

const ticktickReducer = combineReducers({
  main: mainReducer,
  lists: listsReducer
})

export default ticktickReducer;
