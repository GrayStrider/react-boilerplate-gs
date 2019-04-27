export const MODIFY_TASK = 'MODIFY_TASK';

export function modifyTask(payload) {
  return {
    type: MODIFY_TASK,
    payload,
  };
}
