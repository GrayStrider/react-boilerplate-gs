import { combineReducers } from 'redux';
import listsReducer from './components/Lists/reducer';
import dataReducer from './mockDataReducer';

const ticktickReducer = combineReducers({
  lists: listsReducer,
  data: dataReducer
})

export default ticktickReducer;
