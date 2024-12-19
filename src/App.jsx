import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  const firstNmae ="Gaurav"
  

  return (
    <>

     <h1 className='heading'>Hello React</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt 
      accusantium quasi nobis sint necessitatibus qui obcaecati beatae, quam odio inventore fugit,
       asperiores assumenda cupiditate nam illo est. Odio, provident enim.</p>
       <h2>hello  {firstNmae}</h2>
    </>
  )
}

export default App
