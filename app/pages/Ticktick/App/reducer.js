import produce from 'immer';
import { DEFAULT_ACTION } from './actions';


export const initialState = {
  placeholder: 1
}

/* eslint-disable default-case, no-param-reassign */
const mainReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        draft.placeholder = action.payload;
        break;
    }
  });

export default mainReducer;
