import produce from 'immer';
import { SELECT_LIST, SELECT_TAB } from './actions';
import { groups } from '../../mockDataReducer';

export const initialState = {
  selectedTab: 'groups',
  selectedList: Object.keys(groups)[0]
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
