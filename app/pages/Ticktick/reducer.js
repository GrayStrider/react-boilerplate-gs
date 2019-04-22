import produce from 'immer';
import { SELECT_MENU_TASK_LIST_TAB } from './actions';


export const initialState = {
  tasks_lists_selected_tab: 1
}

/* eslint-disable default-case, no-param-reassign */
const ticktickReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SELECT_MENU_TASK_LIST_TAB:
        draft.tasks_lists_selected_tab = action.payload;
        break;
    }
  });

export default ticktickReducer;
