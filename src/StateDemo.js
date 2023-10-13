import React, { Component } from 'react'

export default class StateDemo extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: 'Akbar',
            age: 37,
            city: 'Karachi',
            value: this.props.value,
        }
    }
  render() {
    return (
      <>
        <h1>{this.state.city}</h1>
        <h2>{this.state.value}</h2>
      </>
    )
  }
}
