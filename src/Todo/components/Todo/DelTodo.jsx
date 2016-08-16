import React, { Component, PropTypes } from 'react'

export default class DelTodo extends Component {
  render(){
    return (
      <button className="btn btn-danger" onClick={this.props.delTodo}>Del</button>
    )
  }
}
