import { Chance } from 'chance';
const chance = new Chance(Math.random);

export const ADD_TASK = 'ADD_TASK';

export function addTask(payload) {
  return {
    type: ADD_TASK,
    payload,
    guid: chance.guid()
  };
}
