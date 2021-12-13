import React from 'react'
import { useState } from 'react'

const Btn = () => {
  const [name, setName] = useState('Asari')
  const [age, setAge] = useState(90)

  const handleClick = () => {
    setName('Buhari')
    setAge(5)
  }

  //   let color = 'Blue'

  //   const hold = () => {
  //     color = 'pink'
  //     console.log(color)
  //   }
  return (
    <div>
      {/* <p>{color} </p>
      <button onClick={hold}>Touch</button> */}

      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClick}>Touch it</button>
    </div>
  )
}

export default Btn