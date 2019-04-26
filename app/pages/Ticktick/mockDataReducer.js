import produce from 'immer';
import { Chance } from 'chance';
import { SELECT_TASK, TOGGLE_DONE } from './components/Task/actions';
import { ADD_TASK } from './components/InputNewTask/actions';
import { SELECT_LIST, SELECT_TAB } from './components/Lists/actions';
const chance = new Chance(Math.random);
const MOCK_TASKS_AMOUNT = 1000;

const tasks = {};
for (let i = 0; i < MOCK_TASKS_AMOUNT; i += 1) {
  tasks[chance.guid()] = {
    taskContent: chance.sentence({ words: chance.integer({ min: 2, max: 6 }) }),
    description: chance.sentence({ words: 10 }),
    priority: chance.integer({ min: 0, max: 3 }),
    completed: chance.weighted([true, false], [1, 5]),

  };
}

const tags = {};
for (let i = 0; i < 10; i += 1) {
  tags[chance.guid()] = {
    name: chance.word({ length: chance.integer({ min: 3, max: 10 }) }),
    type: 'tags',
    tasks: chance.pickset(Object.keys(tasks), chance.integer({ min: 1, max: MOCK_TASKS_AMOUNT / 20 })),
  };
}

const randomTasksToDistribute = Object.keys(tasks);
export const groups = {};
for (let i = 0; i < 4; i += 1) {
  groups[chance.guid()] = {
    name: chance.capitalize(chance.word({ length: chance.integer({ min: 3, max: 10 }) })),
    type: 'groups',
    tasks: randomTasksToDistribute.splice(0, chance.integer({ min: 0, max: MOCK_TASKS_AMOUNT / 6 })),
  };
}


const custom = {
  '6': {
    name: 'Today & overdue',
    type: 'custom',
    tasks: [],
  },
};
const predefinedGroups = {
  'inbox': {
    tasks: [],
    displayed: true,
  },
}

const insertableLists = {
  groups,
  tags,
  custom
}
export const menuCategories = Object.keys(insertableLists)

const lists = {
  predefinedGroups,
  selectedTab: menuCategories[0],
  selectedList: groups[Object.keys(groups)[0]]
};

const initialState = {
  tasks,
  lists,
  insertableLists,
  tasksList: {
    selectedTaskID: null,
  },
};


/* eslint-disable default-case, no-param-reassign */
const globalReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ADD_TASK:
        draft.tasksList.selectedTaskID = action.payload.guid;
        draft.tasks[action.payload.guid] = {
          taskContent: action.payload.taskContent,
          description: '',
          priority: action.payload.priority,
          completed: false,
        };
        draft[action.payload.selectedList.type][action.payload.selectedList.id].tasks.push(action.payload.guid);
        break;
      case TOGGLE_DONE:
        draft.tasks[action.payload].completed = !draft.tasks[action.payload].completed;
        break;

      case SELECT_TASK:
        draft.tasksList.selectedTaskID = action.payload;
        break;
      case SELECT_TAB:
        draft.selectedTab = action.payload;
        break;
      case SELECT_LIST:
        draft.lists.selectedList = action.payload
        break;
    }
  });

export default globalReducer;
