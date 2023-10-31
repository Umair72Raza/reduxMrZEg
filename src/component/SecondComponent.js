import React, { useContext } from 'react'
//import { MyContext } from './MyContext'
import { myContext } from '../context/context';
export const SecondComponent = () => {
    //const {name, setName} = useContext(MyContext);
    const {text,setText} = useContext(myContext)
   return (
    <div>
    <h1>{text}</h1>
      <button onClick={() => setText('Raza')}>
        Set Name
    </button>
    </div>
  )
}

export default SecondComponent