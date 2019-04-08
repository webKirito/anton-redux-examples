import React, { useState } from 'react'
import { connect } from 'react-redux'
import actions from './redux/actions'


const App = props => {
  const { store, array, addTodo } = props
  return (
    <div>
      <button onClick={() => addTodo({ name: "Name" })}>DIS</button>  
      <ul>
        {array.map(i => i.name)}
      </ul>
    </div>
  )
}

// Gets fields from store and path to the components
const mapStateToProps = state => ({
  array: state.array,
  store: state
})

// Sends actions from action creators to the store -> this action calls reducer -> state changes and we get new store -> we get new array and store variables
const mapDispatchToProps = dispatch => ({
  addTodo: (todo) => dispatch(actions.addTodo(todo)),
})



export default connect(mapStateToProps,mapDispatchToProps)(App);
