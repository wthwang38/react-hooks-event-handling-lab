// Code EyesOnMe Component Here
import React from 'react'
const handleFocus = ()=> (console.log("Good!"))
const handleBlur = ()=>(console.log('Hey! Eyes on me!'))
export const EyesOnMe = () => {
  return (
    <div>
        <button onFocus={handleFocus} onBlur={handleBlur}>Eyes on me</button>
    </div>
  )
}
export default EyesOnMe;
