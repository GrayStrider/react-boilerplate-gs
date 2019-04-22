export const DEFAULT_ACTION = 'DEFAULT_ACTION';
export const SELECT_TAB = 'SELECT_TAB';


export function selectTab(payload) {
  return {
    type: SELECT_TAB,
    payload,
  };
}
