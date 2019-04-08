import actions from './actions'

// Initial state of our application 

// @Anton todo: Add counter field and write increase/decrease functionality
// @Anton todo: Add update and delete actions for todos
const initState = {
    array: []
}

// Reducer rerun every time we dispatch an action
const reducer = (state = initState, action) => {
    switch(action.type) {
      case actions.ADD_TODO:
        return {...state, array: [...state.array, action.todo]}
      default: return state
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