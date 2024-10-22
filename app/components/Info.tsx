import React from 'react'

interface Person{
    name:'string'
    surname:'string'
    age:'number'
}


const info = (props:Person) => {
  return (
    <div>
      <p>My name is {props.name} { props.surname} { props.age}</p>




    </div>
  )
}

export default info