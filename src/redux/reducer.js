import actions from './actions'

// Initial state of our application 

// @Anton todo: Add counter field and write increase/decrease functionality
// @Anton todo: Add update and delete actions for todos
const initState = {
  array: [],
  count: 0
}

// Reducer rerun every time we dispatch an action
const reducer = (state = initState, action) => {
  switch (action.type) {
    case actions.ADD_TODO:
      return {...state, array: [...state.array, action.todo]};
      break;
    case actions.TOGGLE_TODO:
      return Object.assign({}, state, {
        array: state.array.map((todo, index) => {
          if (action.todo.id === todo.id) {
            return {...todo, completed: !todo.completed}
            // return Object.assign({}, todo, {completed: !todo.completed})
          }
          return todo;
        })
      });
      break;
    case actions.DELETE_TODO:
      const idx = state.array.findIndex((todo) => todo.id === action.todo.id);
      return {...state, array: [...state.array.slice(0, idx), ...state.array.slice(idx + 1)]};
      break;

    case actions.UPDATE_COUNT:
      console.log('UPDATE_COUNT',1);
      const { count } = action;
      return {
        ...state, count
      };
      break;

    default:
      return state
  }
}


// If you dispatch { type : I_AM_TYPE, data: { id: 1, pay: "pay", array: []}}
// you can get the data from corresponding action
// const reducer = (state = initState, action) => {
//     switch(action.type) {
//       case actions.I_AM_TYPE:
//         return {...state, data: action data}
// data === { id: 1, ....}
//       case actions.I_AM_NOT_TYPE:
//         return { ...state, data: action.data} // action.data === undefined
//       default: return state
//     }
// }

export default reducer