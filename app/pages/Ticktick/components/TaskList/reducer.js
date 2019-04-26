import produce from 'immer';
import { SELECT_TASK } from '../Task/actions';
import { ADD_TASK } from '../InputNewTask/actions';


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
      case ADD_TASK:
        draft.selectedTask = action.payload.guid
    }
  });

export default taskListReducer;
