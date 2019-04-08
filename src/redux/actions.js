// VERY IMPORTANT!!!

// {
//     type: ADD_KITTY,
//     kitty: "Cat",
// } - it is ACTION

// const removeKitty = (id) => ({
//     type: REMOVE_KITTY,
//     id,
// }) it is ACTION CREATOR - you don`t need to write type in your app components - just call action creator

const ADD_TODO = "ADD_TODO"

const addTodo = (todo) => ({
    type: ADD_TODO,
    todo,
})

// @Anton todo : add all type constants and action creators
const actions = {
    ADD_TODO,
    addTodo
}

export default actions