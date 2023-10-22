import React from 'react'

function ListRender() {
    const students = [
        {
            name: 'Akbar',
            age: 25,
            class: 12
        },
        {
            name: 'Ahmed',
            age: 12,
            class: 6
        },
        {
            name: 'Haniya',
            age: 5,
            class: 1
        }
    ];
  return (
    <div>
    { students.map(std => <h1>I am {std.name}, My age is {std.age} and I study in class {std.class}</h1>) }
    </div>
  )
}

export default ListRender;