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
        },
        {
            name: 'Taha',
            age: 12,
            class: 6
        },
        {
            name: 'Sadia',
            age: 12,
            class: 6
        }
    ];
  return (
    <div>
    { students.map((std,index) => <h1 key={index}>I am {std.name}, My age is {std.age} and I study in class {std.class}</h1>) }
    </div>
  )
}

export default ListRender;