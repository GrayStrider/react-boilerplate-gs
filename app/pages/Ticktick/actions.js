export const SELECT_MENU_TASK_LIST_TAB = 'SELECT_MENU_TASK_LIST_TAB';


export function selectMenuTaskListsTab(payload) {
  return {
    type: SELECT_MENU_TASK_LIST_TAB,
    payload,
  };
}
