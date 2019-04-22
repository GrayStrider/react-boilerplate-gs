import { combineReducers } from 'redux';
import mainReducer from './App/reducer';
import listsReducer from './components/Lists/reducer';
import defaultReducer from './components/TaskList/reducer';
import dataReducer from './mockDataReducer';

const ticktickReducer = combineReducers({
  main: mainReducer,
  lists: listsReducer,
  taskList: defaultReducer,
  data: dataReducer
})

export default ticktickReducer;
