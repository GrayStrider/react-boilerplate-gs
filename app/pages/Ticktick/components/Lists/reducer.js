import produce from 'immer';
import { SELECT_LIST, SELECT_TAB } from './actions';
import { groups } from '../../mockDataReducer';

export const initialState = {
  selectedTab: 'groups',
  selectedList: {id: Object.keys(groups)[0], type: groups[Object.keys(groups)[0]].type}
};

/* eslint-disable default-case, no-param-reassign */
const listsReducer = (state = initialState, action) =>
  produce(state, draft => {
      switch (action.type) {
        case SELECT_TAB:
          draft.selectedTab = action.payload;
          break;
        case SELECT_LIST:
          draft.selectedList.id = action.payload.id;
          draft.selectedList.type = action.payload.type;
          break;

      }
    },
  );

export default listsReducer;
