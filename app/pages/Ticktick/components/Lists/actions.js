export const DEFAULT_ACTION = 'DEFAULT_ACTION';
export const SELECT_TAB = 'SELECT_TAB';
export const SELECT_LIST = 'SELECT_LIST';


export function selectTab(payload) {
  return {
    type: SELECT_TAB,
    payload,
  };
}

export function selectList(payload) {
  return {
    type: SELECT_LIST,
    payload,
  };
}
