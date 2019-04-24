import { combineReducers } from 'redux';
import listsReducer from './components/Lists/reducer';
import dataReducer from './mockDataReducer';
import taskListReducer from './components/TaskList/reducer';

const ticktickReducer = combineReducers({
  lists: listsReducer,
  data: dataReducer,
  tasksList: taskListReducer
})

export default ticktickReducer;
