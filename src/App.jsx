import React from 'react'
import {Link} from 'react-router'

require('vendor/vendor.scss');

export class App extends React.Component {
  render() {
    return (
      <div>
        React Example
        <div>
          <Link to='/counter'>
            <button className="btn btn-default">Counter Page</button>
          </Link>
          <Link to='/about/Meow'>
            <button className="btn btn-danger">About Page</button>
          </Link>
          <Link to='/todo'>
            <button className="btn btn-primary">To Do</button>
          </Link>
        </div>
        {this.props.children}
      </div>
    )
  }
}
