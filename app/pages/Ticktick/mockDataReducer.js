import produce from 'immer';
import { Chance } from 'chance';
import { TOGGLE_DONE } from './components/Task/actions';
import { ADD_TASK } from './components/InputNewTask/actions';

const chance = new Chance(Math.random);

const MOCK_TASKS_AMOUNT = 100;


const tasks = {}
for (let i=0; i<MOCK_TASKS_AMOUNT; i+=1) {
  tasks[chance.guid()] = {
    content: chance.sentence({words: chance.integer({min: 2, max: 6})}),
    description: chance.sentence({words: 10}),
    priority: chance.integer({min: 0, max: 3}),
    completed: chance.weighted([true, false], [1, 5])

  }
}

const tags = {}
for (let i=0; i<10; i+=1) {
  tags[chance.guid()] = {
    name: chance.word({length: chance.integer({min: 3, max: 10})}),
    tasks: chance.pickset(Object.keys(tasks), chance.integer({min: 1, max: MOCK_TASKS_AMOUNT / 20}))
  }
}

export const groups = {}
const randomTasksToDistribute = Object.keys(tasks)

try {
  for (let i=0; i<4; i+=1) {
    groups[chance.guid()] = {
      name: chance.capitalize(chance.word({length: chance.integer({min: 3, max: 10})})),
      tasks: randomTasksToDistribute.splice(0, chance.integer({min: 0, max: MOCK_TASKS_AMOUNT / 6}))
    }
  }
} catch (e) {
  console.log(e);
}



const predefinedGroups = {
  'inbox': {
    tasks: ['3'],
    displayed: true,
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
      case TOGGLE_DONE:
        draft.tasks[action.payload].completed = !draft.tasks[action.payload].completed
        break;

      case ADD_TASK:
        draft.tasks[chance.guid()] = {
          content: action.payload.content,
          description: '',
          priority: action.payload.priority,
          completed: false
        }
        break
    }
  });

export default dataReducer;
