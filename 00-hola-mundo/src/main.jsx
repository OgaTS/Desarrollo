import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

// FUNCION CREADA CON UNA CONSTANTE
// const Button = ({text}) =>{
//   return(
//     <button>{text}</button>
//   )
// }

// OCUPANDO EL React.Fragment tambien se puede ocupar de esta manera <> </>
// root.render(
//   <React.Fragment>
//     <Button text='boton 1' />
//     <Button text='boton 2' />
//   </React.Fragment>
// )


root.render(
  <App />
)