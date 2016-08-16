import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo, toggleTodo, delTodo} from 'Todo/actions/TodoActions'
import AddTodo from 'Todo/components/Todo/AddTodo'
import TodoList from 'Todo/components/Todo/TodoList'

class App extends Component {
  render() {
    const { dispatch, todos } = this.props
    return (
      <div>
        <AddTodo onAddClick={text => dispatch(addTodo(text))} />
        <TodoList todos={todos}
                  onTodoClick={index => dispatch(toggleTodo(index))}
                  onDelClick ={index => dispatch(delTodo(index))}/>
      </div>
    )
  }
}

export default connect(state => state)(App);
