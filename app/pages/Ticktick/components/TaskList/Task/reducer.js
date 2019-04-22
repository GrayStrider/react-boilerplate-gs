import produce from 'immer';
import { FLIP_COMPLETED } from './actions';


export const initialState = {
  defaultStateEntry: 1
}

/* eslint-disable default-case, no-param-reassign */
const defaultReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FLIP_COMPLETED:
        draft.defaultStateEntry = action.payload;
        break;
    }
  });

export default defaultReducer;
