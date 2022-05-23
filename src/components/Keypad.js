// Code Keypad Component Here
import React from 'react'
const handleInput = ()=> (console.log('Entering password...'))
export const Keypad = () => {
  return (
    <div>Keypad
        <input type="password" onChange={handleInput}/>
     </div>
  )
}
export default Keypad;