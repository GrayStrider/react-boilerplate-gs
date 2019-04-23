import produce from 'immer';
import { DEFAULT_ACTION } from './actions';

const tasks = [
  {
    id: 0,
    content: 'Buy Milk',
    description: 'In the store',
    priority: 3,
    completed: false,
  },
  {
    id: 1,
    content: 'Buy Milk',
    description: 'In the store',
    priority: 1,
    completed: false,
    tags: ['1','2']
  },
  {
    id: 2,
    content: 'Buy Milk',
    description: 'In the store',
    priority: 0,
    completed: false,
    tags: ['1']
  },
  {
    id: 3,
    content: 'Buy Milk',
    description: 'In the store',
    priority: 2,
    completed: true,
    tags: []
  }

]

const tags = [
  {
    id: 0,
    name: 'Home',
    tasksWith: ['0', '2']
  },
  {
    id: 1,
    name: 'Work',
    tasksWith: ['1']
  }
]


const predefinedGroups = [
  {
    id: 2,
    name: 'Inbox',
    tasksIn: ['3'],
    displayed: true
  },
  {
    id: 3,
    name: 'Today',
    tasksIn: [],
    displayed: true
  },

]

const groups = [
  {
    id: 4,
    name: 'Personal',
    tasksIn: ['0', '2']
  },
  {
    id: 5,
    name: 'Vacation',
    tasksIn: ['1']
  }

]

const customLists = [
  {
    id: 6,
    name: 'WIP'
  }
]
export const initialState = {
  tasks,
  tags,
  predefinedGroups,
  groups,
  customLists
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
