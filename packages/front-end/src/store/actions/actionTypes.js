export const AUTH_CREATE = 'AUTH_CREATE';
export const AUTH_DESTROY = 'AUTH_DESTROY';
export const AUTH_IS_LOADING = 'AUTH_IS_LOADING';
export const AUTH_IS_ERROR = 'AUTH_IS_ERROR';

export const SIMULATED_TIME_SET = 'SIMULATED_TIME_SET';
export const SIMULATED_TIMER_NAME = 'SIMULATED_TIMER_NAME';
export const SIMULATED_TIMER_SET = 'SIMULATED_TIMER_SET';
export const SIMULATED_TIMER_CREATE = 'SIMULATED_TIMER_START';
export const SIMULATED_TIMER_DESTROY = 'SIMULATED_TIMER_DESTROY';

export const SOCKET_CREATE = 'SOCKET_CREATE';
export const SOCKET_DESTORY = 'SOCKET_DESTROY';
export const SOCKET_SEND = 'SOCKET_SEND';

export const ITEMS_CREATE = 'ITEMS_CREATE';
export const ITEMS_DESTROY = 'ITEMS_DESTROY';
export const ITEMS_ADD = 'ITEMS_ADD';
export const ITEMS_REMOVE = 'ITEMS_REMOVE';
export const ITEMS_UPDATE = 'ITEMS_UPDATE';
export const ITEMS_IS_LOADING = 'ITEMS_IS_LOADING';
export const ITEMS_IS_ERROR = 'ITEMS_IS_ERROR';

export const SESSION_CLEAR = 'SESSION_CLEAR';
export const SESSION_CHECK = 'SESSION_CHECK';
export const LOCALSTORAGE_CLEAR = 'LOCALSTORAGE_CLEAR';
export const LOCALSTORAGE_CHECK = 'LOCALSTORAGE_CHECK';

// !temp
export const REDUCE = 'REDUCE';

// !important
// Prefixes are not included in the actual constant
export const PREFIXES_CHAT = 'CHAT';
export const PREFIXES_RESOURCES = 'RESOURCES';
export const PREFIXES_TASKS = 'TASKS';
export const PREFIXES_BRIEFINGS = 'BRIEFINGS';

// Local Storage
export const LS_AUTH = 'AUTH';
export const LS_CHAT = 'CHAT';
export const LS_RESOURCES = 'RESOURCES';
export const LS_TASKS = 'TASKS';
export const LS_BRIEFINGS = 'BRIEFINGS';
// export const LS_TOKEN = 'TOKEN';
// export const LS_USER_ID = 'USER_ID';
// export const LS_PARTICIPANT_ID = 'PARTICIPANT_ID';
// export const LS_TIME_START = 'TIME_START';
// export const LS_SIMULATED_TIME_SPEED = 'SIMULATED_TIME_SPEED';


// what about init, create, destroy?

// Accessing other state
// https://stackoverflow.com/questions/39257740/how-to-access-state-inside-redux-reducer

// Wow this looks like boilerplate
// https://techblog.appnexus.com/five-tips-for-working-with-redux-in-large-applications-89452af4fdcb#fe11
// https://github.com/reduxjs/redux/blob/master/docs/recipes/ReducingBoilerplate.md#generating-reducers
// https://redux.js.org/recipes/structuringreducers/reusingreducerlogic

// Also read https://medium.com/@kylpo/redux-best-practices-eef55a20cc72

// export const ITEMS = {
//   INIT: 'ITEMS_INIT',
//   CREATE: 'ITEMS_CREATE',
//   DESTROY: 'ITEMS_DESTROY',
//   ADD: 'ITEMS_ADD',
//   REMOVE: 'ITEMS_REMOVE',
//   IS_LOADING: 'ITEMS_IS_LOADING',
//   IS_ERROR: 'ITEMS_IS_ERROR',
// };

// export const PREFIXES = {
//   CHAT: 'CHAT',
//   RESROUCES: 'RESOURCES',
//   TASKS: 'TASKS',
//   BRIEFINGS: 'BRIEFINGS',
// };

// export const CHAT_INIT = 'CHAT_INIT';
// export const CHAT_CREATE = 'CHAT_CREATE';
// export const CHAT_DESTROY = 'CHAT_DESTROY';
// export const CHAT_ADD = 'CHAT_ADD';

// export const RESOURCES_INIT = 'RESOURCES_INIT';
// export const RESOURCES_CREATE = 'RESOURCES_CREATE';
// export const RESOURCES_DESTROY = 'RESOURCES_DESTROY';
// export const RESOURCES_ADD = 'RESOURCES_ADD';
// export const RESOURCES_REMOVE = 'RESOURCES_REMOVE';

// export const TASKS_INIT = 'TASKS_INIT';
// export const TASKS_CREATE = 'TASKS_CREATE';
// export const TASKS_DESTROY = 'TASKS_DESTROY';
// export const TASKS_ADD = 'TASKS_ADD';
// export const TASKS_REMOVE = 'TASKS_REMOVE';

// export const BRIEFINGS_INIT = 'BRIEFINGS_INIT';
// export const BRIEFINGS_CREATE = 'BRIEFINGS_CREATE';
// export const BRIEFINGS_DESTROY = 'BRIEFINGS_DESTROY';
// export const BRIEFINGS_ADD = 'BRIEFINGS_ADD';
// export const BRIEFINGS_REMOVE = 'BRIEFINGS_REMOVE';
