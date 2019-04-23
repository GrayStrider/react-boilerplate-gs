import produce from 'immer';
import { DEFAULT_ACTION } from './actions';

const tasks = {
  '0': {
    content: 'Buy Soap',
    description: 'In the store',
    priority: 3,
    completed: false,
  },
  '1': {
    content: 'Buy Bread',
    description: 'In the store',
    priority: 1,
    completed: false,
  },
  '2': {
    content: 'Buy Milk',
    description: 'In the store',
    priority: 0,
    completed: false,
  },
  '3': {
    content: 'Buy Water',
    description: 'In the store',
    priority: 2,
    completed: true,
  },

};

const tags = {
  '0': {
    name: 'Home',
    tasks: ['0', '2'],
  },
  '1': {
    name: 'Work',
    tasks: ['1', '3'],
  },
}


const predefinedGroups = {
  'inbox': {
    tasks: ['3'],
    displayed: true,
  },

}

const groups = {
  '4': {
    name: 'Personal',
    tasks: ['0', '2'],
  },
  '5': {
    name: 'Vacation',
    tasks: ['1'],
  },

}

const custom = {
  '6': {
    name: 'WIP',
    tasks: []
  },
}

export const menuCategories = {
  groups,
  tags,
  custom,
};

const spreadedCategories = {
  ...groups,
  ...tags,
  ...custom
}

export const initialState = {
  tasks,
  predefinedGroups,
  groups,
  tags,
  custom,
  spreadedCategories,
};

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
