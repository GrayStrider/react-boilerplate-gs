export const MODIFY_TASK = 'MODIFY_TASK';
export const MODIFY_LIST = 'MODIFY_LIST';
export const DELETE_TASK_FROM_LIST = 'DELETE_TASK_FROM_LIST';

export function modifyTask(payload) {
  return {
    type: MODIFY_TASK,
    payload,
  };
}

export function modifyList(payload) {
  return {
    type: MODIFY_LIST,
    payload,
  };
}
export function deleteTaskFromList (payload) {
  return {
    type: DELETE_TASK_FROM_LIST,
    payload,
  };
}

