export const FLIP_COMPLETED = 'FLIP_COMPLETED';

export function flipCompleted(payload) {
  return {
    type: FLIP_COMPLETED,
    payload,
  };
}
