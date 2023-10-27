import React, { useContext } from 'react'
import { MyContext } from './MyContext'
export const SecondComponent = () => {
    const {name, setName} = useContext(MyContext);
  return (
    <div>
    <h1>{name}</h1>
      <button onClick={() => setName('Raza')}>
        Set Name
    </button>
    </div>
  )
}

export default SecondComponent