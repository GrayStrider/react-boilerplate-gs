export const TOGGLE_DONE = 'TOGGLE_DONE';

export function toggleDone(payload) {
  return {
    type: TOGGLE_DONE,
    payload,
  };
}
