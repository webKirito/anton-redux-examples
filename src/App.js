import React, { useState } from 'react'
import { connect } from 'react-redux'
import actions from './redux/actions'


const App = props => {
  const { store, array, addTodo, toggleTodo, deleteTodo } = props;
  // const [id, setId] = useState(100);
  //
  // const addHandler = () => {
  //   addTodo({ name: "Name", id, completed: false })
  //   setId(1 + id)
  // }
  // let id = new Date().getTime();
  // const createTask = (text = 'example text') => {
  //   return {
  //     text,
  //     completed: false,
  //     id: id
  //   }
  // }
  let id = new Date().getTime();
  return (
    <div>
      <button className="uk-button uk-button-primary" onClick={() => addTodo({ name: "Name", id: id, completed: false })}>ADD</button>
      <ul className="uk-list uk-list-striped">
        {array.map(i =>
          (<li key={i.id}>


            {/*<b>{i.id}) </b>*/}
            <p>{i.name} <b>{i.completed + ''}</b></p>
            <button className="uk-button uk-button-default" onClick={() => toggleTodo(i)}>Toggle</button>
            <button className="uk-button uk-button-danger" onClick={() => deleteTodo(i)}>Delete</button>



          </li>))
        }
      </ul>
    </div>
  )
}

// Gets fields from store and path to the components
const mapStateToProps = state => ({
  array: state.array,
  store: state,
  count: state.count
})

// Sends actions from action creators to the store -> this action calls reducer -> state changes and we get new store -> we get new array and store variables
const mapDispatchToProps = dispatch => ({
  addTodo: (todo) => dispatch(actions.addTodo(todo)),
  toggleTodo: (todo) => dispatch(actions.toggleTodo(todo)),
  deleteTodo: (todo) => dispatch(actions.deleteTodo(todo))
})



export default connect(mapStateToProps,mapDispatchToProps)(App);
