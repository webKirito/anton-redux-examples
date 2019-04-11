// VERY IMPORTANT!!!

// {
//     type: ADD_KITTY,
//     kitty: "Cat",
// } - it is ACTION

// const removeKitty = (id) => ({
//     type: REMOVE_KITTY,
//     id,
// }) it is ACTION CREATOR - you don`t need to write type in your app components - just call action creator
//======================================================================================================================
// counter
const UPDATE_COUNT = "UPDATE_COUNT";
const update_count = (count) => ({
  type: UPDATE_COUNT,
  count,
});
//======================================================================================================================
const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const DELETE_TODO = "DELETE_TODO";

const addTodo = (todo) => ({
  type: ADD_TODO,
  todo,
});

const toggleTodo = (todo) => ({
  type: TOGGLE_TODO,
  todo
});

const deleteTodo = (todo) => ({
  type: DELETE_TODO,
  todo
});

// @Anton todo : add all type constants and action creators
const actions = {
  ADD_TODO,
  addTodo,

  TOGGLE_TODO,
  toggleTodo,

  DELETE_TODO,
  deleteTodo,

  UPDATE_COUNT,
  update_count
};

export default actions