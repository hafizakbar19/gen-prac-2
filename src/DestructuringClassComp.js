import React, { Component } from 'react'

export default class DestructuringClassComp extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            name: "Tazal",
            age: 37,
            city: "Khair Pur"
        }
    }
  render() {
    const {name, age, city} = this.state;
    const {value} = this.props;
    return (
      <>
        <h1>{name}</h1>
        <h2>{age}</h2>
        <h2>{city}</h2>
        <h2>{value}</h2>
      </>
    )
  }
}
