import produce from 'immer';
import { SELECT_LIST, SELECT_TAB } from './actions';

export const initialState = {
  selectedTab: 1,
  selectedList: 0
};

/* eslint-disable default-case, no-param-reassign */
const listsReducer = (state = initialState, action) =>
  produce(state, draft => {
      switch (action.type) {
        case SELECT_TAB:
          draft.selectedTab = action.payload;
          break;
        case SELECT_LIST:
          draft.selectedList = action.payload;
          break;

      }
    },
  );

export default listsReducer;
