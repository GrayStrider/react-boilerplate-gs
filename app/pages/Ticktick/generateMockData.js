import { Chance } from 'chance';
const MOCK_TASKS_AMOUNT = 1000;
const chance = new Chance(Math.random);


export default function([tasks, tags, groups]) {
  for (let i = 0; i < MOCK_TASKS_AMOUNT; i += 1) {
    tasks[chance.guid()] = {
      taskContent: chance.sentence({ words: chance.integer({ min: 2, max: 6 }) }),
      description: chance.sentence({ words: 10 }),
      priority: chance.integer({ min: 0, max: 3 }),
      completed: chance.weighted([true, false], [1, 5]),

    };
  }

  for (let i = 0; i < 10; i += 1) {
    tags[chance.guid()] = {
      name: chance.word({ length: chance.integer({ min: 3, max: 10 }) }),
      type: 'tags',
      tasks: chance.pickset(Object.keys(tasks), chance.integer({ min: 1, max: MOCK_TASKS_AMOUNT / 20 })),
    };
  }

  const randomTasksToDistribute = Object.keys(tasks);

  for (let i = 0; i < 4; i += 1) {
    groups[chance.guid()] = {
      name: chance.capitalize(chance.word({ length: chance.integer({ min: 3, max: 10 }) })),
      type: 'groups',
      tasks: randomTasksToDistribute.splice(0, chance.integer({ min: 0, max: MOCK_TASKS_AMOUNT / 6 })),
    };
  }
}
