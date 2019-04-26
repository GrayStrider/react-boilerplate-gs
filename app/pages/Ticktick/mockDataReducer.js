import produce from 'immer';
import { Chance } from 'chance';
import { SELECT_TASK, TOGGLE_DONE } from './components/Task/actions';
import { ADD_TASK } from './components/InputNewTask/actions';
import { SELECT_LIST, SELECT_TAB } from './components/Lists/actions';
import generateMockData from './generateMockData';
const chance = new Chance(Math.random);

const [tasks, tags, groups] = [{}, {}, {}]
generateMockData([tasks, tags, groups])


const custom = {
  custom : {
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
};

const insertableLists = {
  groups,
  tags,
  custom,
};
export const menuCategories = Object.keys(insertableLists);

const lists = {
  predefinedGroups,
  selectedTab: menuCategories[0],
  selectedList: custom.custom
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
      case ADD_TASK: {
        const guid = chance.guid();
        // insert new task into database
        draft.tasks[guid] = {
          taskContent: action.payload.taskContent,
          description: '',
          priority: action.payload.priority,
          completed: false,
        };
        // insert taskID into active list
        draft.lists.selectedList.tasks.push(guid);
        // select new task after input
        draft.tasksList.selectedTaskID = guid;
        break;
      }
      case TOGGLE_DONE:
        draft.tasks[action.payload].completed =
          !draft.tasks[action.payload].completed;
        break;

      case SELECT_TASK:
        draft.tasksList.selectedTaskID = action.payload;
        break;
      case SELECT_TAB:
        draft.lists.selectedTab = action.payload;
        break;
      case SELECT_LIST:
        draft.lists.selectedList = action.payload;
        break;
    }
  });

export default globalReducer;
