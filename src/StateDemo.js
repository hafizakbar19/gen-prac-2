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

        clickHandler(){
        this.setState({
            age: 37+1
        })
    }
  render() {


    return (
      <>
        <h1>{this.state.city}</h1>
        <h2>{this.state.age}</h2>
        <h2>{this.state.name}</h2>
        <input type="submit" value="click" onClick={this.clickHandler.bind(this)} />
      </>
    )
  }
}
