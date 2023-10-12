import React, { Component } from 'react'

export default class ClassComp extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.value}</h1>
      </div>
    )
  }
}
