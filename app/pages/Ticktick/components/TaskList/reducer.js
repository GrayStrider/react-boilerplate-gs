import produce from 'immer';
import { SELECT_TASK } from './Task/actions';


export const initialState = {
  selectedTask: null
}

/* eslint-disable default-case, no-param-reassign */
const taskListReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SELECT_TASK:
        draft.selectedTask = action.payload;
        break;
    }
  });

export default taskListReducer;
