import React, { Component, PropTypes } from 'react';
import DelTodo from './DelTodo';

export default class Todo extends Component {
  render() {
    return (
      <div>
        <li onClick={this.props.onClick}
          style={{
            textDecoration: this.props.completed ? 'line-through' : 'none',
            cursor: this.props.completed ? 'default' : 'pointer'
          }}>
          {this.props.text}
        </li>

        <DelTodo delTodo={this.props.delTodo}/>

      </div>

    )
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
}
