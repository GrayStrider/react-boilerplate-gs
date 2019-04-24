import produce from 'immer';
import { DEFAULT_ACTION } from './actions';


export const initialState = {
  default: null
}

/* eslint-disable default-case, no-param-reassign */
const detailsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        draft.default = action.payload;
        break;
    }
  });

export default detailsReducer;
