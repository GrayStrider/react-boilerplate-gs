import produce from 'immer';
import { DEFAULT_ACTION } from './actions';

const tasks = [
  {
    content: 'Buy Milk',
    description: 'In the store',
    priority: 3,
    completed: false
  },
  {
    content: 'Buy Milk',
    description: 'In the store',
    priority: 1,
    completed: false
  },
  {
    content: 'Buy Milk',
    description: 'In the store',
    priority: 0,
    completed: false
  },
  {
    content: 'Buy Milk',
    description: 'In the store',
    priority: 2,
    completed: true
  }

]

const tags = [
  {
    name: 'Home'
  },
  {
    name: 'Work'
  }
]

export const initialState = {
  tasks,
  tags
}

/* eslint-disable default-case, no-param-reassign */
const dataReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        draft.defaultStateEntry = action.payload;
        break;
    }
  });

export default dataReducer;
