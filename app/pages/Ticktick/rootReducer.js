import { combineReducers } from 'redux';
import mainReducer from './App/reducer';
import listsReducer from './components/Lists/reducer';
import defaultReducer from './components/TaskList/reducer';

const ticktickReducer = combineReducers({
  main: mainReducer,
  lists: listsReducer,
  taskList: defaultReducer
})

export default ticktickReducer;
